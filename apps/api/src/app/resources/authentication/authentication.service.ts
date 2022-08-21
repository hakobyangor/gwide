import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'

import * as bcrypt from 'bcrypt'
import { FindUniqueUserArgs, User } from '@gwide/api/generated/db-types'
import { RegisterInput } from './dto/register.input'
import { randomBytes } from 'node:crypto'
import moment = require('moment')
import { resetPassword } from './dto/reset-password.input'
import { SendgridService } from '../sendgrid/sendgrid.service'
import { Status, YesNo } from '@prisma/client'

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private sendgridService: SendgridService
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ where: { email } })
    if (!user) return null

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return null

    return user
  }

  login(user: User) {
    return user
  }

  async signUp(signUpInput: RegisterInput) {
    const { email, password: plainPassword, firstName, lastName, role } = signUpInput
    const password = await bcrypt.hash(plainPassword, 10)

    const userCheck = await this.userService.findOne({ where: { email: email } })

    if (userCheck) {
      throw new Error('User Exist with provided email')
    }

    const hash = await bcrypt.hash(randomBytes(16), 10)

    const user = await this.userService.create({
      data: {
        email,
        password,
        firstName,
        lastName,
        role,
        hash,
        hashExpiredAt: moment().add(1, 'hour').toDate()
      }
    })

    const mail = {
      to: user.email,
      subject: 'Verify Email',
      from: process.env.SEND_GRID_MAIL_FROM_NO_REPLY,
      text: 'Verify Email',
      html: `<h1>verify Email</h1> for verify Email use this <a href="${process.env.FRONT_URL}reset-password/${hash}"> link </a>`
    }

    await this.sendgridService.send(mail)

    return user
  }

  async resetPasswordEmail(userEmail: FindUniqueUserArgs) {
    const user = await this.userService.findOne(userEmail)

    if (user) {
      const hash = await bcrypt.hash(randomBytes(16), 10)
      const mail = {
        to: user.email,
        subject: 'Reset Password',
        from: process.env.SEND_GRID_MAIL_FROM_NO_REPLY,
        text: 'Reset Password',
        html: `<h1>Reset Password</h1> for reset password use this <a href="${process.env.FRONT_URL}reset-password/${hash}"> link </a>`
      }

      await this.sendgridService.send(mail)

      this.userService.update({
        data: { hash, hashExpiredAt: moment().add(1, 'hour').toDate() },
        where: { email: user.email }
      })
      //todo send email
      return user
    } else {
      throw new Error(
        'If the e-mail is registered in the system, we will send you an e-mail with the reset link '
      )
    }
  }

  async resetPassword(resetPasswordData: resetPassword) {
    const { hash, password } = resetPasswordData

    const user = await this.userService.findByHash(hash)

    if (!user) {
      throw new Error('Reset Password Hash expired!!!')
    }

    const encryptedPassword = await bcrypt.hash(password, 10)

    await this.userService.update({
      data: { hash: null, hashExpiredAt: null, password: encryptedPassword },
      where: { id: user.id }
    })

    return user
  }

  async verifyEmail(hash: string) {
    const user = await this.userService.findByHash(hash)
    if (user) {
      return this.userService.update({
        where: { id: user.id },
        data: {
          status: Status.ACTIVE,
          hash: null,
          hashExpiredAt: null
        }
      })
    } else {
      throw new Error('Invalid or expired hash')
    }
  }
}

import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'

import * as bcrypt from 'bcrypt'
import { User } from '@gwide/api/generated/db-types'
import { RegisterInput } from './dto/register.input'

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {}

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

    return this.userService.create({ data: { email, password, firstName, lastName, role } })
  }
}

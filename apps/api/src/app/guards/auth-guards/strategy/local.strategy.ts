import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthenticationService } from '../../../resources/authentication/authentication.service'
import { User } from '@gwide/api/generated/db-types'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { YesNo } from '@prisma/client'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthenticationService) {
    super({ usernameField: 'email', passwordField: 'password' }) // email will be passed to validate function
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(email, password)

    if (!user) {
      throw new UnauthorizedException(
        'The entered e-mail or password are incorrect, please try again'
      )
    } else if (user && user.isVerified === YesNo.NO) {
      throw new UnauthorizedException('please verify your email to sign in')
    }
    return user
  }
}

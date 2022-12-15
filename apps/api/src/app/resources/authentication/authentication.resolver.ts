import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AuthenticationService } from './authentication.service'
import { FindUniqueUserArgs, User } from '@gwide/api/generated/db-types'
import { LoginInput } from './dto/login.input'
import { SetAuthGuard } from '../../guards/auth-guards/set-auth.guard'
import { UseGuards } from '@nestjs/common'
import { IUserContext } from '../../guards/auth-guards/types'
import { RegisterInput } from './dto/register.input'
import { resetPassword } from './dto/reset-password.input'
import { verifyEmail } from './dto/verify-email.input'
import { CheckAuthGuard } from '../../guards/auth-guards/check-auth.guard'
import { CurrentUser } from '../../decorators/current-user.decorator'
import { UserService } from '../user/user.service'

@Resolver(() => User)
export class AuthenticationResolver {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly userService: UserService
  ) {}

  @UseGuards(SetAuthGuard)
  @Mutation(() => User)
  login(@Args('loginInput') loginInput: LoginInput, @Context() context: IUserContext) {
    const { user } = context

    return this.authenticationService.login(user)
  }

  @Mutation(() => User)
  @UseGuards(CheckAuthGuard)
  async logout(@Context() context: IUserContext, @CurrentUser() currentUser: User) {
    const user = await this.userService.findOne({ where: { id: currentUser.id } })
    const reply = context.reply
    reply.setCookie('token', '')
    reply.setCookie('token-expires', '')
    return user
  }

  @Mutation(() => User)
  signUp(@Args('signUpInput') signUpInput: RegisterInput) {
    return this.authenticationService.signUp(signUpInput)
  }

  @Mutation(() => User)
  verifyEmail(@Args('verifyEmail') verifyEmail: verifyEmail) {
    return this.authenticationService.verifyEmail(verifyEmail.hash)
  }

  @Mutation(() => User)
  resetPasswordEmail(@Args() findUserArguments: FindUniqueUserArgs) {
    return this.authenticationService.resetPasswordEmail(findUserArguments)
  }

  @Query(() => Boolean)
  checkResetPasswordHash(@Args('checkResetPasswordHash') checkResetPasswordHash: verifyEmail) {
    return this.authenticationService.checkResetPasswordHash(checkResetPasswordHash.hash)
  }

  @Mutation(() => User)
  resetPassword(@Args('resetPassword') resetPasswordData: resetPassword) {
    return this.authenticationService.resetPassword(resetPasswordData)
  }
}

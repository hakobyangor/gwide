import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AuthenticationService } from './authentication.service'
import { FindUniqueUserArgs, User } from '@gwide/api/generated/db-types'
import { LoginInput } from './dto/login.input'
import { SetAuthGuard } from '../../guards/auth-guards/set-auth.guard'
import { UseGuards } from '@nestjs/common'
import { IUserContext } from '../../guards/auth-guards/types'
import { RegisterInput } from './dto/register.input'
import { resetPassword } from './dto/reset-password.input'

@Resolver(() => User)
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(SetAuthGuard)
  @Mutation(() => User)
  login(@Args('loginInput') loginInput: LoginInput, @Context() context: IUserContext) {
    const { user } = context

    return this.authenticationService.login(user)
  }

  @Mutation(() => User)
  signUp(@Args('signUpInput') signUpInput: RegisterInput) {
    return this.authenticationService.signUp(signUpInput)
  }

  @Query(() => User)
  resetPasswordEmail(@Args() findUserArguments: FindUniqueUserArgs) {
    return this.authenticationService.resetPasswordEmail(findUserArguments)
  }

  @Mutation(() => User)
  resetPassword(@Args('resetPassword') resetPasswordData: resetPassword) {
    return this.authenticationService.resetPassword(resetPasswordData)
  }
}

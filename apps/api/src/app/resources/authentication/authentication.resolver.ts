import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { AuthenticationService } from './authentication.service'
import { User } from '@gwide/api/generated/db-types'
import { LoginInput } from './dto/login.input'
import { SetAuthGuard } from '../../guards/auth-guards/set-auth.guard'
import { UseGuards } from '@nestjs/common'
import { IUserContext } from '../../guards/auth-guards/types'
import { RegisterInput } from './dto/register.input'

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
}

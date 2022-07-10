import { InputType, PickType } from '@nestjs/graphql'
import { UserCreateInput } from '@gwide/api/generated/db-types'

@InputType()
export class LoginInput extends PickType(UserCreateInput, ['email', 'password']) {}

import { InputType, PickType } from '@nestjs/graphql'
import { UserCreateInput } from '@gwide/api/generated/db-types'

@InputType()
export class RegisterInput extends PickType(UserCreateInput, [
  'firstName',
  'lastName',
  'role',
  'email',
  'password',
  'status'
]) {}

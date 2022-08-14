import { UserUpdateInput } from '@gwide/api/generated/db-types'
import { InputType, PickType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PickType(UserUpdateInput, [
  'firstName',
  'lastName',
  'bio',
  'image',
  'country',
  'email',
  'password'
]) {}

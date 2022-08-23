import { UserUpdateInput } from '@gwide/api/generated/db-types'
import { Field, InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(UserUpdateInput) {
  @Field() countryId: number
}

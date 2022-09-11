import { CreateBookingInput } from './create-booking.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateBookingInput extends PartialType(CreateBookingInput) {
  @Field(() => Int)
  id: number

  @Field(() => Int, { nullable: false })
  languageId!: number

  @Field(() => Date, { nullable: true })
  date?: Date | string

  @Field(() => String, { nullable: true })
  userComment?: string
}

import { InputType, Int, Field } from '@nestjs/graphql'
import { Max, Min } from 'class-validator'

@InputType()
export class CreateBookingReviewInput {
  @Field(() => Int, { nullable: false })
  bookingId!: number

  @Field(() => Int, { nullable: false })
  @Min(1)
  @Max(5)
  rate!: number

  @Field(() => String, { nullable: true })
  review: string
}

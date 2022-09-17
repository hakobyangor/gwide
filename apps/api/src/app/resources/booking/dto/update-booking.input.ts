import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class UpdateBookingInput {
  @Field(() => Int)
  id: number

  @Field(() => Int, { nullable: false })
  languageId!: number

  @Field(() => Date, { nullable: true })
  date?: Date | string

  @Field(() => String, { nullable: true })
  userComment?: string
}

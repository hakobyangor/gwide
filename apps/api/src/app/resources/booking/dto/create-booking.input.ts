import { InputType, Int, Field } from '@nestjs/graphql'
import { IsDate, MinDate } from 'class-validator'
import moment = require('moment')

@InputType()
export class CreateBookingInput {
  @Field(() => Int, { nullable: false })
  languageId!: number

  @Field(() => Int, { nullable: false })
  tourId!: number

  @Field(() => Date, { nullable: true })
  @IsDate()
  @MinDate(moment().add('1', 'day').toDate())
  date: Date | string

  @Field(() => String, { nullable: true })
  userComment?: string
}

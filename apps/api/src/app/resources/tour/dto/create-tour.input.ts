import {
  Status,
  TourCityCreateManyTourInput,
  TourLanguageCreateManyTourInput,
  TourTourCategoryCreateManyTourInput
} from '@gwide/api/generated/db-types'
import { Field, Float, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateTourInput {
  @Field(() => String, { nullable: false })
  name!: string
  @Field(() => Status, { nullable: true })
  status?: keyof typeof Status

  @Field(() => Int, { nullable: false })
  guideId!: number

  @Field(() => Int, { nullable: false })
  currencyId!: number

  @Field(() => Int, { nullable: false })
  maxCapacity!: number

  @Field(() => Float, { nullable: false })
  price!: number

  @Field(() => [TourCityCreateManyTourInput], { nullable: true })
  tourCity!: TourCityCreateManyTourInput[]

  @Field(() => [TourTourCategoryCreateManyTourInput], { nullable: true })
  tourTourCategory!: TourTourCategoryCreateManyTourInput[]

  @Field(() => [TourLanguageCreateManyTourInput], { nullable: true })
  tourLanguage!: TourLanguageCreateManyTourInput[]

  // @Field(() => Date, { nullable: true })
  // createdAt?: Date | string
  // @Field(() => Date, { nullable: true })
  // updatedAt?: Date | string
}

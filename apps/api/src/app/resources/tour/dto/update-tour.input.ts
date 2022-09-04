import {
  Status,
  TourCityCreateManyTourInput,
  TourFormat,
  TourImageCreateManyTourInput,
  TourLanguageCreateManyTourInput,
  TourTourCategoryCreateManyTourInput,
  TourType
} from '@gwide/api/generated/db-types'
import { Field, Float, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateTourInput {
  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => String, { nullable: false })
  image!: string

  @Field(() => Status, { nullable: true })
  status?: keyof typeof Status

  @Field(() => Int, { nullable: false })
  guideId!: number

  @Field(() => TourType, { nullable: false })
  type!: keyof typeof TourType

  @Field(() => TourFormat, { nullable: false })
  format!: keyof typeof TourFormat

  @Field(() => Int, { nullable: false })
  durationHours!: number

  @Field(() => Int, { nullable: false })
  durationMinutes!: number

  @Field(() => Int, { nullable: false })
  currencyId!: number

  @Field(() => Int, { nullable: false })
  maxCapacity!: number

  @Field(() => Float, { nullable: false })
  price!: number

  @Field(() => [TourCityCreateManyTourInput], { nullable: false })
  tourCity!: TourCityCreateManyTourInput[]

  @Field(() => [TourTourCategoryCreateManyTourInput], { nullable: true })
  tourTourCategory!: TourTourCategoryCreateManyTourInput[]

  @Field(() => [TourLanguageCreateManyTourInput], { nullable: true })
  tourLanguage!: TourLanguageCreateManyTourInput[]

  @Field(() => [TourImageCreateManyTourInput], { nullable: true })
  tourImage!: TourImageCreateManyTourInput[]
}

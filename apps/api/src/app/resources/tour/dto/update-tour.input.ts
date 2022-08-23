import {
  Status,
  TourCityCreateManyTourInput,
  TourLanguageCreateManyTourInput,
  TourTourCategoryCreateManyTourInput
} from '@gwide/api/generated/db-types'
import { Field, Float, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateTourInput {
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

  @Field(() => [TourCityCreateManyTourInput], { nullable: false })
  tourCity!: TourCityCreateManyTourInput[]

  @Field(() => [TourTourCategoryCreateManyTourInput], { nullable: true })
  tourTourCategory!: TourTourCategoryCreateManyTourInput[]

  @Field(() => [TourLanguageCreateManyTourInput], { nullable: true })
  tourLanguage!: TourLanguageCreateManyTourInput[]
}

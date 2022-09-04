import { TourFormat, TourType } from '@gwide/api/generated/db-types'
import { Field, Float, InputType, Int } from '@nestjs/graphql'

@InputType()
export class GetToursInput {
  @Field(() => [Int], { nullable: true })
  tourCity: number[]

  @Field(() => [Int], { nullable: true })
  tourCategory: number[]

  @Field(() => [Int], { nullable: true })
  tourLanguage: number[]

  @Field(() => [TourFormat], { nullable: true })
  tourFormat: TourFormat[]

  @Field(() => [TourType], { nullable: true })
  tourType: TourType[]

  @Field(() => Float, { nullable: true })
  priceMin: number

  @Field(() => Float, { nullable: true })
  priceMax: number

  @Field(() => Boolean, { nullable: true })
  showOnlyTopRated: boolean
}

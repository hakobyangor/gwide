import { TourCreateInput } from '@gwide/api/generated/db-types'
import { InputType, PickType } from '@nestjs/graphql'

@InputType()
export class CreateTourInput extends PickType(TourCreateInput, [
  'name',
  'guide',
  'currency',
  'maxCapacity',
  'price',
  'tourTourCategory',
  'tourCity',
  'tourLanguage'
]) {}

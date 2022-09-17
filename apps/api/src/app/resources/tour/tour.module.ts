import { Module } from '@nestjs/common'
import { TourService } from './tour.service'
import { TourResolver } from './tour.resolver'
import { DbService } from '@gwide/api/data-access-db'
import { CountryService } from '../country/country.service'

@Module({
  providers: [TourResolver, TourService, DbService, CountryService]
})
export class TourModule {}

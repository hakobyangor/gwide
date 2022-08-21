import { Module } from '@nestjs/common'
import { TourService } from './tour.service'
import { TourResolver } from './tour.resolver'
import { DbService } from '@gwide/api/data-access-db'

@Module({
  providers: [TourResolver, TourService, DbService]
})
export class TourModule {}

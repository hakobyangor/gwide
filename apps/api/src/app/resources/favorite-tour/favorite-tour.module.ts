import { Module } from '@nestjs/common'
import { FavoriteTourService } from './favorite-tour.service'
import { FavoriteTourResolver } from './favorite-tour.resolver'
import { DbService } from '@gwide/api/data-access-db'

@Module({
  providers: [FavoriteTourResolver, FavoriteTourService, DbService]
})
export class FavoriteTourModule {}

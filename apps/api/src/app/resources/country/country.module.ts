import { Module } from '@nestjs/common'
import { CountryService } from './country.service'
import { CountryResolver } from './country.resolver'
import { DbService } from '@gwide/api/data-access-db'

@Module({
  providers: [CountryResolver, CountryService, DbService]
})
export class CountryModule {}

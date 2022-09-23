import { City, Country } from '@gwide/api/generated/db-types'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { CountryService } from './country.service'

@Resolver()
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query(() => [City])
  async getCities(@Args('countryId') countryId: number) {
    return this.countryService.getCountryCities(countryId)
  }

  @Query(() => [Country])
  async getCountries() {
    return this.countryService.getCountries()
  }
}

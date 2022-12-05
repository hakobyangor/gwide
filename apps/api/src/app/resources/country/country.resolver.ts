import { City, Country } from '@gwide/api/generated/db-types'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { CountryService } from './country.service'

@Resolver()
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Query(() => [City])
  async getCitiesByCountry(@Args('countryId') countryId: number) {
    return this.countryService.getCountryCities(countryId)
  }

  @Query(() => [Country])
  async getCountries() {
    return this.countryService.getCountries()
  }

  @Query(() => [Country])
  async getHomeCountries() {
    return this.countryService.getHomeCountries()
  }

  @Query(() => [City])
  async getCities() {
    return this.countryService.getCities()
  }

  @Query(() => City)
  async getCityById(@Args('cityId') cityId: number) {
    return this.countryService.getCityById(cityId)
  }
}

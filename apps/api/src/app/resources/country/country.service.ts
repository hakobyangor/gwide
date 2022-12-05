import { DbService } from '@gwide/api/data-access-db'
import { Status } from '@gwide/api/generated/db-types'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CountryService {
  constructor(private database: DbService) {}

  getCountryCities(countryId: number) {
    return this.database.city.findMany({ where: { countryId, status: Status.ACTIVE } })
  }

  getCountries() {
    return this.database.country.findMany({ where: { status: Status.ACTIVE } })
  }

  getHomeCountries() {
    return this.database.country.findMany({
      include: { _count: { select: { City: true } } },
      where: { status: Status.ACTIVE },
      take: 3,
      orderBy: { City: { _count: 'desc' } }
    })
  }

  getCities() {
    return this.database.city.findMany({
      where: { status: Status.ACTIVE },
      include: { country: {} }
    })
  }

  getCityById(id) {
    return this.database.city.findFirst({
      where: { status: Status.ACTIVE, id },
      include: { country: {} }
    })
  }
}

import { DbService } from '@gwide/api/data-access-db'
import { CreateOneTourArgs, TourUpdateInput, TourWhereInput } from '@gwide/api/generated/db-types'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TourService {
  constructor(private database: DbService) {}

  create(createTourInput: CreateOneTourArgs) {
    return this.database.tour.create({
      data: createTourInput.data,
      include: {
        currency: true,
        tourCity: { include: { city: true } },
        tourLanguage: { include: { language: true } },
        tourTourCategory: { include: { tourCategory: true } }
      }
    })
  }

  findAll(where: TourWhereInput) {
    return this.database.tour.findMany({
      where,
      include: {
        currency: true,
        tourCity: {
          include: { city: true }
        },
        tourLanguage: {
          include: {
            language: true
          }
        },
        tourTourCategory: {
          include: {
            tourCategory: true
          }
        },
        guide: {
          include: {
            country: {},
            Tour: {
              include: {
                currency: {},
                _count: {
                  select: { tourCity: true, tourLanguage: true, tourTourCategory: true }
                }
              }
            }
          }
        }
      }
    })
  }

  findOne(id: number) {
    return this.database.tour.findUnique({
      where: { id }
    })
  }

  async update(id: number, updateTourInput: TourUpdateInput) {
    if (updateTourInput.tourCity) {
      await this.database.tourCity.deleteMany({ where: { tourId: id } })
    }
    if (updateTourInput.tourLanguage) {
      await this.database.tourLanguage.deleteMany({ where: { tourId: id } })
    }
    if (updateTourInput.tourTourCategory) {
      await this.database.tourTourCategory.deleteMany({ where: { tourId: id } })
    }
    return this.database.tour.update({
      where: { id },
      include: {
        currency: true,
        tourCity: {
          include: {
            city: true
          }
        },
        tourLanguage: {
          include: {
            language: true
          }
        },
        tourTourCategory: {
          include: {
            tourCategory: true
          }
        }
      },
      data: updateTourInput
    })
  }

  async remove(id: number) {
    await this.database.tourCity.deleteMany({ where: { tourId: id } })
    await this.database.tourLanguage.deleteMany({ where: { tourId: id } })
    await this.database.tourTourCategory.deleteMany({ where: { tourId: id } })

    return this.database.tour.delete({
      where: { id }
    })
  }
}

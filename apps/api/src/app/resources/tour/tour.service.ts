import { DbService } from '@gwide/api/data-access-db'
import { CreateOneTourArgs } from '@gwide/api/generated/db-types'
import { Injectable, UseGuards } from '@nestjs/common'
import { CheckAuthGuard } from '../../guards/auth-guards/check-auth.guard'
import { UpdateTourInput } from './dto/update-tour.input'

@Injectable()
export class TourService {
  constructor(private database: DbService) {}

  @UseGuards(CheckAuthGuard)
  create(createTourInput: CreateOneTourArgs) {
    return this.database.tour.create(createTourInput)
  }

  findAll(where) {
    return this.database.tour.findMany({
      where,
      include: {
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

  async update(id: number, updateTourInput: UpdateTourInput) {
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

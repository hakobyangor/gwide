import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { TourService } from './tour.service'
import { CreateTourInput } from './dto/create-tour.input'
import { UpdateTourInput } from './dto/update-tour.input'
import { UnauthorizedException, UseGuards } from '@nestjs/common'
import { Tour } from '@gwide/api/generated/db-types'
import { CheckGuideAuthGuard } from '../../guards/auth-guards/check-guide-auth.guard'
import { CurrentUser } from '../../decorators/current-user.decorator'
import { Status, User } from '@prisma/client'
import { CheckAuthGuard } from '../../guards/auth-guards/check-auth.guard'
import { GetToursInput } from './dto/get-tours.input'
import { CountryService } from '../country/country.service'

@Resolver(() => Tour)
export class TourResolver {
  constructor(
    private readonly tourService: TourService,
    private readonly countryService: CountryService
  ) {}

  @UseGuards(CheckGuideAuthGuard)
  @Mutation(() => Tour)
  createTour(
    @Args('createTourInput') createTourInput: CreateTourInput,
    @CurrentUser() currentUser: User
  ) {
    if (currentUser.id !== createTourInput.guideId) {
      throw new UnauthorizedException()
    }

    const createData = {
      ...createTourInput,
      guide: { connect: { id: createTourInput.guideId } },
      currency: { connect: { id: createTourInput.currencyId } },
      tourCity: { createMany: { data: createTourInput.tourCity } },
      tourTourCategory: { createMany: { data: createTourInput.tourTourCategory } },
      tourLanguage: { createMany: { data: createTourInput.tourLanguage } },
      tourImage: { createMany: { data: createTourInput.tourImage } }
    }

    delete createData.guideId
    delete createData.currencyId

    return this.tourService.create({
      data: createData
    })
  }

  @Query(() => [Tour])
  @UseGuards(CheckAuthGuard)
  async getToursByCountry(@Args('countryId') countryId: number) {
    const where: { [k: string]: any } = {}

    where.status === Status.ACTIVE
    where.tourCity = {
      some: {
        city: {
          countryId
        }
      }
    }

    return this.tourService.findAllByFilter(where)
  }

  @Query(() => [Tour])
  @UseGuards(CheckAuthGuard)
  getTours(@Args('getToursInput') getToursInput: GetToursInput) {
    const where: { [k: string]: any } = {}

    if (getToursInput.tourType) {
      where.type = { in: getToursInput.tourType }
    }

    if (getToursInput.tourFormat) {
      where.format = { in: getToursInput.tourFormat }
    }

    if (getToursInput.showOnlyTopRated) {
      where.rating = { gte: 4 }
    }

    if (getToursInput.priceMin && getToursInput.priceMax) {
      where.price = { gte: getToursInput.priceMin, lte: getToursInput.priceMax }
    }

    if (getToursInput.tourCity) {
      where.tourCity = { some: { cityId: { in: getToursInput.tourCity } } }
    }

    if (getToursInput.tourCategory) {
      where.tourTourCategory = { some: { tourCategoryId: { in: getToursInput.tourCategory } } }
    }

    if (getToursInput.tourLanguage) {
      where.tourLanguage = { some: { languageId: { in: getToursInput.tourLanguage } } }
    }

    where.status === Status.ACTIVE

    return this.tourService.findAllByFilter(where)
  }

  @Query(() => Tour, { name: 'getTour' })
  @UseGuards(CheckAuthGuard)
  getTourById(@Args('id', { type: () => Int }) id: number) {
    return this.tourService.getById(id)
  }

  @Mutation(() => Tour)
  @UseGuards(CheckGuideAuthGuard)
  async updateTour(
    @Args('updateTourInput') updateTourInput: UpdateTourInput,
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() currentUser: User
  ) {
    const tour = await this.tourService.getById(id)
    if (!tour || currentUser.id !== tour.guideId) {
      throw new UnauthorizedException()
    }

    const updateData = {
      ...updateTourInput,
      tourCity: { createMany: { data: updateTourInput.tourCity } },
      tourTourCategory: { createMany: { data: updateTourInput.tourTourCategory } },
      tourLanguage: { createMany: { data: updateTourInput.tourLanguage } },
      tourImage: { createMany: { data: updateTourInput.tourImage } }
    }

    return this.tourService.update(id, updateData)
  }

  @Mutation(() => Tour)
  @UseGuards(CheckGuideAuthGuard)
  async removeTour(@Args('id', { type: () => Int }) id: number, @CurrentUser() currentUser: User) {
    const tour = await this.tourService.getById(id)
    if (!tour || currentUser.id !== tour.guideId) {
      throw new UnauthorizedException()
    }
    return this.tourService.remove(id)
  }
}

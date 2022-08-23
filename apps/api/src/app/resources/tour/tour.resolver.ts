import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { TourService } from './tour.service'
import { CreateTourInput } from './dto/create-tour.input'
import { UpdateTourInput } from './dto/update-tour.input'
import { UnauthorizedException, UseGuards } from '@nestjs/common'
import { FindManyTourArgs, Tour } from '@gwide/api/generated/db-types'
import { CheckGuideAuthGuard } from '../../guards/auth-guards/check-guide-auth.guard'
import { CurrentUser } from '../../decorators/current-user.decorator'
import { User } from '@prisma/client'
import { CheckAuthGuard } from '../../guards/auth-guards/check-auth.guard'

@Resolver(() => Tour)
export class TourResolver {
  constructor(private readonly tourService: TourService) {}

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
      tourLanguage: { createMany: { data: createTourInput.tourLanguage } }
    }

    delete createData.guideId
    delete createData.currencyId

    return this.tourService.create({
      data: createData
    })
  }

  @Query(() => [Tour])
  @UseGuards(CheckAuthGuard)
  getTours(@Args() findTourArguments: FindManyTourArgs) {
    return this.tourService.findAll(findTourArguments.where)
  }

  @Query(() => Tour, { name: 'tour' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tourService.findOne(id)
  }

  @Mutation(() => Tour)
  @UseGuards(CheckGuideAuthGuard)
  async updateTour(
    @Args('updateTourInput') updateTourInput: UpdateTourInput,
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() currentUser: User
  ) {
    const tour = await this.tourService.findOne(id)
    if (!tour || currentUser.id !== tour.guideId) {
      throw new UnauthorizedException()
    }

    const updateData = {
      ...updateTourInput,
      tourCity: { createMany: { data: updateTourInput.tourCity } },
      tourTourCategory: { createMany: { data: updateTourInput.tourTourCategory } },
      tourLanguage: { createMany: { data: updateTourInput.tourLanguage } }
    }

    return this.tourService.update(id, updateData)
  }

  @Mutation(() => Tour)
  @UseGuards(CheckGuideAuthGuard)
  removeTour(@Args('id', { type: () => Int }) id: number) {
    return this.tourService.remove(id)
  }
}

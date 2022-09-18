import { FavoriteTour } from '@gwide/api/generated/db-types'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '@prisma/client'
import { CurrentUser } from '../../decorators/current-user.decorator'
import { CheckUserAuthGuard } from '../../guards/auth-guards/check-user-auth.guard'
import { FavoriteTourService } from './favorite-tour.service'

@Resolver()
export class FavoriteTourResolver {
  constructor(private readonly favoriteTourService: FavoriteTourService) {}

  @Mutation(() => FavoriteTour)
  @UseGuards(CheckUserAuthGuard)
  async addFavoriteTour(@Args('tourId') tourId: number, @CurrentUser() currentUser: User) {
    const favoriteCheck = await this.favoriteTourService.checkFavoriteTour(tourId, currentUser.id)

    if (favoriteCheck) {
      return favoriteCheck
    }

    return this.favoriteTourService.addFavoriteTour(tourId, currentUser.id)
  }

  @Mutation(() => FavoriteTour)
  @UseGuards(CheckUserAuthGuard)
  async removeFavoriteTour(@Args('tourId') tourId: number, @CurrentUser() currentUser: User) {
    const favoriteCheck = await this.favoriteTourService.checkFavoriteTour(tourId, currentUser.id)
    if (!favoriteCheck) {
      throw new Error('Invalid Tour Id')
    }
    await this.favoriteTourService.removeFavoriteTour(tourId, currentUser.id)
    return favoriteCheck
  }

  @Query(() => [FavoriteTour])
  @UseGuards(CheckUserAuthGuard)
  getFavoriteTours(@CurrentUser() currentUser: User) {
    return this.favoriteTourService.getFavoriteTours(currentUser.id)
  }
}

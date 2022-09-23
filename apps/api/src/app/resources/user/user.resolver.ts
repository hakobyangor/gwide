import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import {
  CreateOneUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User
} from '@gwide/api/generated/db-types'
import { UseGuards } from '@nestjs/common'
import { CheckAuthGuard } from '../../guards/auth-guards/check-auth.guard'
import { UpdateUserInput } from './dto/update-user.input'
import * as bcrypt from 'bcrypt'
import { CheckAdminAuthGuard } from '../../guards/auth-guards/check-admin-auth.guard'
import { CurrentUser } from '../../decorators/current-user.decorator'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(CheckAuthGuard)
  @Query(() => User)
  user(@Args() findUserArguments: FindUniqueUserArgs) {
    return this.userService.findOne(findUserArguments)
  }

  @UseGuards(CheckAuthGuard)
  @Query(() => User)
  currentUser(@CurrentUser() currentUser: User) {
    return this.userService.findOne({ where: { id: currentUser.id } })
  }

  @UseGuards(CheckAdminAuthGuard)
  @Query(() => [User])
  users() {
    return this.userService.findAll()
  }

  @UseGuards(CheckAdminAuthGuard)
  @Mutation(() => User)
  createUser(@Args() userCreateArguments: CreateOneUserArgs) {
    return this.userService.create(userCreateArguments)
  }

  @UseGuards(CheckAuthGuard)
  @Mutation(() => User)
  async updateUser(@Args('data') data: UpdateUserInput, @CurrentUser() currentUser: User) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10)
    }

    return this.userService.update({ data, where: { id: currentUser.id } })
  }

  @UseGuards(CheckAdminAuthGuard)
  @Mutation(() => User)
  removeUser(@Args() removeUserArguments: FindUniqueUserArgs) {
    return this.userService.remove(removeUserArguments)
  }

  @UseGuards(CheckAdminAuthGuard)
  @Query(() => [User])
  getGuides(@Args() findUserArguments: FindManyUserArgs) {
    return this.userService.findGuides(findUserArguments.where)
  }
}

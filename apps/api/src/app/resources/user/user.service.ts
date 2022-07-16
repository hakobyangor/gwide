import { Injectable } from '@nestjs/common'
import { DbService } from '@gwide/api/data-access-db'
import {
  CreateOneUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  UserWhereInput
} from '@gwide/api/generated/db-types'
import { UserRole } from '@prisma/client'

@Injectable()
export class UserService {
  constructor(private database: DbService) {}

  findOne(findUserArguments: FindUniqueUserArgs) {
    return this.database.user.findUnique(findUserArguments)
  }

  findAll() {
    return this.database.user.findMany({
      include: {
        country: true,
        _count: {
          select: {
            GuideGuideCategory: true
          }
        }
      }
    })
  }

  findGuides(findUserArguments: UserWhereInput) {
    return this.database.user.findMany({
      include: {
        country: {},
        GuideLanguages: {
          include: {
            language: {}
          }
        },
        GuideGuideCategory: {
          include: {
            guideCategory: true
          }
        },
        GuideCity: {
          include: {
            city: true
          }
        },
        _count: {
          select: {
            GuideGuideCategory: true
          }
        }
      },
      where: {
        ...findUserArguments
        // role: UserRole.GUIDE
      }
    })
  }

  create(userCreateArguments: CreateOneUserArgs) {
    return this.database.user.create(userCreateArguments)
  }

  update(userUpdateInput: UpdateOneUserArgs) {
    return this.database.user.update(userUpdateInput)
  }

  remove(removeUserArguments: FindUniqueUserArgs) {
    return this.database.user.delete(removeUserArguments)
  }
}

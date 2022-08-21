import { Injectable } from '@nestjs/common'
import { DbService } from '@gwide/api/data-access-db'
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  UserWhereInput
} from '@gwide/api/generated/db-types'
import { UserRole } from '@prisma/client'
import moment = require('moment')

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
        Tour: {
          include: {
            tourCity: {
              include: { city: {} }
            },
            tourTourCategory: {
              include: { tourCategory: {} }
            },
            tourLanguage: {
              include: { language: {} }
            }
          }
        }
      }
    })
  }

  findGuides(findUserArguments: UserWhereInput) {
    return this.database.user.findMany({
      include: {
        country: true,
        Tour: {
          include: {
            tourCity: {
              include: { city: {} }
            },
            tourTourCategory: {
              include: { tourCategory: {} }
            },
            tourLanguage: {
              include: { language: {} }
            }
          }
        }
      },
      where: {
        ...findUserArguments,
        role: UserRole.GUIDE
      }
    })
  }

  create(userCreateArguments: CreateOneUserArgs) {
    return this.database.user.create(userCreateArguments)
  }

  async update(userUpdateInput: UpdateOneUserArgs) {
    return this.database.user.update(userUpdateInput)
  }

  remove(removeUserArguments: FindUniqueUserArgs) {
    return this.database.user.delete(removeUserArguments)
  }

  findByHash(hash: string) {
    return this.database.user.findFirst({
      where: { hash, hashExpiredAt: { gte: moment().toDate() } }
    })
  }
}

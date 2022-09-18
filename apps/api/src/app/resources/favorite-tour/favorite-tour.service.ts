import { DbService } from '@gwide/api/data-access-db'
import { Injectable } from '@nestjs/common'

@Injectable()
export class FavoriteTourService {
  constructor(private database: DbService) {}

  addFavoriteTour(tourId: number, userId: number) {
    return this.database.favoriteTour.create({
      data: { tourId, userId },
      include: {
        tour: {
          include: {
            currency: true,
            tourCity: {
              include: {
                city: {
                  include: {
                    country: true
                  }
                }
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
            },
            tourImage: {},
            guide: {
              include: {
                country: {},
                tour: {
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
        }
      }
    })
  }

  removeFavoriteTour(tourId: number, userId: number) {
    return this.database.favoriteTour.deleteMany({ where: { tourId, userId } })
  }

  getFavoriteTours(userId: number) {
    return this.database.favoriteTour.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        tour: {
          include: {
            currency: true,
            tourCity: {
              include: {
                city: {
                  include: {
                    country: true
                  }
                }
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
            },
            tourImage: {},
            guide: {
              include: {
                country: {},
                tour: {
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
        }
      }
    })
  }

  checkFavoriteTour(tourId: number, userId: number) {
    return this.database.favoriteTour.findFirst({
      where: { userId, tourId },
      include: {
        tour: {
          include: {
            currency: true,
            tourCity: {
              include: {
                city: {
                  include: {
                    country: true
                  }
                }
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
            },
            tourImage: {},
            guide: {
              include: {
                country: {},
                tour: {
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
        }
      }
    })
  }
}

import { DbService } from '@gwide/api/data-access-db'
import { Injectable } from '@nestjs/common'
import { CreateBookingReviewInput } from '../booking/dto/create-booking-review.input'

@Injectable()
export class BookingReviewService {
  constructor(private database: DbService) {}

  createReview(createBookingReviewInput: CreateBookingReviewInput) {
    return this.database.bookingReview.create({
      data: createBookingReviewInput,
      include: {
        booking: {
          include: {
            tour: {
              include: { guide: true }
            }
          }
        }
      }
    })
  }

  async calculateAvgRate(tourId: number) {
    const avg = await this.database.bookingReview.aggregate({
      _avg: { rate: true },
      where: { booking: { tourId } }
    })

    return Number(avg._avg.rate.toFixed(2))
  }
}

import { DbService } from '@gwide/api/data-access-db'
import { BookingStatus } from '@gwide/api/generated/db-types'
import { Injectable } from '@nestjs/common'
import { UpdateBookingInput } from './dto/update-booking.input'

@Injectable()
export class BookingService {
  constructor(private database: DbService) {}

  create(createBookingInput, currentUserId: number) {
    return this.database.booking.create({
      data: { ...createBookingInput, userId: currentUserId },
      include: {
        user: true,
        tour: {
          include: { guide: {} }
        },
        language: true
      }
    })
  }

  getGuideBookings(guideId) {
    return this.database.booking.findMany({
      include: {
        user: true,
        tour: {
          include: { guide: {} }
        },
        language: true
      },
      where: {
        tour: { guideId }
      }
    })
  }

  getUserBookings(userId) {
    return this.database.booking.findMany({
      include: {
        user: true,
        tour: {
          include: { guide: {} }
        },
        language: true
      },
      where: {
        userId
      }
    })
  }

  approveBooking(id: number) {
    return this.database.booking.update({
      data: { status: BookingStatus.APPROVED },
      where: { id },
      include: {
        user: true,
        tour: {
          include: { guide: {} }
        },
        language: true
      }
    })
  }

  rejectBooking(id: number) {
    return this.database.booking.update({
      data: { status: BookingStatus.REJECTED },
      where: { id },
      include: {
        user: true,
        tour: {
          include: { guide: {} }
        },
        language: true
      }
    })
  }

  updatePendingBooking(id: number, updateBookingInput: UpdateBookingInput) {
    return this.database.booking.update({
      data: updateBookingInput,
      where: { id },
      include: {
        user: true,
        tour: {
          include: { guide: {} }
        },
        language: true
      }
    })
  }
}

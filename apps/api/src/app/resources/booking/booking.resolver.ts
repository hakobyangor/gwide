import { Booking } from '@gwide/api/generated/db-types'
import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BookingStatus, User } from '@prisma/client'
import { CurrentUser } from '../../decorators/current-user.decorator'
import { CheckGuideAuthGuard } from '../../guards/auth-guards/check-guide-auth.guard'
import { CheckUserAuthGuard } from '../../guards/auth-guards/check-user-auth.guard'
import { SendgridService } from '../sendgrid/sendgrid.service'
import { TourService } from '../tour/tour.service'
import { BookingService } from './booking.service'
import { CreateDraftBookingInput } from './dto/create-draft-booking.input'
import { CreatePendingBookingInput } from './dto/create-pending-booking.input'
import { UpdateBookingInput } from './dto/update-booking.input'

@Resolver(() => Booking)
export class BookingResolver {
  constructor(
    private readonly bookingService: BookingService,
    private sendgridService: SendgridService,
    private tourService: TourService
  ) {}

  @Mutation(() => Booking)
  @UseGuards(CheckUserAuthGuard)
  async createPendingBooking(
    @Args('createBookingInput') createBookingInput: CreatePendingBookingInput,
    @CurrentUser() currentUser: User
  ) {
    const tour = await this.tourService.getById(createBookingInput.tourId)

    if (!tour) {
      throw new Error('Invalid tour provided')
    }

    const mail = {
      to: tour.guide.email,
      subject: 'Pending booking',
      from: process.env.SEND_GRID_MAIL_FROM_NO_REPLY,
      text: 'Pending booking',
      html: `<h1>Pending booking</h1> Tou have a pending booking for tour ${tour.name} at ${createBookingInput.date} </a>`
    }

    await this.sendgridService.send(mail)
    return this.bookingService.create(createBookingInput, currentUser.id)
  }

  @Mutation(() => Booking)
  @UseGuards(CheckUserAuthGuard)
  async createDraftBooking(
    @Args('createBookingInput') createBookingInput: CreateDraftBookingInput,
    @CurrentUser() currentUser: User
  ) {
    const tour = await this.tourService.getById(createBookingInput.tourId)

    if (!tour) {
      throw new Error('Invalid tour provided')
    }

    //todo send message to guide
    const mail = {
      to: tour.guide.email,
      subject: 'request booking availability',
      from: process.env.SEND_GRID_MAIL_FROM_NO_REPLY,
      text: 'request booking availability',
      html: `<h1>request booking availability</h1> Tou have availability request for tour ${tour.name} at ${createBookingInput.date} </a>`
    }

    await this.sendgridService.send(mail)
    return this.bookingService.create(
      { ...createBookingInput, status: BookingStatus.DRAFT },
      currentUser.id
    )

    return tour
  }

  @Mutation(() => Booking)
  @UseGuards(CheckUserAuthGuard)
  updatePendingBooking(@Args('updateBookingInput') updateBookingInput: UpdateBookingInput) {
    return this.bookingService.updatePendingBooking(updateBookingInput.id, updateBookingInput)
  }

  @Mutation(() => Booking)
  @UseGuards(CheckGuideAuthGuard)
  approveBooking(@Args('bookingId') bookingId: number) {
    return this.bookingService.approveBooking(bookingId)
  }

  @Mutation(() => Booking)
  @UseGuards(CheckGuideAuthGuard)
  rejectBooking(@Args('bookingId') bookingId: number) {
    return this.bookingService.rejectBooking(bookingId)
  }

  @Query(() => [Booking])
  @UseGuards(CheckGuideAuthGuard)
  getGuideBookings(@CurrentUser() currentUser: User) {
    return this.bookingService.getGuideBookings(currentUser.id)
  }

  @Query(() => [Booking])
  @UseGuards(CheckUserAuthGuard)
  getUserBookings(@CurrentUser() currentUser: User) {
    return this.bookingService.getUserBookings(currentUser.id)
  }
}

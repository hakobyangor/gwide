import { Booking, BookingReview } from '@gwide/api/generated/db-types'
import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BookingStatus, User } from '@prisma/client'
import moment = require('moment')
import { CurrentUser } from '../../decorators/current-user.decorator'
import { CheckGuideAuthGuard } from '../../guards/auth-guards/check-guide-auth.guard'
import { CheckUserAuthGuard } from '../../guards/auth-guards/check-user-auth.guard'
import { BookingReviewService } from '../booking-review/booking-review.service'
import { SendgridService } from '../sendgrid/sendgrid.service'
import { TourService } from '../tour/tour.service'
import { BookingService } from './booking.service'
import { CreateBookingReviewInput } from './dto/create-booking-review.input'
import { CreateDraftBookingInput } from './dto/create-draft-booking.input'
import { CreatePendingBookingInput } from './dto/create-pending-booking.input'
import { UpdateBookingInput } from './dto/update-booking.input'

@Resolver(() => Booking)
export class BookingResolver {
  constructor(
    private readonly bookingService: BookingService,
    private sendgridService: SendgridService,
    private tourService: TourService,
    private bookingReview: BookingReviewService
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

  @Mutation(() => BookingReview)
  @UseGuards(CheckUserAuthGuard)
  async createBookingReview(
    @Args('createBookingReviewInput') createBookingReviewInput: CreateBookingReviewInput,
    @CurrentUser() currentUser: User
  ) {
    const booking = await this.bookingService.getById(createBookingReviewInput.bookingId)

    if (
      !booking ||
      booking?.status != BookingStatus.APPROVED ||
      moment(booking.date) > moment() ||
      booking.user.id != currentUser.id
    ) {
      throw new Error('Invalid booking id')
    }

    if (booking.bookingReview.length > 0) {
      throw new Error('Already Rated')
    }

    const review = await this.bookingReview.createReview(createBookingReviewInput)

    const avgRate = await this.bookingReview.calculateAvgRate(booking.tour.id)

    await this.tourService.updateRate(booking.tour.id, avgRate)
    review.booking.tour.rating = avgRate
    return review
  }
}

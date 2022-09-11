import { Module } from '@nestjs/common'
import { BookingService } from './booking.service'
import { BookingResolver } from './booking.resolver'
import { DbService } from '@gwide/api/data-access-db'
import { SendgridService } from '../sendgrid/sendgrid.service'
import { ConfigService } from '@nestjs/config'
import { TourService } from '../tour/tour.service'

@Module({
  providers: [
    BookingResolver,
    BookingService,
    DbService,
    SendgridService,
    ConfigService,
    TourService
  ]
})
export class BookingModule {}

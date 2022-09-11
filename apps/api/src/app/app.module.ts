import { Module } from '@nestjs/common'
import * as path from 'node:path'
import { GraphQLModule } from '@nestjs/graphql'
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius'
import { UserModule } from './resources/user/user.module'
import { AuthenticationModule } from './resources/authentication/authentication.module'
import { TourModule } from './resources/tour/tour.module'
import { BookingModule } from './resources/booking/booking.module'

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: path.join(__dirname, './autogenerated-schema.gql'),
      graphiql: true
    }),
    UserModule,
    TourModule,
    BookingModule,
    AuthenticationModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}

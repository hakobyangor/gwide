import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as SendGrid from '@sendgrid/mail'

@Injectable()
export class SendgridService {
  constructor(private readonly configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get<string>('SEND_GRID_API_KEY'))
  }

  // test as
  async send(mail: SendGrid.MailDataRequired) {
    console.log(`sending email to ${mail.to}`)
    const transport = await SendGrid.send(mail)

    return transport
  }
}

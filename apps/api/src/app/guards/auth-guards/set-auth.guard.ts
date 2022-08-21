import { CookieSerializeOptions } from '@fastify/cookie'
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { JwtService } from '@nestjs/jwt'
import { GqlExecutionContext } from '@nestjs/graphql'
import { isEmail, isEmpty } from 'class-validator'

const domain = process.env.WEB_APP_HOST
const jwtExpiresSecond = process.env.JWT_EXPIRES_SECONDS

const HTTP_ONLY_COOKIE: CookieSerializeOptions = {
  maxAge: Number(jwtExpiresSecond), // cookie lives same amount of time as jwt
  httpOnly: true,
  signed: true,
  domain
}

const USERS_COOKIE: CookieSerializeOptions = {
  maxAge: Number(jwtExpiresSecond), // cookie lives same amount of time as jwt
  domain
}

@Injectable()
export class SetAuthGuard extends AuthGuard('local') {
  constructor(private jwtService: JwtService) {
    super()
  }

  getRequest(context: ExecutionContext) {
    const context_ = GqlExecutionContext.create(context)
    const request = context_.getContext()
    // should be the same name as args
    request.body = context_.getArgs().loginInput

    if (isEmpty(request.body.email)) {
      throw new Error('E-mail is empty')
    }

    if (isEmpty(request.body.password)) {
      throw new Error('Password is empty')
    }

    if (!isEmail(request.body.email)) {
      throw new Error('E-mail format is incorrect')
    }

    return request
  }

  handleRequest(error, user, info, context) {
    if (error || !user || info)
      throw (
        error ||
        new UnauthorizedException('The entered e-mail or password are incorrect, please try again')
      )

    const authContext = GqlExecutionContext.create(context)
    const { reply } = authContext.getContext()

    const jwtExpiresMs = Number(jwtExpiresSecond) * 1000
    const tokenExpires = Date.now() + jwtExpiresMs
    const accessToken = this.jwtService.sign({ sub: { id: user.id, role: user.role } })

    reply.setCookie('token', accessToken, HTTP_ONLY_COOKIE)
    reply.setCookie('token-expires', tokenExpires.toString(), USERS_COOKIE)

    return user
  }
}

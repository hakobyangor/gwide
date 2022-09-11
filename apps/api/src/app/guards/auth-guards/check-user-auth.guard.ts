import { AuthGuard } from '@nestjs/passport'
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { UserRole } from '@prisma/client'

@Injectable()
export class CheckUserAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const context_ = GqlExecutionContext.create(context)
    return context_.getContext().req
  }

  handleRequest(error, user, info, context) {
    if (!user || info || error || (user.role !== UserRole.USER && user.role !== UserRole.ADMIN)) {
      const context_ = GqlExecutionContext.create(context)
      console.log('🚀 ~ handleRequest ~ context', user)
      const reply = context_.getContext().reply

      reply.setCookie('token', '')
      reply.setCookie('token-expires', '')

      throw error || new UnauthorizedException()
    }

    return user
  }
}

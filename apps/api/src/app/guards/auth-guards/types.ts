import { FastifyRequest, FastifyReply } from 'fastify'
import { User } from '@gwide/api/generated/db-types'
import { UserRole } from '@prisma/client'

export interface IUserContext {
  reply: FastifyReply
  request: FastifyRequest
  user: User
}

export type UserJwtPayload = false | { id: string; role: UserRole }

import { z } from 'zod'
import { idSchema, emailSchema } from './common.schema'

export const userSchema = z.object({
  id: idSchema,
  name: z.string().min(1),
  email: emailSchema,
  createdAt: z.date().optional(),
})

export const createUserSchema = z.object({
  name: z.string().min(1),
  email: emailSchema,
  password: z.string().min(8),
})
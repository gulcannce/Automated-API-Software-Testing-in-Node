import { z } from 'zod'

export const idSchema = z.number().int().positive()

export const emailSchema = z.string().email()

export const passwordSchema = z.string().min(8)
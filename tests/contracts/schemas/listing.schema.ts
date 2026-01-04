import { z } from 'zod'
import { idSchema } from './common.schema'

export const listingSchema = z.object({
  id: idSchema,
  title: z.string(),
  description: z.string(),
  price: z.number(),
  location: z.string(),
  hostId: idSchema,
})

export const searchListingSchema = z.object({
  location: z.string().optional(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.number().optional(),
})
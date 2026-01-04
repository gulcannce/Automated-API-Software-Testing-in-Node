import { z } from 'zod'

export const validate = <T>(schema: z.ZodSchema<T>, data: unknown): T => {
  return schema.parse(data)
}

export const validateAsync = <T>(schema: z.ZodSchema<T>, data: unknown): Promise<T> => {
  return schema.parseAsync(data)
}
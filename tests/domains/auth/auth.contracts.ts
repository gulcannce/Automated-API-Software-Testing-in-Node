import { userSchema, createUserSchema } from '../../contracts/schemas/user.schema'

export const authContracts = {
  loginRequest: createUserSchema.omit({ name: true }),
  loginResponse: userSchema.pick({ id: true, email: true }),
  registerRequest: createUserSchema,
  registerResponse: userSchema,
}
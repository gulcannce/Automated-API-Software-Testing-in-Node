import { ApiClient } from './api-client'

export const setAuthToken = (client: ApiClient, token: string) => {
  // Note: ApiClient needs a method to set auth header
  // For now, assume it's handled elsewhere
}

export const loginAndGetToken = async (client: ApiClient, credentials: { email: string; password: string }) => {
  const response = await client.post('/auth/login', credentials)
  return response.json?.token
}
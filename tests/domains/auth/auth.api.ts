import { ApiClient } from '../utils/http/api-client'

export const login = async (client: ApiClient, credentials: { email: string; password: string }) => {
  return client.post('/auth/login', credentials)
}

export const register = async (client: ApiClient, userData: { name: string; email: string; password: string }) => {
  return client.post('/auth/register', userData)
}

export const logout = async (client: ApiClient) => {
  return client.post('/auth/logout')
}
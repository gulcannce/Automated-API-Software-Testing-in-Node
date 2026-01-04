import { describe, it, expect } from 'vitest'
import nock from 'nock'
import { ApiClient } from '../../utils/http/api-client'
import { login } from './auth.api'

describe('Auth Domain', () => {
  it('should login user', async () => {
    const client = new ApiClient({ baseUrl: 'http://localhost:3000' })

    // Mock the login response
    nock('http://localhost:3000')
      .post('/auth/login', { email: 'test@example.com', password: 'password' })
      .reply(200, { token: 'mock-token', user: { id: 1, email: 'test@example.com' } })

    const response = await login(client, { email: 'test@example.com', password: 'password' })
    expect(response.res.status).toBe(200)
    expect(response.json.token).toBe('mock-token')
  })
})
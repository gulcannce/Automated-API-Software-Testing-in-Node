import { describe, it, expect } from 'vitest'
import nock from 'nock'
import { ApiClient } from '../../utils/http/api-client'
import { loginAndGetToken } from '../../utils/http/auth'

describe('Auth Integration', () => {
  it('should login successfully', async () => {
    const client = new ApiClient({ baseUrl: 'http://localhost:3000' })

    // Mock the login response
    nock('http://localhost:3000')
      .post('/auth/login', { email: 'test@example.com', password: 'password' })
      .reply(200, { token: 'mock-token' })

    const token = await loginAndGetToken(client, { email: 'test@example.com', password: 'password' })
    expect(token).toBe('mock-token')
  })
})
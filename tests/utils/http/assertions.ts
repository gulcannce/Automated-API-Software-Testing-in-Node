import { expect } from 'vitest'
import { AxiosResponse } from 'axios'

export const assertStatus = (response: AxiosResponse, expectedStatus: number) => {
  expect(response.status).toBe(expectedStatus)
}

export const assertSuccess = (response: AxiosResponse) => {
  expect(response.status).toBeGreaterThanOrEqual(200)
  expect(response.status).toBeLessThan(300)
}

export const assertError = (response: AxiosResponse, expectedStatus: number) => {
  expect(response.status).toBe(expectedStatus)
}

export const assertJsonResponse = (response: AxiosResponse) => {
  expect(response.headers['content-type']).toContain('application/json')
}
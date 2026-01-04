export const createUser = (overrides = {}) => ({
  name: 'Test User',
  email: 'test@example.com',
  password: 'password123',
  ...overrides,
})

export const createSchool = (overrides = {}) => ({
  name: 'Test School',
  address: '123 Test St',
  ...overrides,
})
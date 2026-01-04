export const mockHttpClient = {
  get: (url: string) => Promise.resolve({ data: {}, status: 200 }),
  post: (url: string, data: any) => Promise.resolve({ data: { id: 1, ...data }, status: 201 }),
  put: (url: string, data: any) => Promise.resolve({ data, status: 200 }),
  delete: (url: string) => Promise.resolve({ status: 204 }),
}
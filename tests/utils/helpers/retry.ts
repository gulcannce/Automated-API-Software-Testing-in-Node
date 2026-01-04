export const retry = async <T>(
  fn: () => Promise<T>,
  times: number,
  delay: number = 1000
): Promise<T> => {
  for (let i = 0; i < times; i++) {
    try {
      return await fn()
    } catch (error) {
      if (i === times - 1) throw error
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
  throw new Error('Retry failed')
}
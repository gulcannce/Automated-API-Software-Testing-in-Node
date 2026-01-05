// import { Pool } from 'pg' // Commented out since pg is not installed

export class DbClient {
  // private pool: Pool

  constructor(connectionString: string) {
    // this.pool = new Pool({
    //   connectionString,
    // })
  }

  async query(text: string, params?: any[]) {
    // return this.pool.query(text, params)
    throw new Error('Database not configured - using HTTP mocking instead')
  }

  async close() {
    // await this.pool.end()
  }
}

export const createDbClient = (connectionString: string) => new DbClient(connectionString)
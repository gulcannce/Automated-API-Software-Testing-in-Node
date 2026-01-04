import { Pool } from 'pg'

export class DbClient {
  private pool: Pool

  constructor(connectionString: string) {
    this.pool = new Pool({
      connectionString,
    })
  }

  async query(text: string, params?: any[]) {
    return this.pool.query(text, params)
  }

  async close() {
    await this.pool.end()
  }
}

export const createDbClient = (connectionString: string) => new DbClient(connectionString)
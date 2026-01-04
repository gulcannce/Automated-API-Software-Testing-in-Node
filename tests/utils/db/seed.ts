import { DbClient } from './db-client'

export const seedDatabase = async (db: DbClient) => {
  await db.query('INSERT INTO users (name, email) VALUES ($1, $2)', ['Test User', 'test@example.com'])
  // Add more seed data
}
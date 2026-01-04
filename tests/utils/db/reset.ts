import { DbClient } from './db-client'

export const resetDatabase = async (db: DbClient) => {
  // Drop and recreate tables
  await db.query('DROP TABLE IF EXISTS users CASCADE')
  await db.query('CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))')
  // Add more reset logic
}
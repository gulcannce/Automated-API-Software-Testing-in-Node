// import { resetDatabase } from "../utils/db/reset";
// import { seedDatabase } from "../utils/db/seed";

export default async function globalSetup() {
  // Database setup is not needed for HTTP API testing with mocking
  // Uncomment and configure if you need database integration testing

  // 1) DB reset (truncate/clean schema)
  // await resetDatabase(dbClient);

  // 2) Minimal seed (ör. roller, default admin, lookup tabloları)
  // await seedDatabase(dbClient);
}
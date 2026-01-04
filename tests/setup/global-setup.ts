import { resetDb } from "../utils/db/reset";
import { seedBase } from "../utils/db/seed";

export default async function globalSetup() {
  // 1) DB reset (truncate/clean schema)
  await resetDb();

  // 2) Minimal seed (ör. roller, default admin, lookup tabloları)
  await seedBase();
}
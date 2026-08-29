import path from "node:path";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/shared/db/schema.ts",
  out: "./src/shared/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_PATH ?? path.join(process.cwd(), ".data", "db.sqlite"),
  },
} satisfies Config;

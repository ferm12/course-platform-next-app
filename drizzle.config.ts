import { env } from "@/data/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/drizzle/schema.ts",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    password: env.SERVER_ENV.DB_PASSWORD,
    user: env.SERVER_ENV.DB_USER,
    database: env.SERVER_ENV.DB_NAME,
    host: env.SERVER_ENV.DB_HOST,
    ssl: true,
  },
});
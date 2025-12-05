import { defineConfig }  from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/drizzle/schema.ts",
  strict: true,
  verbose: true,
  dbCredentials: {
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    ssl: true,
  },
});
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// ✅ Load .env file
config();

// ✅ Debug print to confirm .env loaded
console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  throw new Error(
    "❌ DATABASE_URL not found. Make sure .env file exists and is correctly loaded."
  );
}

export default defineConfig({
  schema: "./db/schema.ts", // Make sure this path is correct
  out: "./drizzle", // Optional output path
  dialect: "postgresql", // ✅ This is required
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});

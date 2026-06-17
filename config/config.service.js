import dotenv from "dotenv";
import { resolve } from "node:path";

const NODE_ENV = process.env.NODE_ENV;
const IS_VERCEL = !!process.env.VERCEL;

// On Vercel, environment variables are injected directly — no file needed.
// Locally, load from config/.env.development or config/.env.production
if (!IS_VERCEL) {
  const envPaths = {
    development: ".env.development",
    production: ".env.production",
  };
  const envFile = envPaths[NODE_ENV] || ".env.development";
  dotenv.config({ path: resolve(`config/${envFile}`) });
}

export const PORT = +(process.env.PORT || 4000);
export const SALT_ROUNDS = +(process.env.SALT_ROUNDS || 12);
export const DB_URI = process.env.DB_URI;
export const ACCESS_SECRET_KEY = process.env.ACCESS_SECRET_KEY;
export const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;
export const PREFIX = process.env.PREFIX || "bearer";
export const EMAIL = process.env.EMAIL;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const REDIS_URL = process.env.REDIS_URL;
export const AI_ENGINE_URL = process.env.AI_ENGINE_URL;
export const GROQ_API_KEY = process.env.GROQ_API_KEY;



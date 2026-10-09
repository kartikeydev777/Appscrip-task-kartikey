import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";
import { z } from "zod";

const currentDir = dirname(fileURLToPath(import.meta.url));

config({
  path: resolve(currentDir, "../../.env")
});

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.coerce.number().int().positive().default(4000),
  DATABASE_URL: z.string().url(),
  FRONTEND_URL: z.string().url().default("http://localhost:3000")
});

export const env = envSchema.parse(process.env);

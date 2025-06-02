import {
  drizzle,
  type PostgresJsDatabase,
} from "drizzle-orm/postgres-js/driver";
import postgres from "postgres";
import "dotenv/config";
import { dbConfig } from "../config/config";

const connectionString = dbConfig.databaseUrl;
console.log(connectionString);

if (!connectionString) throw new Error("DATABASE_URI not set");

const pool = postgres(connectionString, { max: 1 });
export const db: PostgresJsDatabase = drizzle(pool);

// drizzle.config.js
/** @type {import('drizzle-kit').Config} */
module.exports = {
  out: "./src/db/migrations",
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  driver: "pglite",
  dbCredentials: {
    url: process.env.DATABASE_URI,
  },
  extensionsFilters: ["postgis"],
  schemaFilter: "public",
  tablesFilter: "*",
  introspect: {
    casing: "camel",
  },
  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "./src/db/schema.ts",
  },
  entities: {
    roles: {
      provider: "",
      exclude: [],
      include: [],
    },
  },
  breakpoints: true,
  strict: true,
  verbose: true,
};

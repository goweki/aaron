import "dotenv/config";
import { execFile } from "child_process";
import { promisify } from "util";
import path from "path";

const execFileAsync = promisify(execFile);

async function restoreDatabase(dumpFilePath: string) {
  const dbUrl = process.env.NEON_DATABASE_URL; // Or process.env.DATABASE_URL

  if (!dbUrl) {
    throw new Error("❌ Connection string environment variable is missing.");
  }

  const databaseUrl = new URL(dbUrl);
  databaseUrl.searchParams.set("sslmode", "verify-full");
  databaseUrl.searchParams.set("sslrootcert", "system");

  const absoluteDumpPath = path.resolve(dumpFilePath);

  console.log("📥 Restoring database dump...");
  console.log(`📁 Target File: ${absoluteDumpPath}`);

  try {
    await execFileAsync("psql", [
      databaseUrl.toString(),
      "-f",
      absoluteDumpPath,
    ]);

    console.log("\n✅ Database restored successfully to Neon!");
  } catch (error) {
    console.error("\n❌ Error restoring database:");
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    throw error;
  }
}

// Pass path to the backup file
restoreDatabase("./dumps/backup-2026-08-21T01-16-00-000Z.sql").catch(() =>
  process.exit(1),
);

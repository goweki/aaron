import "dotenv/config";
import { execFile } from "child_process";
import { promisify } from "util";
import path from "path";
import fs from "fs";

const execFileAsync = promisify(execFile);

function getLatestDumpFile(dumpsDir: string): string {
  if (!fs.existsSync(dumpsDir)) {
    throw new Error(`❌ Dumps directory does not exist: ${dumpsDir}`);
  }

  const files = fs
    .readdirSync(dumpsDir)
    .filter((file) => file.endsWith(".sql"))
    .map((file) => ({
      name: file,
      path: path.join(dumpsDir, file),
      mtime: fs.statSync(path.join(dumpsDir, file)).mtimeMs,
    }))
    .sort((a, b) => b.mtime - a.mtime);

  if (files.length === 0) {
    throw new Error(`❌ No .sql dump files found in: ${dumpsDir}`);
  }

  return files[0].path;
}

async function restoreDatabase() {
  const dbUrl = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("❌ Connection string environment variable is missing.");
  }

  const databaseUrl = new URL(dbUrl);
  databaseUrl.searchParams.set("sslmode", "verify-full");
  databaseUrl.searchParams.set("sslrootcert", "system");

  // Allow passing a specific file via CLI arg, e.g. `npm run db:restore ./dumps/my-dump.sql`
  // Otherwise, automatically grab the most recent file in `./dumps`
  const specifiedFile = process.argv[2];
  const dumpsDir = path.join(process.cwd(), "dumps");
  const targetDumpPath = specifiedFile
    ? path.resolve(specifiedFile)
    : getLatestDumpFile(dumpsDir);

  console.log("📥 Restoring database dump...");
  console.log(`📁 Source File: ${targetDumpPath}`);

  try {
    await execFileAsync("psql", [
      databaseUrl.toString(),
      "-v",
      "ON_ERROR_STOP=1", // Stop immediately if a SQL statement fails
      "-f",
      targetDumpPath,
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

restoreDatabase().catch(() => process.exit(1));

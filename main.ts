// Entry for "The Most Boring Object, Reviewed in One Line" (make.fun).
// Writes a single one-line review of a paperclip to /output/entry.txt.
//
// The line: a paperclip genuinely holds papers together for years, and it
// genuinely bends out of shape at the slightest force — the joke is the
// object's own behaviour, literal and idiomatic at once.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REVIEW =
  "The paperclip has held my life together since 2019 and still bends out of shape over nothing.";

function outputDir(): string {
  const fromEnv =
    process.env.MAKEFUN_OUTPUT_DIR ?? process.env.MAKEFUN_BOT_DIR;
  if (fromEnv) return resolve(fromEnv);
  const here = dirname(fileURLToPath(import.meta.url));
  return resolve(here, "output");
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "entry.txt"), REVIEW, "utf8");
}

main();

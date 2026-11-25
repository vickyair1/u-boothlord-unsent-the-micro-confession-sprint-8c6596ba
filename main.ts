// Unsent: The Micro-Confession Sprint — one two-part micro-confession.
// The program writes the confession to /output/entry.txt, exactly as typed.
import { mkdirSync, writeFileSync } from "node:fs";

const TO_LINE = "To: my ex's mother";
const UNSENT_LINE =
  "I still make your soup when I'm sick, and your son still thinks I learned it from a cookbook.";

function writeEntry(): string {
  const entry = `${TO_LINE}\n${UNSENT_LINE}`;
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
  return entry;
}

function main(): void {
  const entry = writeEntry();
  process.stdout.write(entry);
}

main();

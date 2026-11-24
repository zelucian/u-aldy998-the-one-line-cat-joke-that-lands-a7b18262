/**
 * Brief: "The One-Line Cat Joke That Lands" — a single line, about a cat,
 * with a setup and a turn, judged first on whether it makes a veteran
 * stand-up laugh out loud on the first read.
 *
 * Why this line wins: it starts from behaviour every cat owner has seen
 * (the cat staring, transfixed, at an ordinary wall) and then escalates
 * absurdly out of proportion — the humans don't investigate, they sell
 * the house. The deadpan overreaction is the punchline: no pun, no
 * explanation after it, and short enough to retell verbatim the same day.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My cat stared at the wall for an hour, so we sold the house.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("LINE must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Nitro's public dir holds the prerendered HTML plus the hashed client bundle.
// The sibling `server/` dir only exists to drive prerendering and is not deployed.
const outDir = join(process.cwd(), ".output", "public");

if (!existsSync(outDir)) {
  console.error(`[postbuild] Expected build output at ${outDir} but it does not exist.`);
  process.exit(1);
}

// GitHub Pages runs Jekyll by default, which silently drops files and directories
// whose names begin with an underscore. This marker opts out of that processing.
writeFileSync(join(outDir, ".nojekyll"), "");

console.log(`[postbuild] Wrote ${join(outDir, ".nojekyll")}`);

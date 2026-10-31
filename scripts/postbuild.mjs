import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

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

// sitemap.xml: one entry per prerendered page, so search engines find every
// product page. The origin comes from public/CNAME (the custom domain).
const domain = readFileSync(join(process.cwd(), "public", "CNAME"), "utf8").trim();
const pages = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === "index.html") {
      const rel = relative(outDir, dir).split(sep).join("/");
      pages.push(rel ? `/${rel}` : "/");
    }
  }
};
walk(outDir);
pages.sort();
const today = new Date().toISOString().slice(0, 10);
const urls = pages
  .map((p) => `  <url><loc>https://${domain}${p}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
writeFileSync(join(outDir, "sitemap.xml"), sitemap);
console.log(`[postbuild] Wrote sitemap.xml with ${pages.length} pages`);

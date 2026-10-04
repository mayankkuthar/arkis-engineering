import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages serves project sites from a subpath (/<repo>/), so every asset URL
// has to be prefixed. Set BASE_PATH in CI; it defaults to "/" for local dev.
const base = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  base,
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR
      // error wrapper). nitro/vite builds from this.
      server: { entry: "server" },
      prerender: {
        enabled: true,
        // Emit /about/index.html rather than /about.html so Pages' directory
        // resolution works without redirects.
        autoSubfolderIndex: true,
        // Follow every <Link> found in the HTML so dynamic routes such as
        // /products/$slug get prerendered too.
        crawlLinks: true,
        failOnError: true,
        // Links like /contact?interest=... resolve to the same page as /contact, so
        // prerendering them just writes duplicate HTML for every product and service.
        filter: ({ path }) => !path.includes("?"),
      },
    }),
    react(),
    // Pin the preset instead of letting Nitro infer one. Vercel exports VERCEL=1,
    // which makes Nitro switch to its Vercel Build Output API preset and write
    // .vercel/output/{static,functions} instead of .output/public. This site is
    // fully prerendered and uses no server functions, so it deploys as plain
    // static files to both GitHub Pages and Vercel from one identical artifact.
    nitro({ preset: "node-server" }),
  ],
  // Vite 8 resolves tsconfig `paths` natively, so no vite-tsconfig-paths plugin.
  resolve: {
    tsconfigPaths: true,
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
});

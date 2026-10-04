# AGENTS.md

## Project

Marketing site for ARKIS ENGINEERING — an engineering, fabrication and
manufacturing company in Ballabgarh, Faridabad, India.

## Stack

- TanStack Start (SSR + static prerender) on Vite
- React 19, TypeScript (strict), Tailwind CSS 4
- shadcn/ui components in `src/components/ui`
- Package manager: npm
- Hosting: GitHub Pages (`BASE_PATH` is set in CI to `/<repo>/`)

## Commands

```sh
npm run dev        # dev server
npm run build      # production build + static prerender into dist/client
npm run preview    # preview the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run format     # prettier
```

## Conventions

- File-based routing in `src/routes`. See `src/routes/README.md`.
- `@/*` maps to `src/*`.
- Content lives in `src/lib/site-data.ts`.
- The whole site is prerendered at build time. Do **not** introduce
  `createServerFn`, server loaders, or other runtime-server-only APIs — there is
  no server on GitHub Pages. Dynamic routes must be reachable by link crawling
  (or listed explicitly under `prerender.pages` in `vite.config.ts`).
- Absolute asset URLs must go through `import.meta.env.BASE_URL`.

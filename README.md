# ARKIS ENGINEERING

Marketing website for Arkis Engineering — an engineering, fabrication and
manufacturing company in Seekri Industrial Area, Ballabgarh, Faridabad, India.

The site is a statically prerendered [TanStack Start](https://tanstack.com/start)
app hosted on GitHub Pages. There is no server runtime: every route is rendered
to HTML at build time.

## Stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router)
- React 19, TypeScript (strict)
- Vite 8, Tailwind CSS 4
- [shadcn/ui](https://ui.shadcn.com) component primitives
- [Nitro](https://nitro.build) (build-time only)

## Getting started

Requires Node.js 22+ and npm.

```sh
git clone https://github.com/mayankkuthar/arkis-engineering.git
cd arkis-engineering
npm install
npm run dev
```

## Scripts

| Command             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Start the dev server                                      |
| `npm run build`     | Production build + static prerender into `.output/public` |
| `npm run preview`   | Serve the production build locally                        |
| `npm run lint`      | ESLint over the project                                   |
| `npm run typecheck` | `tsc --noEmit`                                            |
| `npm run format`    | Prettier write                                            |

## Deployment

Live at **<https://arkisengineering.com>**, served by GitHub Pages.

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `.output/public` (the prerendered HTML plus hashed client assets).

The site is served from the domain root, so the workflow builds with
`BASE_PATH=/`. The domain itself lives in `public/CNAME`, which Vite copies into
the published artifact — GitHub Pages needs that file to keep serving the custom
domain.

The workflow warns (but does not fail) when `public/CNAME` does not resolve to
GitHub Pages. To serve a `*.github.io` project page instead, set
`BASE_PATH=/<repo-name>/` in the workflow.

To reproduce the production output locally:

```sh
npm run build
npm run preview
```

### Adding routes

Routes are file-based — see `src/routes/README.md`. Two constraints come from
static hosting:

1. No `createServerFn` or server-only loaders. There is no server at runtime.
2. Dynamic routes (`/products/$slug`) are discovered by crawling links from
   prerendered pages. If you add a dynamic route that is not linked from any
   prerendered page, list it explicitly in `vite.config.ts` under
   `tanstackStart.prerender.pages`, or it will 404 in production.

## Content

Site copy, contact details, and product data live in `src/lib/site-data.ts`.
Images live in `src/assets`.

## License

Private repository. All rights reserved by Arkis Engineering.

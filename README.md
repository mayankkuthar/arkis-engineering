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

| Command             | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Start the dev server                                   |
| `npm run build`     | Production build + static prerender into `dist/client` |
| `npm run preview`   | Serve the production build locally                     |
| `npm run lint`      | ESLint over the project                                |
| `npm run typecheck` | `tsc --noEmit`                                         |
| `npm run format`    | Prettier write                                         |

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/client` to GitHub Pages.

The workflow sets `BASE_PATH` to `/<repo-name>/` so that asset URLs resolve from
the project's subpath. To preview the same output locally:

```sh
BASE_PATH=/arkis-engineering/ npm run build
npm run preview
```

To add a custom domain later, add a `public/CNAME` file and set `BASE_PATH=/` in
the workflow.

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

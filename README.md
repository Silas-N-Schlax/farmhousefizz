# 🍹 Farmhouse Fizz Soda Bar — Website

[Live site](https://farmhousefizz.com) · [About Farmhouse Fizz](./ABOUT_US.md)

This repository contains the source code for the official [Farmhouse Fizz Soda Bar](https://farmhousefizz.com) website — a marketing site for a mobile soda bar based in North Carolina. It gives customers an easy way to learn who we are, what we serve, and where to find us next.

Want the story behind the business rather than the code? See [ABOUT_US.md](./ABOUT_US.md).

---

## Tech Stack

- **[React 19](https://react.dev/)** with **[React Router](https://reactrouter.com/)** for client-side routing
- **[Vite](https://vite.dev/)** for dev server and bundling
- **[RoleModel Optics](https://www.npmjs.com/package/@rolemodel/optics)** design system for layout, spacing, and components
- **[react-helmet-async](https://www.npmjs.com/package/react-helmet-async)** for per-page SEO metadata
- **[vite-plugin-sitemap](https://www.npmjs.com/package/vite-plugin-sitemap)** for automatic sitemap/robots generation
- **[ESLint](https://eslint.org/)** for linting
- Deployed on **[Netlify](https://www.netlify.com/)**

## Getting Started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint      # run ESLint
```

## Project Structure

```
src/
  pages/        # route-level page components (home, menu, catering, FAQ, etc.)
  components/   # shared UI components (header, footer, cards, forms, etc.)
  data/         # static data, e.g. menu.json
  assets/       # images, SEO helpers, and other static assets
  stylesheet/   # global and component-level CSS
  utils/        # small shared helper functions
public/         # static files served as-is (images, menu photos, favicon, etc.)
```

Routes are defined in `src/App.jsx` and mirrored in `vite.config.js` for sitemap generation.

## Deployment

The site builds to `dist/` and is deployed via Netlify (see `netlify.toml`). Netlify runs `npm run build` and publishes the `dist/` directory, with a catch-all redirect to `index.html` to support client-side routing.

## Licensing

- **Source code** in this repository is licensed under the **MIT License** and is free to use, modify, and distribute.
- **All non-code content**, including photos, images, logos, branding, written copy, menus, and business-specific assets, is the exclusive property of **Schlax Group LLC (DBA Farmhouse Fizz Soda Bar)** and is not licensed for reuse without prior permission.

See the [`LICENSE`](./LICENSE) file for full details.

---

Authored by Silas Schlax.

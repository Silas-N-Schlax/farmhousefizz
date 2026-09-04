const DOMAIN = "https://farmhousefizz.com"
const CURRENT_DATE = new Date().toISOString()
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { cateringLinks } from './src/assets/seo/catering-links';
const cateringURLs = cateringLinks()

let cateringRoutes = cateringURLs.map(url => url.path)

let routes = [
  "/",
  "/about-us",
  "/contact-us",
  "/catering",
  "/menu",
  "/questions-and-answers",
]

let dynamicRoutes = [...routes, ...cateringRoutes]

let excludedRoutes = [
  "/terms-and-conditions",
  "/polls/soda-poll",
  "/privacy-policy",
  "/energy-drink-notice",
  "/dynamic-event-menu-x",
  "/dynamic-event-menu-y"
]

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      react(),
      Sitemap({
      hostname: DOMAIN,
      dynamicRoutes: dynamicRoutes,
      exclude: excludedRoutes,
      robots: [{
        userAgent: "*",
        allow: "/",
        disallow: excludedRoutes
      }]
    }),
    ],
});
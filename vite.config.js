import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      react(),
      sitemap({
      hostname: "https://farmhousefizz.com",
      dynamicRoutes: [
        "/",
        "/about-us",
        "/contact-us",
        "/menu",
        "/polls/soda-poll",
        "/questions-and-answers",
      ],
      exclude: [
        "/terms-and-conditions", 
        "/privacy-policy"
      ],
    }),
    ],
});
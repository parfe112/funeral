// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss()
    ],
  },

  adapter: node({
    mode: "standalone",
  }),

  image: {
    // Configurare pentru serviciul de optimizare a imaginilor
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        quality: 80,
      },
    },
    // Autorizăm surse externe (HTTPS)
    remotePatterns: [{ protocol: "https" }],
  },
});
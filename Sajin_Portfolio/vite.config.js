import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    sitemap({
      hostname: 'https://sajincl-porfolio.vercel.app'
    }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['all']
  }
})

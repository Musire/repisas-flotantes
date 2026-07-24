import path from "path"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import Pages from 'vite-plugin-pages'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    Pages({
      dirs: 'src/pages', 
      resolver: 'react', 
      routeStyle: 'next', 
      extensions: ['jsx', 'js'], 
    }),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { lossy: true, quality: 80 },
      avif: { quality: 70 },
    }),
  ],
    
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
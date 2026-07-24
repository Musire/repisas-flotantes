import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    Pages({
      dirs: 'src/pages', 
      resolver: 'react', 
      routeStyle: 'next', 
      extensions: ['jsx', 'js'], 
    })
  ],
    
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  base: '/tic-tac-toe_project2/',
  plugins: [react(), tailwindcss()], resolve: { alias: { "@": path.resolve(__dirname, "./src"), }, },
})

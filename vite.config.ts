import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react()],
  base: '/Olympique-Aikido.github.io/', // 👈 On a ajouté le nom EXACT ici, bien entouré de slashes
})
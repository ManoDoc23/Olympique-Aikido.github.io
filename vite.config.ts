import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Olympique-Aikido.github.io/", // <--- CETTE LIGNE DIT À GITHUB OÙ CHERCHER LES FICHIERS JS ET CSS
  build: {
    rollupOptions: {
      external: (id) => id.includes("kidsImg.jpg")
    }
  }
});
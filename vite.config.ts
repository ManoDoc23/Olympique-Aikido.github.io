import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ce joker empêche le build de planter si une image fait des caprices sur GitHub
    rollupOptions: {
      external: (id) => id.includes("kidsImg.jpg")
    }
  }
});
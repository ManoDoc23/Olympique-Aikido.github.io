import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Olympique-Aikido.github.io/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'lucide-vendor': ['lucide-react'], // Spare les icônes dans un fichier dédié
        },
      },
    },
  },
});
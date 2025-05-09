import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist', // Aseguramos que la salida del build sea la carpeta 'dist'
  },
});
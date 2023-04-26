import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // configured to allow Vite to work with docker
    host: '0.0.0.0',
    port: 3000, // This is the port which we will use in docker
  },
});

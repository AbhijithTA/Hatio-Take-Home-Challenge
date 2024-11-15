import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: isDevelopment
      ? {
          '/api': {
            target: 'http://localhost:5000',  
            changeOrigin: true,
          },
        }
      : undefined,
  },
  define: {
    'process.env.BACKEND_URL': JSON.stringify(isDevelopment ? '/api' : 'https://hatio-take-home-challenge.onrender.com'),
  },
});

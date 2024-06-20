import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Obtener el path del directorio actual
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': `${__dirname}/src`
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://cdi-web-backend.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

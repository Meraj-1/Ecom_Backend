import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['react-toastify'],
  },
  resolve: {
    alias: {
      '@components': '/src/components',
    },
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    host: true,  // Listen on all addresses
    port: 5173,  // Explicit port
    watch: {
      usePolling: true,
      interval: 100  // Check every 100ms
    },
    hmr: {
      overlay: true  // Show errors as overlay
    }
  }
})

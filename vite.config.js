import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
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

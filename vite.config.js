import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,                   // accept connections from your network
    allowedHosts: ['.ngrok-free.app'], // ✅ string with leading dot = allow all subdomains
    // (optional) steadier HMR when tunneling:
    // hmr: { clientPort: 443 }
  },
  // If you ever use `vite preview`, mirror it there too:
  preview: { allowedHosts: ['.ngrok-free.app'] }
})

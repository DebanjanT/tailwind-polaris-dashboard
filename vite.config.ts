import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': ['@dtewary/tw-polaris'],
          'forms': [
            './src/components/ui/LoginForm',
            './src/components/ui/AtmLocatorForm',
            './src/components/ui/CustomerAddForm'
          ],
          'lists': ['./src/components/ui/InvoiceList']
        }
      }
    }
  }
})

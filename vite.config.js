import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  env: {
    VITE_PUBLIC_KEY: '3pBNtfkPVVbJvUn-t',
    VITE_SERVICE_ID: 'service_mvz9zhm',
    VITE_TEMPLATE_ID: 'template_lj45liz',
  },
})

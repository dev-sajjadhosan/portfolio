import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { qrcode } from 'vite-plugin-qrcode'
import tailwindcss from '@tailwindcss/vite'
import { edaPlugin } from '@eda-plugin/eda'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), qrcode(), tailwindcss(), edaPlugin()],
})

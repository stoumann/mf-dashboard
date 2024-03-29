import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    proxy: {
      '/rest': 'https://region02eu5.fusionsolar.huawei.com',
      '/nano4': {
        target: 'http://nano4:5000',
        rewrite: (path) => path.replace(/^\/nano4/, ""),
      },
      '/nano5': {
        target: 'http://nano5:5000',
        rewrite: (path) => path.replace(/^\/nano5/, ""),
      },
      '/prusa1': {
        target: 'http://prusa1',
        rewrite: (path) => path.replace(/^\/prusa1/, ""),
      },
      '/prusa2': {
        target: 'http://prusa2',
        rewrite: (path) => path.replace(/^\/prusa2/, ""),
      },
    }
  }
})

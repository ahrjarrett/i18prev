import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  resolve: {
    alias: {
      '@i18prev/i18prev': fileURLToPath(new URL('../../packages/i18prev/src', import.meta.url)),
    }
  },
})

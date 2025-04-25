import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      i18n: '/packages/utils/src/i18n',
      scss: '/packages/utils/src/scss',
      enums: '/packages/utils/src/enums',
      hooks: '/packages/utils/src/hooks',
      types: '/packages/utils/src/types',
      helpers: '/packages/utils/src/helpers',
      services: '/packages/utils/src/services',
      constants: '/packages/utils/src/constants',
      components: '/packages/utils/src/components',
    },
  },
})

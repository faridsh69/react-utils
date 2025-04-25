import { isAbsolute } from 'node:path'
import react from '@vitejs/plugin-react'
import { build, defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import tsconfigPaths from 'vite-tsconfig-paths'

const folders = [
  'scss',
  'i18n',
  'enums',
  'hooks',
  'helpers',
  'types',
  'services',
  'constants',
  'components',
]

const viteConfig = defineConfig({
  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    tsconfigPaths(),
    dts({
      tsconfigPath: 'tsconfig.json',
      insertTypesEntry: true,
      include: ['src'],
    }),
    libInjectCss(),
  ],
  build: {
    outDir: 'lib',
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    sourcemap: true,
    rollupOptions: {
      external: id =>
        !(
          id.startsWith('.') || // like ./test
          isAbsolute(id) || // list src/index.ts
          folders.find(f => id.startsWith(f))
        ),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        entryFileNames: 'index.js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})

build(viteConfig)

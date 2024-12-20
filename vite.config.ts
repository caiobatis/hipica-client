import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  server: {
    host: true,
    strictPort: true,
  },
  resolve: {
    alias: [
      {
        find: /^~\/(.+)/,
        replacement: '/src/$1',
      },
    ],
  },
})

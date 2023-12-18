import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import { less } from 'svelte-preprocess-less';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: {
      style: less(),
    },
  })],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '')
      }
    }
  }
})

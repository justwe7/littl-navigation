import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
const Components = require('unplugin-vue-components/vite')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue()
  ],
  resolve: {
    alias: {
      '@': path.join( __dirname, 'src')
    }
  }
})

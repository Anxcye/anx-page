import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

// Vue SPA routes that need their own HTML files for direct URL access
const spaRoutes = ['/privacy', '/terms', '/download']

// Plugin to copy index.html to each route folder after build
function generateRouteHtmlPlugin() {
  return {
    name: 'generate-route-html',
    closeBundle() {
      const distDir = join(process.cwd(), 'dist')
      const indexHtml = join(distDir, 'index.html')

      if (!existsSync(indexHtml)) return

      for (const route of spaRoutes) {
        const routeDir = join(distDir, route.slice(1)) // remove leading /
        const routeHtml = join(routeDir, 'index.html')

        if (!existsSync(routeDir)) {
          mkdirSync(routeDir, { recursive: true })
        }

        copyFileSync(indexHtml, routeHtml)
        console.log(`Generated: ${route}/index.html`)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    generateRouteHtmlPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})


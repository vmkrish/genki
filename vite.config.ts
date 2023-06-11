import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/genki/",
  plugins: [
    Vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module'
      },
      workbox: {
        globPatterns: ['**/*.{ts,js,css,html,ico,png,svg,json}']
      },
      manifest: {
        name: 'Genki',
        short_name: 'Genki',
        description: 'Genki Vocab List',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'ufo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'star-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

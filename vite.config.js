// import { defineConfig } from 'vite'
// import { VitePWA } from "vite-plugin-pwa";
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// vite.config.js
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    VitePWA({
      manifest: {
        name: 'Mi PWA',
        short_name: 'Mi PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/assets/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        permissions: ['camera']
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://api.example.com'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 7, // 1 semana
              },
              cacheableResponse: {
                statuses: [200],
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
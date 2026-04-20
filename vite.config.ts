import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import type { Plugin } from 'vite'

// Plugin to defer CSS loading and prevent render blocking
function deferCssPlugin(): Plugin {
  return {
    name: 'defer-css',
    transformIndexHtml(html: string) {
      // Inject script that loads CSS asynchronously after DOMContentLoaded
      const deferScript = `
        <script>
          // Defer CSS loading to prevent render blocking
          function loadCssAsync() {
            const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
            cssLinks.forEach(link => {
              link.media = 'print';
              link.onload = function() {
                this.media = 'all';
              };
              // Trigger reload to force onload
              link.href = link.href;
            });
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadCssAsync);
          } else {
            loadCssAsync();
          }
        </script>
      `;
      return html.replace('</head>', deferScript + '</head>');
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    deferCssPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['@tanstack/react-router'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-leaflet': ['leaflet'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-popover', '@radix-ui/react-progress'],
        },
      },
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
  },
})

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import Compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.growthlyfast.com/',
  output: 'server',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  }),
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ],
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true,
      },
      drafts: true,
    }),
    Compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
        removeComments: true
      },
      Image: false,
      JavaScript: true,
      SVG: true
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),

    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/funnel/', '/payment/', '/thank-you/', '/api/']
        },
        {
          userAgent: 'Googlebot',
          allow: '/',
          disallow: ['/funnel/', '/payment/', '/api/'],
          crawlDelay: 0
        }
      ],
      sitemap: 'https://www.growthlyfast.com/sitemap-index.xml'
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {},
      // Minificación
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs en producción
          drop_debugger: true
        }
      },
      // Chunk size warnings
      chunkSizeWarningLimit: 500
    },
    // Optimización de dependencias
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: ['three', '@react-three/fiber', '@react-three/drei']
    }
  }
});

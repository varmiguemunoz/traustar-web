import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import Compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.traustarlogistics.com',
  output: 'server',
  redirects: {
    '/servicios': '/services',
    '/servicios/ftl': '/services/ftl',
    '/servicios/ltl': '/services/ltl',
    '/servicios/reefer': '/services/reefer',
    '/servicios/flatbed': '/services/flatbed',
    '/servicios/cross-border': '/services/cross-border',
    '/servicios/intermodal': '/services/intermodal',
    '/servicios/expedited': '/services/expedited',
    '/servicios/drayage': '/services/drayage',
    '/servicios/spot-contract': '/services/spot-contract',
    '/servicios/carga-especializada': '/services/specialized',
    '/contacto': '/contact',
    '/privacidad': '/privacy',
    '/terminos': '/terms',
    '/tecnologia': '/technology',
    '/nosotros': '/about',
    '/glosario': '/glossary',
    '/preguntas-frecuentes': '/faq',
    '/logistics-guides/logistics-guides': '/logistics-guides',
    '/market-rate-reports/market-rate-reports': '/market-rate-reports'
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
      wrap: true
    }
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true
      },
      drafts: true
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
          disallow: ['/payment/', '/thank-you/', '/api/']
        }
      ],
      sitemap: 'https://www.traustarlogistics.com/sitemap-index.xml'
    }),
    react()
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {},
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      chunkSizeWarningLimit: 500
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'astro-leaflet > leaflet'],
      exclude: ['three', '@react-three/fiber', '@react-three/drei']
    }
  }
});

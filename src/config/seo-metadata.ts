// Optional centralized SEO metadata map.

export const seoMetadata = {
  '/': {
    title: 'Traustar Logistics | Freight Brokerage Across North America',
    description:
      'Data-driven freight brokerage and logistics execution across the United States, Mexico, and Canada.',
    keywords:
      'freight brokerage, logistics services, FTL, LTL, cross-border shipping, North America freight',
    ogImageTitle: 'Traustar Logistics',
    ogImageMeta: 'Reliable freight execution across North America'
  },
  '/services': {
    title: 'Freight Services | Traustar Logistics',
    description:
      'Explore Traustar freight solutions including FTL, LTL, cross-border, intermodal, drayage, and expedited shipping.',
    keywords:
      'freight services, FTL shipping, LTL shipping, cross-border logistics, intermodal freight',
    ogImageTitle: 'Traustar Freight Services',
    ogImageMeta: 'Flexible shipping solutions for complex supply chains'
  },
  '/technology': {
    title: 'Technology Platform | Traustar Logistics',
    description:
      'Real-time visibility, data-backed pricing, and compliance workflows that improve freight performance.',
    keywords: 'logistics technology, freight tracking, transportation analytics, carrier compliance',
    ogImageTitle: 'Traustar Technology',
    ogImageMeta: 'Visibility and pricing intelligence for freight operations'
  },
  '/quote': {
    title: 'Request a Freight Quote | Traustar Logistics',
    description: 'Get fast, data-driven freight quotes for North American lanes and equipment types.',
    keywords: 'freight quote, shipping rates, logistics pricing, truckload quote',
    ogImageTitle: 'Request a Quote',
    ogImageMeta: 'Fast and transparent freight pricing'
  },
  '/blog': {
    title: 'Traustar Blog | Freight Insights and Market Intelligence',
    description:
      'Practical insights on transportation planning, freight strategy, and North American logistics trends.',
    keywords: 'logistics blog, freight insights, transportation strategy, shipping best practices',
    ogImageTitle: 'Traustar Blog',
    ogImageMeta: 'Freight insights and logistics expertise'
  }
} as const;

export type SEOPage = keyof typeof seoMetadata;

export const getPageSEO = (path: string) => {
  return (
    seoMetadata[path as SEOPage] || {
      title: 'Traustar Logistics',
      description:
        'Premium freight brokerage and logistics coordination across the United States, Mexico, and Canada.',
      keywords: 'freight brokerage, logistics, supply chain',
      ogImageTitle: 'Traustar Logistics',
      ogImageMeta: 'North American freight execution'
    }
  );
};

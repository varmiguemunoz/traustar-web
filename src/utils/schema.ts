// Schema.org utilities for Traustar Logistics

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Traustar Logistics',
  alternateName: 'Traustar',
  url: 'https://www.traustarlogistics.com',
  logo: 'https://www.traustarlogistics.com/favicon.svg',
  description:
    'Freight brokerage and logistics coordination across the United States, Mexico, and Canada.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+18723519977',
    contactType: 'Customer Support',
    availableLanguage: ['English'],
    areaServed: ['US', 'MX', 'CA']
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    addressCountry: 'US'
  },
  knowsAbout: [
    'Freight Brokerage',
    'Full Truckload (FTL)',
    'Less Than Truckload (LTL)',
    'Cross-Border Logistics',
    'Intermodal Freight',
    'Drayage',
    'Expedited Shipping',
    'Transportation Analytics'
  ]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Traustar Logistics',
  url: 'https://www.traustarlogistics.com',
  description: 'North American freight brokerage and transportation execution',
  publisher: {
    '@type': 'Organization',
    name: 'Traustar Logistics'
  }
};

export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const createServiceSchema = ({
  name,
  description,
  offers,
  serviceType = 'Service'
}: {
  name: string;
  description: string;
  offers: {
    '@type': 'Offer';
    name: string;
    price: string;
    priceCurrency: string;
    availability: string;
  }[];
  serviceType?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': serviceType,
  name,
  serviceType: name,
  provider: {
    '@type': 'Organization',
    name: 'Traustar Logistics'
  },
  areaServed: ['US', 'MX', 'CA'],
  description,
  offers
});

export const createProductSchema = ({
  name,
  description,
  price,
  priceCurrency = 'USD'
}: {
  name: string;
  description: string;
  price: string;
  priceCurrency?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  brand: {
    '@type': 'Organization',
    name: 'Traustar Logistics'
  },
  offers: {
    '@type': 'Offer',
    price,
    priceCurrency,
    availability: 'https://schema.org/InStock'
  }
});

export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const createBlogPostingSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
  keywords = [],
  wordCount
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
  keywords?: string[];
  wordCount?: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline,
  description,
  image,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    '@type': 'Person',
    name: author
  },
  publisher: {
    '@type': 'Organization',
    name: 'Traustar Logistics',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.traustarlogistics.com/favicon.svg'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url
  },
  keywords,
  ...(wordCount && { wordCount })
});

export const createVideoObjectSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl: string;
  duration?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  ...(duration && { duration })
});

export const createAggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1
}: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) => ({
  '@type': 'AggregateRating',
  ratingValue,
  reviewCount,
  bestRating,
  worstRating
});

export const createOfferSchema = ({
  price,
  priceCurrency = 'USD',
  priceValidUntil,
  availability = 'https://schema.org/InStock',
  url
}: {
  price: string;
  priceCurrency?: string;
  priceValidUntil?: string;
  availability?: string;
  url?: string;
}) => ({
  '@type': 'Offer',
  price,
  priceCurrency,
  availability,
  ...(priceValidUntil && { priceValidUntil }),
  ...(url && { url })
});

// Schema.org utilities para GrowthlyFast

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GrowthlyFast',
  alternateName: 'growthlyfast',
  url: 'https://www.growthlyfast.com',
  logo: 'https://www.growthlyfast.com/logo.webp',
  description:
    'Professional development services for agencies, startups, and contractors. AI Agents, white-label partnerships, and custom development',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Miguel Angel Munoz',
    jobTitle: 'Software Engineer',
    url: 'https://www.growthlyfast.com',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+573023278057',
    contactType: 'Sales',
    availableLanguage: ['English', 'Spanish'],
    areaServed: 'Worldwide',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CO',
  },
  knowsAbout: [
    'Web Development',
    'React',
    'Node.js',
    'Next.js',
    'Mobile Development',
    'AI Automation',
    'White Label Services',
    'SaaS Development',
    'Dev Packs',
    'Agency Development',
    'Technical Consulting',
    'Software Development',
    'Web Development',
    'Mobile Development',
    'software development',
    'development',
    'development services',
    'development partner',
    'development agency',
    'development consulting',
    'development team',
    'development services',
    'development partner',
    'development agency',
    'AI Agents',
    'AI Sales Agents',
    'AI Marketing Agents',
    'AI Customer Support Agents',
    'AI Technical Support Agents',
    'AI Virtual Assistants',
    'AI Chatbots',
    'AI Voice Assistants',
    'AI Personal Assistants',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GrowthlyFast',
  url: 'https://www.growthlyfast.com',
  description: 'Monthly Dev Packs and agency development services',
  publisher: {
    '@type': 'Organization',
    name: 'GrowthlyFast',
  },
};

export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const createServiceSchema = ({
  name,
  description,
  offers,
  serviceType = 'Service',
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
  name: name,
  serviceType: name,
  provider: {
    '@type': 'Organization',
    name: 'GrowthlyFast',
  },
  areaServed: 'Worldwide',
  description: description,
  offers: offers,
});

export const createProductSchema = ({
  name,
  description,
  price,
  priceCurrency = 'USD',
}: {
  name: string;
  description: string;
  price: string;
  priceCurrency?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: name,
  description: description,
  brand: {
    '@type': 'Organization',
    name: 'GrowthlyFast',
  },
  offers: {
    '@type': 'Offer',
    price: price,
    priceCurrency: priceCurrency,
    availability: 'https://schema.org/InStock',
  },
});

export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
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
  wordCount,
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
  headline: headline,
  description: description,
  image: image,
  datePublished: datePublished,
  dateModified: dateModified || datePublished,
  author: {
    '@type': 'Person',
    name: author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'GrowthlyFast',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.growthlyfast.com/logo.webp',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url,
  },
  keywords: keywords,
  ...(wordCount && { wordCount: wordCount }),
});

export const createVideoObjectSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
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
  name: name,
  description: description,
  thumbnailUrl: thumbnailUrl,
  uploadDate: uploadDate,
  contentUrl: contentUrl,
  embedUrl: embedUrl,
  ...(duration && { duration: duration }),
});

export const createAggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) => ({
  '@type': 'AggregateRating',
  ratingValue: ratingValue,
  reviewCount: reviewCount,
  bestRating: bestRating,
  worstRating: worstRating,
});

export const createOfferSchema = ({
  price,
  priceCurrency = 'USD',
  priceValidUntil,
  availability = 'https://schema.org/InStock',
  url,
}: {
  price: string;
  priceCurrency?: string;
  priceValidUntil?: string;
  availability?: string;
  url?: string;
}) => ({
  '@type': 'Offer',
  price: price,
  priceCurrency: priceCurrency,
  availability: availability,
  ...(priceValidUntil && { priceValidUntil: priceValidUntil }),
  ...(url && { url: url }),
});

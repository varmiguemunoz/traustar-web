// SEO Metadata centralizado por página

export const seoMetadata = {
  '/': {
    title: 'GrowthlyFast | AI Sales Agent, One-Time Projects & Reseller Development',
    description:
      'Power your agency or startup with real-world solutions: AI Sales Agents, one-time production-ready projects, and a white-label reseller program. Fast, scalable, transparent.',
    keywords:
      'AI Sales Agent, one-time web development, development reseller program, agency development partner, white label dev',
    ogImageTitle: 'AI & Dev Solutions for Agencies and Startups',
    ogImageMeta: 'Automate sales, launch one-time projects, and scale your agency with our white-label program',
  },
  '/scale-your-product': {
    title: 'Scale Your Product with Monthly Dev Packs | GrowthlyFast',
    description:
      '40h, 80h, or 140h monthly dev packs for B2B products. React, Node.js, AWS. Flexible capacity, transparent time tracking, no hiring overhead.',
    keywords: 'monthly dev packs, scale product development, B2B product development, flexible dev capacity',
    ogImageTitle: 'Scale Your Product',
    ogImageMeta: '40-140h monthly dev capacity',
  },
  '/start-your-digital-agency': {
    title: 'Start a White-Label Digital Agency for $250 | GrowthlyFast',
    description:
      'Launch your own branded agency in minutes. Sell web projects, we deliver. No tech skills needed. $250 one-time, lifetime access to reseller catalog.',
    keywords: 'white label digital agency, start digital agency, reseller web development, agency reseller program',
    ogImageTitle: 'Start Your Digital Agency',
    ogImageMeta: '$250 one-time, lifetime access',
  },
  '/launch-your-website': {
    title: 'Launch Your Website in 5-10 Days | Fixed Pricing | GrowthlyFast',
    description:
      'Landing pages ($450-700), redesigns ($600-1200), e-commerce ($700-4600). Fast delivery, no hidden fees, 100% satisfaction guarantee.',
    keywords: 'launch website fast, fixed price web development, landing page development, website redesign services',
    ogImageTitle: 'Launch Your Website',
    ogImageMeta: 'Delivered in 5-10 days, fixed pricing',
  },
  '/digital-strategy-session': {
    title: 'Tech Strategy Consulting | $200-600 | Roadmap Included',
    description:
      'Get clarity on your tech roadmap before investing. 1-hour session + PDF action plan with timelines, costs, and tech stack recommendations.',
    keywords: 'tech strategy consulting, digital roadmap consulting, CTO advisory services, tech stack consulting',
    ogImageTitle: 'Digital Strategy Session',
    ogImageMeta: 'Clear roadmap before you invest',
  },
  '/sales-agent': {
    title: 'AI Sales Agent for WhatsApp | Lead Qualification & Appointment Booking',
    description:
      'Turn WhatsApp into a high-performance sales machine with custom AI sales agents. Qualify leads 24/7, book meetings automatically, integrate with CRM. Multilingual EN/ES support. From $20/month.',
    keywords:
      'AI sales agent, WhatsApp sales automation, AI lead qualification, automated appointment booking, AI sales assistant, WhatsApp business automation, conversational AI sales, multilingual sales bot',
    ogImageTitle: 'AI Sales Agent for WhatsApp',
    ogImageMeta: 'Qualify leads 24/7 & book meetings automatically - $20/month',
  },
  '/funnel/book-your-call': {
    title: 'Book Your GrowthKit Strategy Call | Free Discovery Session',
    description:
      'Schedule your free GrowthKit strategy call. Discover how our CRM, AI automation, and website system can accelerate your business growth. Book your discovery session now.',
    keywords:
      'book discovery call, GrowthKit strategy session, free business consultation, schedule strategy call, growth strategy meeting',
    ogImageTitle: 'Book Your Strategy Call',
    ogImageMeta: 'Free GrowthKit discovery session - Schedule now',
  },
  '/funnel/agencies/start-project-now': {
    title: 'Agency Development Partner | CRM, Website & AI System for Agencies',
    description:
      'Complete agency infrastructure: professional website, CRM setup, AI automation, and monthly maintenance. Built for marketing, creative, and software agencies. Deliver faster, close more clients. From $830.',
    keywords:
      'agency development partner, agency CRM setup, white label agency website, agency automation system, marketing agency infrastructure, agency website builder, AI for agencies',
    ogImageTitle: 'Agency Development System',
    ogImageMeta: 'Complete CRM + Website + AI infrastructure - From $830',
  },
  '/funnel/contractors/start-project-now': {
    title: 'Contractor Website Package | GrowthKit System for Home Services',
    description:
      'Professional website package for contractors, roofing, solar, HVAC, and home services. Includes CRM, AI sales assistant, SEO, and maintenance. Capture and convert leads automatically. From $830.',
    keywords:
      'contractor website package, home services website, roofing website builder, HVAC website design, contractor CRM system, home services lead generation, solar company website',
    ogImageTitle: 'Contractor Website Package',
    ogImageMeta: 'Website + CRM + AI for home services - From $830',
  },
  '/sales': {
    title: 'Get a Quote for Development Services | GrowthlyFast',
    description:
      'Contact us for dev packs, projects, or consulting. Fast response, transparent pricing, clear timelines. Book your discovery call today.',
    keywords: 'development services quote, hire development team, web development inquiry',
    ogImageTitle: 'Get a Quote',
    ogImageMeta: 'Fast response, transparent pricing',
  },
  '/blog': {
    title: 'Development Tutorials & Tech Stack Guides | GrowthlyFast Blog',
    description:
      'Learn React, Node.js, Next.js, Prisma, and React Native. In-depth tutorials, best practices, and implementation guides from production experience.',
    keywords: 'development tutorials, React tutorials, Node.js guides, Next.js best practices',
    ogImageTitle: 'GrowthlyFast Blog',
    ogImageMeta: 'Development tutorials & tech guides',
  },
  '/book-your-call': {
    title: 'Book Your Discovery Call | Free Strategy Session | GrowthlyFast',
    description:
      'Schedule your free discovery call with GrowthlyFast. Discuss your project, get expert advice, and receive a transparent quote. Book your 30-minute strategy session now.',
    keywords: 'book discovery call, schedule strategy session, free consultation call, development strategy meeting',
    ogImageTitle: 'Book Your Discovery Call',
    ogImageMeta: 'Free 30-min strategy session - Schedule now',
  },
  '/referral-program': {
    title: 'Referral Partner Program | Earn 10% Commission | GrowthlyFast',
    description:
      'Join our referral program and earn 10% of project profit (30-40% margin) from every client you refer. Simple: you refer, we handle everything, you get paid monthly.',
    keywords:
      'referral partner program, earn commission referring clients, development referral program, passive income referrals',
    ogImageTitle: 'Referral Partner Program',
    ogImageMeta: 'Earn 10% commission - No limits on referrals',
  },
};

export type SEOPage = keyof typeof seoMetadata;

export const getPageSEO = (path: string) => {
  return (
    seoMetadata[path as SEOPage] || {
      title: 'GrowthlyFast - Monthly Dev Packs & Agency Development',
      description: 'Professional development services for agencies, startups, and contractors.',
      keywords: 'web development, agency development, dev packs',
      ogImageTitle: 'GrowthlyFast',
      ogImageMeta: 'Professional development services',
    }
  );
};

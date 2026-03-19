export interface TechnologyFeature {
  icon: string;
  title: string;
  description: string;
}

export const technologyPageSeo = {
  title: 'Technology | Traustar Logistics',
  description:
    'Traustar technology combines real-time visibility, data-driven pricing, and carrier compliance workflows to improve freight execution.'
};

export const technologyHero = {
  badge: 'Built for Modern Freight Operations',
  title: 'Intelligence-Driven Logistics Technology',
  description:
    'Improve supply chain performance with real-time visibility, pricing intelligence, and integrated carrier compliance workflows.',
  image: '/images/tech-hero.jpg',
  imageAlt: 'Operations team monitoring live transportation dashboards',
  primaryLabel: 'Request a Quote',
  primaryHref: '/quote',
  secondaryLabel: 'Contact Sales',
  secondaryHref: '/contact'
};

export const visibilityCards = [
  {
    icon: 'location_on',
    title: '24/7 GPS Tracking',
    description:
      'Live location updates, milestone events, and ETA reporting support proactive freight decision-making.',
    image: '/images/tech-gps.jpg',
    imageAlt: 'Map interface displaying live shipment locations'
  },
  {
    icon: 'dashboard',
    title: 'Unified Client Workspace',
    description:
      'Access shipment history, documents, invoicing records, and communication trails from one centralized view.',
    image: '/images/tech-dashboard.jpg',
    imageAlt: 'Customer logistics dashboard with shipment analytics'
  }
];

export const pricingFeatures: TechnologyFeature[] = [
  {
    icon: 'analytics',
    title: 'Market Analytics',
    description:
      'Historical and live market indicators help benchmark rates and align pricing with current capacity dynamics.'
  },
  {
    icon: 'payments',
    title: 'Dynamic Rate Engine',
    description:
      'Automated logic adjusts pricing recommendations based on lane behavior, timing windows, and equipment demand.'
  },
  {
    icon: 'trending_up',
    title: 'Cost Optimization',
    description:
      'Consolidation and routing intelligence identify opportunities to improve transit efficiency and reduce landed cost.'
  }
];

export const networkFeatures = [
  { icon: 'verified', text: 'Automated safety and insurance checks' },
  { icon: 'security', text: 'Continuous compliance and fraud prevention controls' },
  { icon: 'lan', text: 'EDI and API connectivity with shipper and carrier systems' }
];

export const networkStats = [
  { value: '45k+', label: 'Vetted carriers' },
  { value: '99.8%', label: 'Compliance rate' },
  { value: 'AI', label: 'Risk analysis support' },
  { value: '1h', label: 'Average vetting cycle' }
];

export const technologyCta = {
  title: 'Ready to Upgrade Your Freight Technology Stack?',
  description:
    'Work with Traustar to build a data-driven transportation model that scales with your supply chain.',
  primaryLabel: 'Start Now',
  primaryHref: '/contact',
  secondaryLabel: 'Request a Demo',
  secondaryHref: '/contact'
};

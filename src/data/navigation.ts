export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavigationGroup {
  id: 'services' | 'quote' | 'resources' | 'company' | 'legal';
  label: string;
  description: string;
  items: NavigationItem[];
}

export interface FooterColumn {
  id: string;
  label: string;
  links: NavigationItem[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
}

export const navPrimaryCta = {
  label: 'Get a Quote',
  href: '/quote'
} as const;

export const navSecondaryCta = {
  label: 'Talk to Sales',
  href: '/contact'
} as const;

export const navGroups: NavigationGroup[] = [
  {
    id: 'services',
    label: 'Services',
    description: 'Freight execution across North America with specialized coverage by equipment and lane.',
    items: [
      { label: 'Cross-Border', href: '/services/cross-border', description: 'Customs-ready U.S., Mexico, and Canada shipping.' },
      { label: 'Drayage', href: '/services/drayage', description: 'Port and rail container coordination.' },
      { label: 'Expedited', href: '/services/expedited', description: 'Time-critical shipments with priority execution.' },
      { label: 'Flatbed', href: '/services/flatbed', description: 'Open-deck freight for oversized and heavy cargo.' },
      { label: 'FTL', href: '/services/ftl', description: 'Dedicated full truckload capacity.' },
      { label: 'Intermodal', href: '/services/intermodal', description: 'Rail and truck optimization for long-haul lanes.' },
      { label: 'LTL', href: '/services/ltl', description: 'Consolidated freight with cost efficiency.' },
      { label: 'Reefer', href: '/services/reefer', description: 'Temperature-controlled transportation.' },
      { label: 'Specialized', href: '/services/specialized', description: 'Custom equipment and non-standard handling.' },
      { label: 'Spot Contract', href: '/services/spot-contract', description: 'Flexible spot and contractual lane solutions.' }
    ]
  },
  {
    id: 'quote',
    label: 'Quote',
    description: 'Request lane pricing and service options based on your shipment profile.',
    items: [
      { label: 'Quote Overview', href: '/quote', description: 'Start with a general freight quote request.' },
      { label: 'Cross-Border Quote', href: '/quote/cross-border', description: 'Pricing for transborder logistics.' },
      { label: 'FTL Quote', href: '/quote/ftl', description: 'Dedicated full truckload quote flow.' },
      { label: 'LTL Quote', href: '/quote/ltl', description: 'Consolidated shipment quote flow.' }
    ]
  },
  {
    id: 'resources',
    label: 'Resources',
    description: 'Educational content, references, and market context for freight decision-making.',
    items: [
      { label: 'Blog', href: '/blog', description: 'Logistics insights and operational best practices.' },
      { label: 'FAQ', href: '/faq', description: 'Answers to operational and service questions.' },
      { label: 'Glossary', href: '/glossary', description: 'Definitions for logistics and freight terms.' },
      { label: 'Logistics Guides', href: '/logistics-guides', description: 'Downloadable guides and checklists.' },
      { label: 'Market Rate Reports', href: '/market-rate-reports', description: 'Lane trends and market snapshots.' },
      { label: 'Technology', href: '/technology', description: 'Visibility and automation capabilities.' }
    ]
  },
  {
    id: 'company',
    label: 'Company',
    description: 'Learn about Traustar operations and who we support.',
    items: [
      { label: 'About', href: '/about', description: 'Company overview and operating model.' },
      { label: 'Shippers', href: '/shippers', description: 'Services and workflows for shippers.' },
      { label: 'Carriers', href: '/carriers', description: 'Carrier network and onboarding details.' },
      { label: 'Contact', href: '/contact', description: 'Connect with sales or operations support.' }
    ]
  },
  {
    id: 'legal',
    label: 'Legal',
    description: 'Privacy and terms governing use of our services.',
    items: [
      { label: 'Privacy Policy', href: '/privacy', description: 'How we collect and process information.' },
      { label: 'Terms', href: '/terms', description: 'Service terms and usage conditions.' }
    ]
  }
];

export const navStandaloneLinks: NavigationItem[] = [];

export const legalLinks: NavigationItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' }
];

export const footerColumns: FooterColumn[] = [
  {
    id: 'services',
    label: 'Services',
    links: navGroups.find((group) => group.id === 'services')?.items ?? []
  },
  {
    id: 'quotes',
    label: 'Quotes',
    links: navGroups.find((group) => group.id === 'quote')?.items ?? []
  },
  {
    id: 'resources',
    label: 'Resources',
    links: navGroups.find((group) => group.id === 'resources')?.items ?? []
  },
  {
    id: 'company',
    label: 'Company',
    links: navGroups.find((group) => group.id === 'company')?.items ?? []
  },
  {
    id: 'legal',
    label: 'Legal',
    links: legalLinks
  }
];

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/traustar-logistics',
    icon: 'work',
    external: true
  },
  {
    label: 'X',
    href: 'https://x.com/traustarlog',
    icon: 'chat',
    external: true
  },
  {
    label: 'Email',
    href: 'mailto:info@traustar.com',
    icon: 'mail'
  }
];

export const footerCta = {
  title: 'Need lane-level pricing support?',
  description: 'Our team can build a lane strategy around your volume, transit targets, and equipment mix.',
  primary: {
    label: 'Request a Quote',
    href: '/quote'
  },
  secondary: {
    label: 'Contact Team',
    href: '/contact'
  }
} as const;

export const companyContact = {
  location: 'Chicago, IL, USA',
  phone: '+1 (872) 351-9977',
  phoneHref: 'tel:+18723519977',
  email: 'info@traustar.com',
  emailHref: 'mailto:info@traustar.com'
} as const;

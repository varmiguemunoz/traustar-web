import type { ComponentProps } from 'astro/types';

type ServiceHeroProps = {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  heroImage: string;
  heroImageAlt: string;
  variant: 'light' | 'dark';
};

type ValueProp = {
  icon: string;
  title: string;
  description: string;
};

type ComparisonItem = {
  icon: string;
  title: string;
  description: string;
  checks: string[];
};

type DataFeature = {
  icon: string;
  title: string;
  description: string;
};

type FleetCard = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
};

type FeatureBlock = {
  sectionTitle: string;
  sectionDescription: string;
  features: DataFeature[];
  image: string;
  imageAlt: string;
  variant?: 'light' | 'dark';
  imagePosition?: 'left' | 'right';
};

type FaqItem = {
  q: string;
  a: string;
};

type ServiceCta = {
  title: string;
  description: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
};

export type ServiceSlug =
  | 'ftl'
  | 'ltl'
  | 'reefer'
  | 'flatbed'
  | 'specialized'
  | 'intermodal'
  | 'drayage'
  | 'cross-border'
  | 'expedited'
  | 'spot-contract';

export interface ServicePageData {
  slug: ServiceSlug;
  seo: {
    title: string;
    description: string;
  };
  hero: ServiceHeroProps;
  valueSection: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: ValueProp[];
    bgColor?: 'white' | 'slate';
    columns?: 3 | 4;
  };
  comparison?: ComparisonItem[];
  dataDriven?: {
    title: string;
    subtitle: string;
    features: DataFeature[];
  };
  feature?: FeatureBlock;
  fleet?: {
    sectionTitle: string;
    sectionSubtitle: string;
    cards: FleetCard[];
    ctaText?: string;
    ctaHref?: string;
  };
  faq?: {
    title?: string;
    items: FaqItem[];
  };
  cta: ServiceCta;
}

export const servicesOverviewSeo = {
  title: 'Freight Services | Traustar Logistics',
  description:
    'From FTL and LTL to cross-border, reefer, and expedited freight, Traustar delivers technology-backed logistics services across North America.'
};

export const servicesOverviewHero = {
  badge: 'North America Freight Solutions',
  title: 'Our Logistics',
  titleHighlight: 'Services',
  description:
    'From core truckload solutions to specialized and cross-border operations, Traustar provides execution quality you can scale with.',
  primaryCta: 'Request Strategy Session',
  primaryCtaHref: '/quote',
  secondaryCta: 'Contact an Expert',
  secondaryCtaHref: '/contact',
  heroImage: '/images/svc-ftl-hero.jpg',
  heroImageAlt: 'Freight truck on a highway at sunset',
  variant: 'light' as const
};

export const servicesOverviewValueProps = [
  {
    icon: 'analytics',
    title: 'Real-Time Visibility',
    description: 'Track active loads with live milestones and predictive ETA updates.'
  },
  {
    icon: 'hub',
    title: 'Scalable Capacity',
    description: 'Access a vetted carrier network for seasonal peaks and strategic growth lanes.'
  },
  {
    icon: 'support_agent',
    title: 'Dedicated Support',
    description: 'Freight specialists available 24/7 for exception management and route optimization.'
  }
];

export const servicesOverviewCards = [
  {
    image: '/images/svc-ftl-hero.jpg',
    imageAlt: 'FTL truck',
    label: 'FTL',
    title: 'Full Truckload',
    description: 'Dedicated trailer capacity for high-volume freight.',
    href: '/services/ftl'
  },
  {
    image: '/images/svc-ltl-hero.jpg',
    imageAlt: 'LTL operations',
    label: 'LTL',
    title: 'Less-Than-Truckload',
    description: 'Cost-efficient consolidated shipping for partial loads.',
    href: '/services/ltl'
  },
  {
    image: '/images/svc-cb-hero.jpg',
    imageAlt: 'Cross-border freight',
    label: 'Cross-Border',
    title: 'International Freight',
    description: 'Customs-ready execution across the US, Mexico, and Canada.',
    href: '/services/cross-border'
  },
  {
    image: '/images/svc-exp-hero.jpg',
    imageAlt: 'Expedited freight',
    label: 'Expedited',
    title: 'Time-Critical Freight',
    description: 'Priority service for urgent and recovery shipments.',
    href: '/services/expedited'
  },
  {
    image: '/images/svc-inter-hero.jpg',
    imageAlt: 'Intermodal transport',
    label: 'Intermodal',
    title: 'Rail & Intermodal',
    description: 'Long-haul optimization through rail and road combinations.',
    href: '/services/intermodal'
  },
  {
    image: '/images/svc-ftl-map.jpg',
    imageAlt: 'Flatbed transport',
    label: 'Flatbed',
    title: 'Flatbed & Heavy Haul',
    description: 'Open-deck and specialized trailer configurations.',
    href: '/services/flatbed'
  },
  {
    image: '/images/svc-cb-ops.jpg',
    imageAlt: 'Specialized freight',
    label: 'Specialized',
    title: 'Specialized Logistics',
    description: 'Complex cargo planning for sensitive and oversized loads.',
    href: '/services/specialized'
  },
  {
    image: '/images/svc-inter-map.jpg',
    imageAlt: 'Drayage operations',
    label: 'Drayage',
    title: 'Port Drayage',
    description: 'Fast container transfers from terminals to facilities.',
    href: '/services/drayage'
  },
  {
    image: '/images/market-heatmap.jpg',
    imageAlt: 'Spot and contract rates',
    label: 'Strategy',
    title: 'Spot & Contract',
    description: 'Freight sourcing strategies backed by market analytics.',
    href: '/services/spot-contract'
  },
  {
    image: '/images/tech-dashboard.jpg',
    imageAlt: 'Reefer transport control',
    label: 'Reefer',
    title: 'Temperature Controlled',
    description: 'Cold-chain execution for food and pharmaceutical freight.',
    href: '/services/reefer'
  }
];

export const servicesOverviewCta = {
  title: 'Need a tailored logistics plan?',
  description:
    'Tell us your lanes, service levels, and capacity goals. We will recommend the best service mix for your operation.',
  primaryCta: 'Get Started',
  primaryCtaHref: '/quote',
  secondaryCta: 'Talk to an Expert',
  secondaryCtaHref: '/contact'
};

export const servicePages: Record<ServiceSlug, ServicePageData> = {
  ftl: {
    slug: 'ftl',
    seo: {
      title: 'FTL Services | Traustar Logistics',
      description: 'Dedicated truckload capacity with reliable execution across key North American lanes.'
    },
    hero: {
      badge: 'Premium Full Truckload',
      title: 'Dedicated FTL Capacity for',
      titleHighlight: 'Critical Freight',
      description:
        'Secure trailer availability, direct routes, and high on-time performance for your most important shipments.',
      primaryCta: 'Request FTL Quote',
      primaryCtaHref: '/quote/ftl',
      secondaryCta: 'View Equipment',
      secondaryCtaHref: '#fleet',
      heroImage: '/images/svc-ftl-hero.jpg',
      heroImageAlt: 'Truck in transit on a highway',
      variant: 'dark'
    },
    valueSection: {
      sectionTitle: 'FTL advantages',
      sectionSubtitle: 'Built for secure, direct, and time-sensitive freight movement.',
      items: [
        { icon: 'location_on', title: 'Live Tracking', description: 'End-to-end GPS visibility and milestone updates.' },
        { icon: 'verified_user', title: 'Vetted Carriers', description: 'Qualified carrier partners with strong safety records.' },
        { icon: 'bar_chart', title: 'Market-Aware Rates', description: 'Competitive pricing informed by current lane dynamics.' }
      ],
      bgColor: 'white'
    },
    feature: {
      sectionTitle: 'North American lane coverage',
      sectionDescription: 'From domestic FTL to cross-border moves, we route freight through reliable high-frequency corridors.',
      features: [
        { icon: 'public', title: 'US-MX-CA reach', description: 'Execution coverage across major industrial markets.' },
        { icon: 'schedule', title: 'Predictable transit', description: 'Route strategies built around shipment SLAs.' },
        { icon: 'shield', title: 'Compliance control', description: 'Carrier vetting and documentation governance.' },
        { icon: 'support_agent', title: '24/7 support', description: 'Dedicated dispatch support and proactive alerts.' }
      ],
      image: '/images/svc-ftl-map.jpg',
      imageAlt: 'Map representing North American freight lanes',
      imagePosition: 'right'
    },
    faq: {
      items: [
        { q: 'When should I choose FTL?', a: 'FTL is ideal when shipment volume is high, timing is strict, or cargo sensitivity requires dedicated trailer space.' },
        { q: 'Can Traustar handle cross-border FTL?', a: 'Yes. We coordinate documentation and operational handoffs for cross-border execution across North America.' },
        { q: 'How quickly can I receive a quote?', a: 'Most FTL quote requests are turned around in minutes, depending on lane complexity and equipment needs.' }
      ]
    },
    cta: {
      title: 'Ready for reliable FTL execution?',
      description: 'Share your lane and shipment details and our team will deliver a tailored capacity plan.',
      primaryCta: 'Get FTL Quote',
      primaryCtaHref: '/quote/ftl',
      secondaryCta: 'Speak with an Advisor',
      secondaryCtaHref: '/contact'
    }
  },
  ltl: {
    slug: 'ltl',
    seo: {
      title: 'LTL Services | Traustar Logistics',
      description: 'Cost-efficient less-than-truckload freight with smart consolidation and dependable tracking.'
    },
    hero: {
      badge: 'LTL Freight Optimization',
      title: 'Pay only for the capacity',
      titleHighlight: 'you need',
      description: 'Consolidated freight services designed to reduce shipping costs without sacrificing visibility or control.',
      primaryCta: 'Request LTL Quote',
      primaryCtaHref: '/quote/ltl',
      secondaryCta: 'View Capabilities',
      secondaryCtaHref: '#faq',
      heroImage: '/images/svc-ltl-hero.jpg',
      heroImageAlt: 'Warehouse and LTL freight operations',
      variant: 'light'
    },
    valueSection: {
      sectionTitle: 'Why use Traustar for LTL',
      sectionSubtitle: 'Flexible pricing, strong routing logic, and shipment visibility.',
      items: [
        { icon: 'payments', title: 'Cost Optimization', description: 'Pay only for occupied space with route-aware consolidation.' },
        { icon: 'visibility', title: 'End-to-End Visibility', description: 'Real-time updates for every shipment milestone.' },
        { icon: 'verified_user', title: 'Reliable Network', description: 'Qualified carriers and monitored transit performance.' }
      ],
      bgColor: 'slate'
    },
    feature: {
      sectionTitle: 'Consolidation with control',
      sectionDescription: 'We reduce unnecessary handling and optimize movement through regional consolidation strategy.',
      features: [
        { icon: 'hub', title: 'Smart grouping', description: 'Compatibility-based load planning improves efficiency.' },
        { icon: 'swap_horiz', title: 'Cross-dock support', description: 'Operational speed for transload and border handoffs.' },
        { icon: 'public', title: 'Regional coverage', description: 'Access key US-MX-CA corridors.' },
        { icon: 'inventory', title: 'Equipment options', description: 'Dry van, reefer, and special handling support.' }
      ],
      image: '/images/svc-ltl-ops.jpg',
      imageAlt: 'LTL freight handling operation',
      imagePosition: 'left'
    },
    faq: {
      title: 'LTL frequently asked questions',
      items: [
        { q: 'How is LTL pricing calculated?', a: 'LTL rates are based on lane distance, freight class, dimensions, weight, and operational requirements.' },
        { q: 'Do you offer pickup and delivery coordination?', a: 'Yes. We coordinate pickup and final delivery across serviceable North American regions.' },
        { q: 'Can I track LTL shipments in real time?', a: 'Yes. Traustar provides live updates and status visibility from origin to destination.' }
      ]
    },
    cta: {
      title: 'Optimize your LTL spend today',
      description: 'Let us design a smarter consolidation approach for your lanes and freight profile.',
      primaryCta: 'Request LTL Quote',
      primaryCtaHref: '/quote/ltl',
      secondaryCta: 'Talk to LTL Specialist',
      secondaryCtaHref: '/contact'
    }
  },
  reefer: {
    slug: 'reefer',
    seo: {
      title: 'Reefer Services | Traustar Logistics',
      description: 'Temperature-controlled freight with real-time thermal monitoring and compliance workflows.'
    },
    hero: {
      badge: 'Cold Chain Logistics',
      title: 'Reefer execution with',
      titleHighlight: 'temperature control',
      description: 'Protect sensitive freight with monitored temperature ranges and strong cold-chain protocol compliance.',
      primaryCta: 'Request Reefer Quote',
      primaryCtaHref: '/quote',
      secondaryCta: 'View Compliance',
      secondaryCtaHref: '#faq',
      heroImage: '/images/svc-exp-ops.jpg',
      heroImageAlt: 'Cold-chain logistics operations',
      variant: 'dark'
    },
    valueSection: {
      sectionTitle: 'Reefer capabilities',
      sectionSubtitle: 'Reliability, visibility, and compliance for sensitive cargo.',
      items: [
        { icon: 'thermostat', title: 'Controlled Range', description: 'Shipment-specific temperature profiles for critical freight.' },
        { icon: 'sensors', title: 'Live Monitoring', description: 'Real-time thermal visibility and alert workflows.' },
        { icon: 'verified_user', title: 'Compliance Ready', description: 'Documentation and standards tracking for regulated sectors.' }
      ],
      bgColor: 'white'
    },
    feature: {
      sectionTitle: 'Cold-chain oversight',
      sectionDescription: 'Monitoring and intervention protocols to maintain product integrity from pickup to delivery.',
      features: [
        { icon: 'notifications_active', title: 'Exception alerts', description: 'Instant notifications for threshold events.' },
        { icon: 'map', title: 'Location telemetry', description: 'GPS and event tracking for active loads.' },
        { icon: 'description', title: 'Digital logs', description: 'Documented data trails for audits and reporting.' },
        { icon: 'cleaning_services', title: 'Sanitary controls', description: 'Operational cleanliness procedures between loads.' }
      ],
      image: '/images/tech-dashboard.jpg',
      imageAlt: 'Dashboard with shipment monitoring metrics',
      variant: 'dark',
      imagePosition: 'right'
    },
    faq: {
      items: [
        { q: 'What types of reefer freight do you handle?', a: 'We support perishable, pharmaceutical, and other temperature-sensitive product categories.' },
        { q: 'How is temperature monitored?', a: 'Reefer monitoring includes real-time tracking, exception alerts, and operational escalation protocols.' },
        { q: 'Can I request a custom temperature profile?', a: 'Yes. Temperature settings are configured to align with cargo requirements and handling standards.' }
      ]
    },
    cta: {
      title: 'Need reliable cold-chain logistics?',
      description: 'We can design a reefer solution aligned to your cargo requirements and transit commitments.',
      primaryCta: 'Get Reefer Quote',
      primaryCtaHref: '/quote',
      secondaryCta: 'Talk to Specialist',
      secondaryCtaHref: '/contact'
    }
  },
  flatbed: {
    slug: 'flatbed',
    seo: {
      title: 'Flatbed Services | Traustar Logistics',
      description: 'Open-deck and heavy-haul transport solutions for oversized, industrial, and project cargo.'
    },
    hero: {
      badge: 'Flatbed and Heavy Haul',
      title: 'Move oversized freight with',
      titleHighlight: 'precision planning',
      description: 'Traustar handles complex open-deck freight with securement workflows and permit-conscious execution.',
      primaryCta: 'Start Flatbed Quote',
      primaryCtaHref: '/quote',
      secondaryCta: 'View Equipment',
      secondaryCtaHref: '#fleet',
      heroImage: '/images/svc-ftl-hero.jpg',
      heroImageAlt: 'Heavy equipment transportation',
      variant: 'light'
    },
    valueSection: {
      sectionTitle: 'Flatbed solutions by cargo type',
      sectionSubtitle: 'Equipment and securement strategy tailored to each load profile.',
      items: [
        { icon: 'construction', title: 'Construction Machinery', description: 'Transport planning for heavy equipment and jobsite assets.' },
        { icon: 'factory', title: 'Industrial Units', description: 'Secure movement of large-scale industrial components.' },
        { icon: 'straighten', title: 'Structural Cargo', description: 'Open-deck support for steel, beams, and long materials.' },
        { icon: 'precision_manufacturing', title: 'Oversized Loads', description: 'Permit-aware execution for complex dimensions.' }
      ],
      bgColor: 'white',
      columns: 4
    },
    fleet: {
      sectionTitle: 'Specialized equipment options',
      sectionSubtitle: 'Available trailer configurations for diverse heavy-haul requirements.',
      cards: [
        {
          image: '/images/svc-ftl-map.jpg',
          imageAlt: 'Standard open-deck trailer',
          title: 'Standard Flatbeds',
          description: 'General open-deck freight for broad cargo types.',
          tags: ['Open Deck', 'Project Freight']
        },
        {
          image: '/images/svc-inter-map.jpg',
          imageAlt: 'Step deck style transport',
          title: 'Step Deck',
          description: 'Improved clearance options for taller cargo.',
          tags: ['Lower Deck', 'Height Flexibility']
        },
        {
          image: '/images/svc-cb-ops.jpg',
          imageAlt: 'Heavy-haul configuration',
          title: 'Heavy-Haul Configurations',
          description: 'Multi-axle and permit-sensitive planning support.',
          tags: ['Permit Ready', 'High Capacity']
        }
      ],
      ctaText: 'Talk with Equipment Specialist',
      ctaHref: '/contact'
    },
    cta: {
      title: 'Need a flatbed execution plan?',
      description: 'Send lane and cargo details and we will map the right trailer and route approach.',
      primaryCta: 'Request Flatbed Quote',
      primaryCtaHref: '/quote',
      secondaryCta: 'Call Logistics Team',
      secondaryCtaHref: 'tel:+18723519977'
    }
  },
  specialized: {
    slug: 'specialized',
    seo: {
      title: 'Specialized Freight | Traustar Logistics',
      description: 'Specialized logistics for complex, high-value, and high-risk freight scenarios.'
    },
    hero: {
      badge: 'Specialized Division',
      title: 'Precision execution for',
      titleHighlight: 'complex freight',
      description: 'Plan and move complex freight through dedicated risk controls, compliance governance, and specialized operating workflows.',
      primaryCta: 'Request Specialist Quote',
      primaryCtaHref: '/quote',
      secondaryCta: 'Talk to Specialist',
      secondaryCtaHref: '/contact',
      heroImage: '/images/svc-cb-ops.jpg',
      heroImageAlt: 'Operations team coordinating specialized freight',
      variant: 'dark'
    },
    valueSection: {
      sectionTitle: 'Specialized logistics capabilities',
      sectionSubtitle: 'Designed for high-consequence freight and complex operating constraints.',
      items: [
        { icon: 'verified_user', title: 'Risk Controls', description: 'Execution guardrails aligned to cargo sensitivity.' },
        { icon: 'assignment_turned_in', title: 'Permit Coordination', description: 'State and federal permit support for special movement.' },
        { icon: 'engineering', title: 'Technical Planning', description: 'Route and equipment planning for difficult freight profiles.' },
        { icon: 'security', title: 'Secure Handling', description: 'Protection workflows for high-value assets.' }
      ],
      bgColor: 'slate',
      columns: 4
    },
    feature: {
      sectionTitle: 'Operational safety framework',
      sectionDescription: 'Cross-functional planning, compliance checks, and controlled execution for sensitive shipments.',
      features: [
        { icon: 'gavel', title: 'Regulatory alignment', description: 'Operating plans aligned to applicable transport standards.' },
        { icon: 'radar', title: 'Monitoring center', description: 'Continuous route and exception surveillance.' },
        { icon: 'support_agent', title: 'Dedicated coordination', description: 'Specialist coverage through active movement.' },
        { icon: 'shield', title: 'Freight protection', description: 'Security-minded procedures and controls.' }
      ],
      image: '/images/team-control.jpg',
      imageAlt: 'Traustar control room',
      variant: 'dark',
      imagePosition: 'right'
    },
    cta: {
      title: 'Moving high-stakes freight?',
      description: 'Collaborate with our specialized team to build a controlled execution plan.',
      primaryCta: 'Book Specialist Consultation',
      primaryCtaHref: '/quote',
      secondaryCta: 'Call +1 (872) 351-9977',
      secondaryCtaHref: 'tel:+18723519977'
    }
  },
  intermodal: {
    slug: 'intermodal',
    seo: {
      title: 'Intermodal Services | Traustar Logistics',
      description: 'Rail and truck intermodal services that reduce cost and improve long-haul efficiency.'
    },
    hero: {
      badge: 'Intermodal Freight',
      title: 'Combine rail and road for',
      titleHighlight: 'smarter long-haul economics',
      description: 'Intermodal execution for cost optimization, stable capacity, and sustainability gains.',
      primaryCta: 'Request Intermodal Quote',
      primaryCtaHref: '/quote',
      secondaryCta: 'View Network',
      secondaryCtaHref: '/technology',
      heroImage: '/images/svc-inter-hero.jpg',
      heroImageAlt: 'Intermodal freight operation',
      variant: 'light'
    },
    valueSection: {
      sectionTitle: 'Intermodal value model',
      sectionSubtitle: 'Lower cost exposure and more predictable long-haul execution.',
      items: [
        { icon: 'trending_down', title: 'Cost Reduction', description: 'Improve lane economics on long-distance freight.' },
        { icon: 'eco', title: 'Lower Emissions', description: 'Support sustainability goals through rail integration.' },
        { icon: 'calendar_today', title: 'Capacity Stability', description: 'Balanced planning for volatile market cycles.' }
      ],
      bgColor: 'slate'
    },
    feature: {
      sectionTitle: 'Intermodal operating strength',
      sectionDescription: 'Rail partner coordination plus drayage support for complete first-mile and last-mile execution.',
      features: [
        { icon: 'train', title: 'Rail partnerships', description: 'Coverage through major North American rail networks.' },
        { icon: 'local_shipping', title: 'Drayage integration', description: 'Terminal-to-facility container transitions.' },
        { icon: 'track_changes', title: 'Door-to-door tracking', description: 'Visibility continuity across modes.' },
        { icon: 'hub', title: 'Network design', description: 'Lane optimization around transit and cost goals.' }
      ],
      image: '/images/svc-inter-map.jpg',
      imageAlt: 'Intermodal route map',
      imagePosition: 'right'
    },
    cta: {
      title: 'Explore intermodal opportunities',
      description: 'We can evaluate your lanes and recommend where intermodal can improve performance.',
      primaryCta: 'Start Intermodal Assessment',
      primaryCtaHref: '/quote',
      secondaryCta: 'Talk to Expert',
      secondaryCtaHref: '/contact'
    }
  },
  drayage: {
    slug: 'drayage',
    seo: {
      title: 'Drayage Services | Traustar Logistics',
      description: 'Fast terminal-to-facility container movement with efficient drayage coordination.'
    },
    hero: {
      badge: 'Port Drayage',
      title: 'Fast port-to-facility container',
      titleHighlight: 'execution',
      description: 'Reduce terminal dwell time and improve handoff speed through coordinated drayage operations.',
      primaryCta: 'Book Drayage Quote',
      primaryCtaHref: '/quote',
      secondaryCta: 'View Coverage',
      secondaryCtaHref: '/services',
      heroImage: '/images/svc-inter-map.jpg',
      heroImageAlt: 'Container movement map and port operations',
      variant: 'light'
    },
    valueSection: {
      sectionTitle: 'Drayage operating capabilities',
      sectionSubtitle: 'Container movement support from terminal gates to warehouse or intermodal points.',
      items: [
        { icon: 'anchor', title: 'Port-to-door transfer', description: 'Terminal pickup and direct facility delivery.' },
        { icon: 'train', title: 'Rail handoff', description: 'Smooth transitions between ocean and rail networks.' },
        { icon: 'settings_input_component', title: 'Terminal expertise', description: 'Workflow familiarity for faster container processing.' },
        { icon: 'local_shipping', title: 'OTR continuation', description: 'Load continuation from drayage to long-haul transport.' }
      ],
      bgColor: 'white',
      columns: 4
    },
    cta: {
      title: 'Need more reliable drayage execution?',
      description: 'We can support faster terminal movement and better container flow control.',
      primaryCta: 'Request Drayage Quote',
      primaryCtaHref: '/quote',
      secondaryCta: 'Talk to Operations',
      secondaryCtaHref: '/contact'
    }
  },
  'cross-border': {
    slug: 'cross-border',
    seo: {
      title: 'Cross-Border Services | Traustar Logistics',
      description: 'Cross-border freight execution connecting the US, Mexico, and Canada with customs-ready workflows.'
    },
    hero: {
      badge: 'Connected North America',
      title: 'Cross-border logistics across',
      titleHighlight: 'US, Mexico, and Canada',
      description: 'Move freight across borders with dependable customs coordination and end-to-end tracking visibility.',
      primaryCta: 'Request Cross-Border Quote',
      primaryCtaHref: '/quote/cross-border',
      secondaryCta: 'View Coverage',
      secondaryCtaHref: '/services',
      heroImage: '/images/svc-cb-hero.jpg',
      heroImageAlt: 'Freight crossing border checkpoint',
      variant: 'dark'
    },
    valueSection: {
      sectionTitle: 'Cross-border execution strengths',
      sectionSubtitle: 'Processes and partner network built for international freight reliability.',
      items: [
        { icon: 'gavel', title: 'Customs Expertise', description: 'Documentation and compliance support to reduce border delays.' },
        { icon: 'visibility', title: 'Real-Time Visibility', description: 'Milestone tracking across every stage of movement.' },
        { icon: 'verified_user', title: 'Qualified Carriers', description: 'Vetted partners with cross-border operating capability.' }
      ],
      bgColor: 'white'
    },
    feature: {
      sectionTitle: 'Strategic border operations',
      sectionDescription: 'Operational support for drayage, cross-dock, and controlled handoffs across border gateways.',
      features: [
        { icon: 'swap_horiz', title: 'Cross-border drayage', description: 'Efficient transfer operations at major border points.' },
        { icon: 'warehouse', title: 'Cross-dock support', description: 'Operational flexibility for mode and carrier transitions.' },
        { icon: 'satellite_alt', title: '24/7 tracking', description: 'Continuous oversight for active international freight.' },
        { icon: 'verified', title: 'Compliance controls', description: 'Governance workflows for cross-border requirements.' }
      ],
      image: '/images/svc-cb-ops.jpg',
      imageAlt: 'Cross-border operations control center',
      imagePosition: 'right'
    },
    faq: {
      items: [
        { q: 'What documents are typically required?', a: 'Requirements vary by commodity and direction of trade, but core customs and shipment documentation is always required.' },
        { q: 'How do you mitigate border delays?', a: 'We apply proactive documentation checks, operating partner coordination, and real-time exception response.' },
        { q: 'Do you support cross-dock border operations?', a: 'Yes. We support border-adjacent transfer workflows to improve continuity between carrier handoffs.' }
      ]
    },
    cta: {
      title: 'Need dependable cross-border execution?',
      description: 'Tell us your corridor and cargo profile to receive a tailored movement plan.',
      primaryCta: 'Get Cross-Border Quote',
      primaryCtaHref: '/quote/cross-border',
      secondaryCta: 'Talk to Border Specialist',
      secondaryCtaHref: '/contact'
    }
  },
  expedited: {
    slug: 'expedited',
    seo: {
      title: 'Expedited Freight | Traustar Logistics',
      description: 'Time-critical freight execution with immediate dispatch response and high-priority handling.'
    },
    hero: {
      badge: 'Urgent Freight Support',
      title: 'Time-critical logistics with',
      titleHighlight: 'priority execution',
      description: 'When every hour matters, Traustar deploys expedited workflows to protect critical delivery windows.',
      primaryCta: 'Request Urgent Quote',
      primaryCtaHref: '/quote',
      secondaryCta: 'View Capabilities',
      secondaryCtaHref: '/services',
      heroImage: '/images/svc-exp-hero.jpg',
      heroImageAlt: 'Expedited freight operation',
      variant: 'dark'
    },
    valueSection: {
      sectionTitle: 'Expedited capabilities',
      sectionSubtitle: 'Built for rapid response and high-priority freight movement.',
      items: [
        { icon: 'timer', title: 'Speed Commitment', description: 'Execution model focused on urgent transit windows.' },
        { icon: 'query_stats', title: '24/7 Monitoring', description: 'Frequent status updates and exception management.' },
        { icon: 'bolt', title: 'Immediate Dispatch', description: 'Fast load acceptance and carrier deployment support.' }
      ],
      bgColor: 'white'
    },
    feature: {
      sectionTitle: 'Priority shipment controls',
      sectionDescription: 'Operational guardrails for urgent freight, including direct route planning and active support coverage.',
      features: [
        { icon: 'local_shipping', title: 'Direct moves', description: 'Reduced handling and stop exposure for urgent loads.' },
        { icon: 'groups', title: 'Driver support', description: 'Coordination for sustained movement when needed.' },
        { icon: 'pan_tool_alt', title: 'White-glove handling', description: 'Special procedures for sensitive high-value freight.' },
        { icon: 'support_agent', title: 'Dedicated dispatch', description: 'Single point of contact during active movement.' }
      ],
      image: '/images/svc-exp-ops.jpg',
      imageAlt: 'Expedited operations team',
      imagePosition: 'left'
    },
    faq: {
      items: [
        { q: 'How quickly can expedited loads be arranged?', a: 'Response speed depends on lane and equipment availability, but expedited workflows prioritize immediate dispatch coordination.' },
        { q: 'How is shipment progress communicated?', a: 'We provide high-frequency updates and visibility events for urgent loads.' },
        { q: 'What regions are covered?', a: 'Expedited support is available across major North American freight markets and strategic cross-border routes.' }
      ]
    },
    cta: {
      title: 'Managing an urgent shipment?',
      description: 'Contact our team now and we will align a priority movement strategy immediately.',
      primaryCta: 'Talk to Expedited Team',
      primaryCtaHref: '/contact',
      secondaryCta: 'Call +1 (872) 351-9977',
      secondaryCtaHref: 'tel:+18723519977'
    }
  },
  'spot-contract': {
    slug: 'spot-contract',
    seo: {
      title: 'Spot and Contract Freight | Traustar Logistics',
      description: 'Balanced freight sourcing strategies combining spot flexibility and contract stability.'
    },
    hero: {
      badge: 'Freight Sourcing Strategy',
      title: 'Balance spot agility with',
      titleHighlight: 'contract stability',
      description: 'Use market data to build the right mix of contract lanes and spot coverage for your freight portfolio.',
      primaryCta: 'Start Strategy Session',
      primaryCtaHref: '/quote',
      secondaryCta: 'Talk to Expert',
      secondaryCtaHref: '/contact',
      heroImage: '/images/market-heatmap.jpg',
      heroImageAlt: 'Market rates and freight strategy analytics',
      variant: 'light'
    },
    valueSection: {
      sectionTitle: 'Strategy model benefits',
      sectionSubtitle: 'Use data-backed sourcing decisions to reduce volatility and improve lane performance.',
      items: [
        { icon: 'calendar_today', title: 'Contract Stability', description: 'Predictable rate structures for core recurring lanes.' },
        { icon: 'trending_up', title: 'Spot Flexibility', description: 'Fast access to dynamic capacity when demand spikes.' },
        { icon: 'monitoring', title: 'Benchmark Intelligence', description: 'Rate benchmarking to guide sourcing decisions.' }
      ],
      bgColor: 'white'
    },
    comparison: [
      {
        icon: 'handshake',
        title: 'Contract: long-term control',
        description: 'Ideal for planned, high-frequency lanes requiring stability and predictable budgeting.',
        checks: ['Rate stability', 'Capacity planning', 'Lower volatility']
      },
      {
        icon: 'flash_on',
        title: 'Spot: tactical flexibility',
        description: 'Ideal for urgent, seasonal, or overflow demand where rapid capacity sourcing is required.',
        checks: ['Fast sourcing', 'Surge coverage', 'Dynamic pricing opportunities']
      }
    ],
    dataDriven: {
      title: 'Data-driven sourcing advantage',
      subtitle: 'We continuously evaluate market data to optimize your spot-contract allocation by lane.',
      features: [
        { icon: 'precision_manufacturing', title: 'Forecasting', description: 'Rate trend projections for procurement planning.' },
        { icon: 'speed', title: 'Benchmarking', description: 'Real-time comparison of contract and spot economics.' },
        { icon: 'hub', title: 'Lane optimization', description: 'Sourcing strategy tuned to performance history.' }
      ]
    },
    cta: {
      title: 'Need a smarter sourcing mix?',
      description: 'Our team can design a spot-contract strategy tailored to your lane portfolio.',
      primaryCta: 'Book Strategy Session',
      primaryCtaHref: '/quote'
    }
  }
};

export const getServicePage = (slug: ServiceSlug) => servicePages[slug];

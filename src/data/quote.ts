export interface QuoteLandingData {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  shipmentTypes: {
    icon: string;
    label: string;
    href: string;
  }[];
  specialRequirements: string[];
  valueProps: {
    icon: string;
    title: string;
    description: string;
  }[];
  trust: {
    heading: string;
    certifications: string[];
    testimonial: string;
  };
  map: {
    image: string;
    alt: string;
    badge: string;
  };
}

export type QuoteFormField = {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'email' | 'tel' | 'select';
  placeholder?: string;
  options?: string[];
};

export interface QuoteServiceData {
  slug: 'ftl' | 'ltl' | 'cross-border';
  seo: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    highlights: {
      icon: string;
      label: string;
    }[];
  };
  form: {
    title: string;
    subtitle: string;
    submitLabel: string;
    legalNotice: string;
    fields: QuoteFormField[];
    sidePanel?: {
      title: string;
      points: string[];
      note: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    cards: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  highlight?: {
    title: string;
    description: string;
    bullets: string[];
    image: string;
    imageAlt: string;
    theme: 'primary' | 'slate';
  };
  stats?: {
    value: string;
    label: string;
  }[];
  certifications?: {
    icon: string;
    label: string;
  }[];
}

export const quoteLandingData: QuoteLandingData = {
  seo: {
    title: 'Request a Quote | Traustar Logistics',
    description:
      'Get data-backed freight pricing in minutes. Request your quote and optimize your supply chain with Traustar Logistics.'
  },
  hero: {
    title: 'Request a Freight Quote in Minutes',
    description:
      'Get accurate pricing based on live market data and optimize your shipping strategy with Traustar logistics experts.',
    image: '/images/quote-hero.jpg',
    imageAlt: 'Modern logistics hub with active trailer operations'
  },
  shipmentTypes: [
    { icon: 'local_shipping', label: 'FTL', href: '/quote/ftl' },
    { icon: 'inventory_2', label: 'LTL', href: '/quote/ltl' },
    { icon: 'public', label: 'Cross-Border', href: '/quote/cross-border' },
    { icon: 'train', label: 'Intermodal', href: '/services/intermodal' }
  ],
  specialRequirements: ['Reefer', 'Flatbed', 'Liftgate', 'Residential Delivery'],
  valueProps: [
    {
      icon: 'track_changes',
      title: '24/7 GPS Tracking',
      description: 'End-to-end shipment visibility with proactive status updates.'
    },
    {
      icon: 'verified_user',
      title: 'Verified Carrier Network',
      description: 'Every carrier is validated for safety, insurance, and compliance.'
    },
    {
      icon: 'rocket_launch',
      title: 'Fast Response Times',
      description: 'Most quote requests are answered in less than 15 minutes.'
    }
  ],
  trust: {
    heading: 'Certifications and Compliance',
    certifications: ['FMCSA Licensed', 'C-TPAT Ready'],
    testimonial:
      'Every account includes a dedicated logistics manager available around the clock.'
  },
  map: {
    image: '/images/quote-map.jpg',
    alt: 'North America freight corridor map',
    badge: 'Connecting USA, Mexico, and Canada'
  }
};

export const quoteServicesData: Record<'ftl' | 'ltl' | 'cross-border', QuoteServiceData> = {
  ftl: {
    slug: 'ftl',
    seo: {
      title: 'FTL Quote | Traustar Logistics',
      description:
        'Request a dedicated full truckload quote with guaranteed capacity across the United States, Mexico, and Canada.'
    },
    hero: {
      badge: 'North American FTL Specialists',
      title: 'Reliable FTL Capacity Across North America',
      description:
        'Ship with dedicated trailers, secure transit, and real-time visibility powered by Traustar dispatch and carrier operations.',
      image: '/images/quote-ftl-hero.jpg',
      imageAlt: 'Dedicated full truckload trailer ready for dispatch',
      highlights: [
        { icon: 'speed', label: 'Quotes in minutes' },
        { icon: 'monitoring', label: '24/7 monitoring' },
        { icon: 'verified', label: 'Verified carriers' }
      ]
    },
    form: {
      title: 'Get an Instant FTL Quote',
      subtitle: 'Share your route details and equipment requirements to receive dedicated capacity options.',
      submitLabel: 'Generate My FTL Quote',
      legalNotice: 'By submitting this form, you agree to our',
      fields: [
        { name: 'origin', label: 'Origin ZIP / City', type: 'text', placeholder: 'e.g. Chicago, IL' },
        { name: 'destination', label: 'Destination ZIP / City', type: 'text', placeholder: 'e.g. Laredo, TX' },
        {
          name: 'equipment',
          label: 'Equipment Type',
          type: 'select',
          options: ['Dry Van', 'Reefer', 'Flatbed', 'Step Deck']
        },
        { name: 'weight', label: 'Cargo Weight (lbs)', type: 'number', placeholder: '45000' },
        { name: 'pickup_date', label: 'Pickup Date', type: 'date' },
        { name: 'contact_email', label: 'Business Email', type: 'email', placeholder: 'you@company.com' }
      ]
    },
    features: {
      title: 'Why Shippers Choose Traustar FTL',
      subtitle:
        'Dedicated execution, real-time tracking, and consistent service levels for high-volume freight.',
      cards: [
        {
          icon: 'local_shipping',
          title: 'Guaranteed Capacity',
          description: 'Access our carrier network even in tight markets and peak demand cycles.'
        },
        {
          icon: 'verified_user',
          title: 'Dedicated Shipments',
          description: 'Your freight stays on one trailer to reduce handling and delivery risk.'
        },
        {
          icon: 'track_changes',
          title: 'Live Visibility',
          description: 'Track status, route milestones, and ETA updates from pickup to delivery.'
        }
      ]
    },
    highlight: {
      title: 'Cross-Border FTL, Managed End to End',
      description:
        'Traustar coordinates customs documentation, border scheduling, and handoffs to keep your freight moving.',
      bullets: ['USA: 48-state coverage', 'Mexico: border and inland execution', 'Canada: coast-to-coast lane support'],
      image: '/images/quote-ftl-map.jpg',
      imageAlt: 'North America map highlighting full truckload lanes',
      theme: 'primary'
    },
    stats: [
      { value: '99.8%', label: 'On-time delivery' },
      { value: '50k+', label: 'Carrier network' },
      { value: '24/7', label: 'Operational support' },
      { value: '15 min', label: 'Average quote response' }
    ]
  },
  ltl: {
    slug: 'ltl',
    seo: {
      title: 'LTL Quote | Traustar Logistics',
      description:
        'Request an optimized LTL quote with strategic consolidation, predictable transit times, and North American coverage.'
    },
    hero: {
      badge: 'FMCSA and DOT Compliant',
      title: 'Precision LTL Shipping Solutions',
      description:
        'Reduce freight spend with strategic consolidation and dependable LTL execution across major North American lanes.',
      image: '/images/quote-ltl-hero.jpg',
      imageAlt: 'LTL palletized freight being prepared at a distribution dock',
      highlights: [
        { icon: 'savings', label: 'Pay for used space only' },
        { icon: 'inventory_2', label: 'Consolidation expertise' },
        { icon: 'public', label: 'North America coverage' }
      ]
    },
    form: {
      title: 'Get Your Custom LTL Quote',
      subtitle: 'Provide shipment dimensions and class details for an instant consolidation-ready estimate.',
      submitLabel: 'Generate My LTL Quote',
      legalNotice: 'By submitting this form, you agree to our',
      fields: [
        { name: 'pallet_count', label: 'Pallet Count', type: 'number', placeholder: 'e.g. 3' },
        { name: 'weight', label: 'Total Weight (lbs)', type: 'number', placeholder: 'e.g. 1500' },
        {
          name: 'dimensions',
          label: 'Dimensions (L x W x H inches)',
          type: 'text',
          placeholder: '48 x 40 x 48'
        },
        {
          name: 'freight_class',
          label: 'Freight Class',
          type: 'select',
          options: ['Class 50', 'Class 70', 'Class 85', 'Class 100', 'Class 125', 'Class 200']
        },
        { name: 'origin', label: 'Origin ZIP / City', type: 'text', placeholder: 'e.g. Dallas, TX' },
        {
          name: 'destination',
          label: 'Destination ZIP / City',
          type: 'text',
          placeholder: 'e.g. Atlanta, GA'
        }
      ]
    },
    features: {
      title: 'Why Traustar for LTL?',
      subtitle:
        'We combine consolidation strategy, lane intelligence, and handling standards to protect your freight budget.',
      cards: [
        {
          icon: 'payments',
          title: 'Flexible Pricing',
          description: 'Dynamic pricing aligned with your volume and route requirements.'
        },
        {
          icon: 'handyman',
          title: 'Operational Precision',
          description: 'Careful handling and routing decisions to lower rehandling and claims exposure.'
        },
        {
          icon: 'hub',
          title: 'Regional and National Coverage',
          description: 'A single logistics team coordinating multiple carrier partners for you.'
        }
      ]
    },
    highlight: {
      title: 'The Traustar Consolidation Edge',
      description:
        'Our LTL model minimizes unnecessary hub transfers and improves predictability across multi-stop networks.',
      bullets: [
        'Fewer freight class reclassification issues',
        'Direct-to-region line-haul planning',
        'Consistent transit performance across major U.S. lanes'
      ],
      image: '/images/quote-ltl-map.jpg',
      imageAlt: 'Consolidated LTL routes across major U.S. regions',
      theme: 'primary'
    },
    certifications: [
      { icon: 'verified', label: 'FMCSA Registered' },
      { icon: 'security', label: 'DOT Compliant' }
    ]
  },
  'cross-border': {
    slug: 'cross-border',
    seo: {
      title: 'Cross-Border Quote | Traustar Logistics',
      description:
        'Request a cross-border freight quote with customs expertise, bilingual support, and secure U.S.-Mexico-Canada execution.'
    },
    hero: {
      badge: 'C-TPAT and FAST Certified',
      title: 'Seamless Cross-Border Logistics Across North America',
      description:
        'Bridge U.S., Mexico, and Canada operations with a team specialized in customs, compliance, and transborder execution.',
      image: '/images/quote-cb-hero.jpg',
      imageAlt: 'Cross-border trailer operations near an international checkpoint',
      highlights: [
        { icon: 'gavel', label: 'Customs-ready workflows' },
        { icon: 'translate', label: 'Bilingual coordination' },
        { icon: 'location_on', label: 'Strategic border hubs' }
      ]
    },
    form: {
      title: 'Request a Cross-Border Quote',
      subtitle: 'Share crossing details and commodity information to receive a specialized transborder quote.',
      submitLabel: 'Get My Cross-Border Quote',
      legalNotice: 'By submitting this form, you agree to our',
      fields: [
        {
          name: 'port',
          label: 'Port of Entry / Crossing',
          type: 'select',
          options: ['Laredo (TX/MX)', 'El Paso (TX/MX)', 'Otay Mesa (CA/MX)', 'Detroit (MI/CA)', 'Buffalo (NY/CA)']
        },
        {
          name: 'commodity',
          label: 'Commodity Type',
          type: 'text',
          placeholder: 'e.g. Automotive parts'
        },
        {
          name: 'broker',
          label: 'Customs Broker Info (Optional)',
          type: 'text',
          placeholder: 'Broker name or reference ID'
        },
        { name: 'origin', label: 'Origin City', type: 'text', placeholder: 'City, State' },
        { name: 'destination', label: 'Destination City', type: 'text', placeholder: 'City, State' },
        { name: 'email', label: 'Business Email', type: 'email', placeholder: 'you@company.com' }
      ],
      sidePanel: {
        title: 'Cross-Border Coverage Includes',
        points: ['C-TPAT security-aligned processes', 'Door-to-door visibility', '24/7 transborder operations support'],
        note: 'Primary operations hub: Laredo World Trade Bridge'
      }
    },
    features: {
      title: 'The Traustar Cross-Border Advantage',
      subtitle: 'Operate with confidence through coordinated customs, operations, and communication workflows.',
      cards: [
        {
          icon: 'gavel',
          title: 'Seamless Clearance',
          description: 'Documentation and compliance support designed to reduce border delays.'
        },
        {
          icon: 'translate',
          title: 'Bicultural Support',
          description: 'Bilingual logistics coordination across U.S., Mexico, and Canada stakeholders.'
        },
        {
          icon: 'hub',
          title: 'Strategic Border Presence',
          description: 'Operational depth in key border lanes to accelerate transit handoffs.'
        }
      ]
    },
    certifications: [
      { icon: 'verified_user', label: 'C-TPAT' },
      { icon: 'speed', label: 'FAST' },
      { icon: 'language', label: 'WCO' },
      { icon: 'shield', label: 'ACE/ACI' }
    ]
  }
};

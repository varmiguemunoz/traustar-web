export interface GlossaryTerm {
  name: string;
  category: string;
  description: string;
}

export const glossaryPageSeo = {
  title: 'Logistics Glossary | Traustar Logistics',
  description:
    'Explore key logistics terms, freight acronyms, and supply chain definitions used in modern transportation operations.'
};

export const glossaryHero = {
  title: 'Logistics Terms Glossary',
  description:
    'A practical reference to understand freight terminology, shipping acronyms, and supply chain concepts.',
  searchPlaceholder: 'Search terms (FTL, customs, drayage...)'
};

export const glossaryAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const glossaryTerms: GlossaryTerm[] = [
  {
    name: 'Bill of Lading (B/L)',
    category: 'Documentation',
    description:
      'A legal shipping document issued by a carrier that describes freight type, quantity, and destination and serves as shipment receipt.'
  },
  {
    name: 'Customs Broker',
    category: 'Compliance',
    description:
      'A licensed professional or company authorized to process customs procedures and support import/export compliance.'
  },
  {
    name: 'Drayage',
    category: 'Transportation',
    description:
      'Short-haul movement of containers or freight between ports, rail ramps, distribution centers, and nearby warehouses.'
  },
  {
    name: 'FTL (Full Truckload)',
    category: 'Mode',
    description:
      'A shipping mode where one shipment uses an entire trailer or is moved as a dedicated full-capacity load.'
  },
  {
    name: 'LTL (Less Than Truckload)',
    category: 'Mode',
    description:
      'A shipping service for partial loads that share trailer space with other compatible shipments.'
  },
  {
    name: 'Incoterms',
    category: 'International Trade',
    description:
      'International commercial terms defined by the ICC that establish buyer and seller responsibilities in global trade.'
  }
];

export const glossaryCta = {
  title: 'Need a Term Added?',
  description: 'Our team can help clarify freight concepts related to your lanes, commodities, and shipping workflows.',
  label: 'Contact Support',
  href: '/contact'
};

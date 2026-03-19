export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  icon: string;
  title: string;
  items: FaqItem[];
}

export const faqPageSeo = {
  title: 'Frequently Asked Questions | Traustar Logistics',
  description:
    'Find quick answers about Traustar freight services, pricing, technology, compliance, and shipment operations.'
};

export const faqHero = {
  title: 'Frequently Asked Questions',
  description:
    'Everything you need to know about our logistics solutions, freight operations, and support workflows.',
  searchPlaceholder: 'Search by keyword (tracking, rates, insurance...)'
};

export const faqCategories: FaqCategory[] = [
  {
    icon: 'inventory_2',
    title: 'Services',
    items: [
      {
        question: 'What transportation modes do you offer?',
        answer:
          'We offer full truckload (FTL), less-than-truckload (LTL), cross-border, intermodal, drayage, expedited, and specialized freight services.'
      },
      {
        question: 'Do you handle international shipments?',
        answer:
          'Yes. We coordinate cross-border freight across the United States, Mexico, and Canada, including support for customs documentation.'
      }
    ]
  },
  {
    icon: 'payments',
    title: 'Pricing and Quotes',
    items: [
      {
        question: 'How are freight rates calculated?',
        answer:
          'Rates are based on lane distance, commodity characteristics, equipment type, timing, market capacity, and service requirements.'
      },
      {
        question: 'Is cargo insurance included?',
        answer:
          'We can support additional cargo insurance options depending on commodity value and shipment risk profile.'
      }
    ]
  },
  {
    icon: 'monitoring',
    title: 'Technology and Tracking',
    items: [
      {
        question: 'How can I track my shipment in real time?',
        answer:
          'Our operations team provides proactive status updates, and qualified loads include GPS visibility and ETA communications.'
      },
      {
        question: 'Do you integrate with ERP, TMS, or e-commerce systems?',
        answer:
          'Yes. We support EDI and API integrations with enterprise logistics systems and shipping workflows when needed.'
      }
    ]
  },
  {
    icon: 'conveyor_belt',
    title: 'Shipment Operations',
    items: [
      {
        question: 'What is required before pickup?',
        answer:
          'Typical requirements include bill of lading details, commercial documents, and properly prepared freight dimensions and packaging.'
      },
      {
        question: 'What happens if there is a delivery delay?',
        answer:
          'Our team communicates delays proactively, shares revised ETAs, and activates contingency planning to reduce operational impact.'
      }
    ]
  }
];

export const faqSupportCta = {
  title: 'Still Need Help?',
  description: 'Our logistics support team is available 24/7 to assist with technical or operational questions.',
  primaryLabel: 'Contact Support',
  primaryHref: '/contact',
  secondaryLabel: 'Call Now',
  secondaryHref: 'tel:+18723519977'
};

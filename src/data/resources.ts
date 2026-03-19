export interface ResourceGuide {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
}

export const guidesPageSeo = {
  title: 'Logistics Resource Center | Traustar Logistics',
  description:
    'Explore logistics guides, checklists, and educational resources for transportation planning and freight operations.'
};

export const guidesHero = {
  title: 'Logistics Resource Center',
  description:
    'Master modern freight operations through practical guides, checklists, and market-focused educational content.'
};

export const featuredGuides: ResourceGuide[] = [
  {
    title: 'The Ultimate Guide to FTL vs LTL',
    description:
      'Understand the differences between full truckload and less-than-truckload shipping to select the right strategy.',
    image: '/images/guides-ftl.jpg',
    imageAlt: 'Freight trucks representing FTL and LTL service comparison',
    icon: 'picture_as_pdf'
  },
  {
    title: 'Cross-Border Logistics Playbook (USA, Mexico, Canada)',
    description:
      'Learn planning fundamentals for customs-ready cross-border transportation across North American trade lanes.',
    image: '/images/guides-crossborder.jpg',
    imageAlt: 'North America map for cross-border freight planning',
    icon: 'public'
  },
  {
    title: 'Carrier Selection Checklist: 10 Critical Factors',
    description:
      'Use this checklist to evaluate carrier safety, reliability, service performance, and compliance readiness.',
    image: '/images/guides-checklist.jpg',
    imageAlt: 'Checklist and clipboard for carrier qualification criteria',
    icon: 'fact_check'
  },
  {
    title: 'Freight Class and NMFC Fundamentals',
    description:
      'Review classification basics to reduce billing surprises and improve freight quoting accuracy.',
    image: '/images/guides-freight.jpg',
    imageAlt: 'Warehouse freight labeled by classification groups',
    icon: 'inventory_2'
  }
];

export const guidesNewsletter = {
  title: 'Stay Informed',
  description: 'Subscribe for logistics insights, market updates, and practical shipping strategies.',
  placeholder: 'Enter your business email',
  submitLabel: 'Subscribe'
};

export const marketReportsSeo = {
  title: 'Market Rate Reports | Traustar Logistics',
  description:
    'Review lane-level freight indicators, spot trends, and regional capacity signals to support smarter transportation decisions.'
};

export const marketReportsHero = {
  title: 'Market Rate Reports',
  description: 'Track freight market movement with lane intelligence, capacity trends, and weekly operational context.'
};

export const spotRateCards = [
  {
    icon: 'grid_view',
    label: 'Dry Van',
    trend: 'Stable',
    price: '$2.14',
    change: '+1.2%',
    positive: true,
    accentClass: 'bg-primary/10 text-primary'
  },
  {
    icon: 'ac_unit',
    label: 'Reefer',
    trend: 'Rising',
    price: '$2.58',
    change: '+3.4%',
    positive: true,
    accentClass: 'bg-blue-100 text-blue-600'
  },
  {
    icon: 'horizontal_rule',
    label: 'Flatbed',
    trend: 'Falling',
    price: '$2.82',
    change: '-0.8%',
    positive: false,
    accentClass: 'bg-slate-100 text-slate-600'
  }
];

export const regionalCapacity = [
  { name: 'Midwest', status: 'Balanced', percentage: 55, statusClass: 'text-primary', barClass: 'bg-primary' },
  { name: 'Southeast', status: 'Tight', percentage: 85, statusClass: 'text-red-500', barClass: 'bg-red-500' },
  { name: 'Northeast', status: 'Loose', percentage: 30, statusClass: 'text-emerald-500', barClass: 'bg-emerald-500' },
  { name: 'West Coast', status: 'Balanced', percentage: 50, statusClass: 'text-primary', barClass: 'bg-primary' }
];

export const marketSummary = [
  'Freight activity remained resilient this week, with stable demand in the Midwest and moderate spot-rate pressure in key retail corridors.',
  'Fuel volatility eased, offering temporary margin relief, while reefer capacity stayed constrained in produce-driven lanes.',
  'Current signals suggest mostly stable pricing over the next 7 to 10 days, with selective tightening expected in Northeast lanes.'
];

export const marketReportsCta = {
  title: 'Need Lane-Specific Pricing?',
  description: 'Get a tailored quote aligned to your volume, commodity profile, and operational requirements.',
  label: 'Request a Custom Quote',
  href: '/quote'
};

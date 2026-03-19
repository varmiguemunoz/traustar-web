export const contactPageSeo = {
  title: 'Contact Traustar Logistics',
  description:
    'Talk with our team about freight strategy, lane optimization, and cross-border logistics execution.'
};

export const contactHero = {
  badge: 'Dedicated support',
  title: 'Get in touch',
  description:
    'We are ready to support your freight goals across the United States, Mexico, and Canada.',
  image: '/images/contacto-hero.jpg',
  imageAlt: 'Traustar logistics facility'
};

export const contactCards = [
  {
    icon: 'mail',
    title: 'Email',
    subtitle: 'General and sales inquiries',
    value: 'info@traustar.com',
    href: 'mailto:info@traustar.com'
  },
  {
    icon: 'phone_in_talk',
    title: 'Phone',
    subtitle: 'Direct line for immediate support',
    value: '+1 872 351 9977',
    href: 'tel:+18723519977'
  },
  {
    icon: 'location_on',
    title: 'Address',
    subtitle: 'Chicago headquarters',
    value: '2327 N Harding Ave., Chicago, IL 60647',
    href: ''
  }
] as const;

export const contactAvailability = {
  title: '24/7 Critical Coverage',
  description:
    'Our dispatch and operations teams are available around the clock for urgent shipment support.'
};

export const contactMetaCards = [
  {
    title: 'Office Hours',
    lines: ['8:00 am - 5:00 pm', 'Monday to Saturday'],
    accent: 'primary'
  },
  {
    title: 'Service Region',
    lines: ['United States, Mexico, Canada', 'Cross-border specialization'],
    accent: 'slate'
  }
] as const;

export const contactMap = {
  title: 'Strategic presence',
  description:
    'Our Chicago location provides strong operational reach into key freight corridors across North America.',
  image: '/images/contacto-map.jpg',
  imageAlt: 'Map showing North American logistics corridors'
};

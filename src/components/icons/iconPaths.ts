interface IconGlyph {
  viewBox: string;
  body: string;
}

export const ICON_GLYPHS = {
  fallback: {
    viewBox: '0 0 24 24',
    body: `<circle cx="12" cy="12" r="9"></circle><path d="M9.6 9.3a2.6 2.6 0 0 1 4.8 1.4c0 1.9-2.4 2.2-2.4 4"></path><circle cx="12" cy="17.2" r="0.8" fill="currentColor" stroke="none"></circle>`
  },
  truck: {
    viewBox: '0 0 24 24',
    body: `<rect x="2.5" y="7" width="11.5" height="8" rx="1.5"></rect><path d="M14 9h4.5l2 2.2V15H14"></path><circle cx="8" cy="17" r="2"></circle><circle cx="18" cy="17" r="2"></circle>`
  },
  box: {
    viewBox: '0 0 24 24',
    body: `<path d="M12 3 3 8l9 5 9-5-9-5Z"></path><path d="M3 8v8l9 5 9-5V8"></path><path d="M12 13v8"></path>`
  },
  globe: {
    viewBox: '0 0 24 24',
    body: `<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3c2.6 2.4 3.8 5.3 3.8 9S14.6 18.6 12 21"></path><path d="M12 3c-2.6 2.4-3.8 5.3-3.8 9S9.4 18.6 12 21"></path>`
  },
  train: {
    viewBox: '0 0 24 24',
    body: `<rect x="5" y="3" width="14" height="14" rx="2"></rect><path d="M8 7h8"></path><path d="M8 10h3"></path><path d="M13 10h3"></path><circle cx="9" cy="14" r="1.5"></circle><circle cx="15" cy="14" r="1.5"></circle><path d="m8 17-2 4"></path><path d="m16 17 2 4"></path>`
  },
  target: {
    viewBox: '0 0 24 24',
    body: `<circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3"></path><path d="M12 19v3"></path><path d="M2 12h3"></path><path d="M19 12h3"></path>`
  },
  shield: {
    viewBox: '0 0 24 24',
    body: `<path d="M12 3 5 6v6c0 4.3 2.7 7.8 7 9 4.3-1.2 7-4.7 7-9V6l-7-3Z"></path>`
  },
  rocket: {
    viewBox: '0 0 24 24',
    body: `<path d="M12.5 4c4.4.2 7.3 3 7.5 7.4L14 17.4l-7.4 1L12.5 4Z"></path><path d="M9 15 4.5 19.5"></path><path d="M8.8 9.6 4 4.8"></path><circle cx="14.6" cy="9.4" r="1.4"></circle>`
  },
  snow: {
    viewBox: '0 0 24 24',
    body: `<path d="M12 3v18"></path><path d="m6 6 12 12"></path><path d="m18 6-12 12"></path><path d="M3 12h18"></path>`
  },
  plus: {
    viewBox: '0 0 24 24',
    body: `<path d="M12 5v14"></path><path d="M5 12h14"></path>`
  },
  minus: {
    viewBox: '0 0 24 24',
    body: `<path d="M5 12h14"></path>`
  },
  arrow: {
    viewBox: '0 0 24 24',
    body: `<path d="M4 12h14"></path><path d="m13 7 5 5-5 5"></path>`
  },
  chevron_down: {
    viewBox: '0 0 24 24',
    body: `<path d="m6 9 6 6 6-6"></path>`
  },
  chevron_right: {
    viewBox: '0 0 24 24',
    body: `<path d="m9 6 6 6-6 6"></path>`
  },
  menu: {
    viewBox: '0 0 24 24',
    body: `<path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path>`
  },
  close: {
    viewBox: '0 0 24 24',
    body: `<path d="m6 6 12 12"></path><path d="m18 6-12 12"></path>`
  },
  search: {
    viewBox: '0 0 24 24',
    body: `<circle cx="11" cy="11" r="6"></circle><path d="m16 16 5 5"></path>`
  },
  pin: {
    viewBox: '0 0 24 24',
    body: `<path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"></path><circle cx="12" cy="11" r="2"></circle>`
  },
  flag: {
    viewBox: '0 0 24 24',
    body: `<path d="M5 4v16"></path><path d="M5 5h10l-2 3 2 3H5"></path>`
  },
  mail: {
    viewBox: '0 0 24 24',
    body: `<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path>`
  },
  phone: {
    viewBox: '0 0 24 24',
    body: `<path d="M6.9 3.5c-.8-.8-2-.8-2.8 0L2.7 4.9c-.7.7-.9 1.8-.4 2.8 2.2 4.3 5.8 7.9 10.1 10.1 1 .5 2.1.3 2.8-.4l1.4-1.4c.8-.8.8-2 0-2.8l-2-2c-.7-.7-1.8-.8-2.6-.2l-1.3.9a13.8 13.8 0 0 1-4.7-4.7l.9-1.3c.5-.8.4-1.9-.2-2.6l-2-2Z"></path>`
  },
  chat: {
    viewBox: '0 0 24 24',
    body: `<path d="M4 5h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"></path>`
  },
  calendar: {
    viewBox: '0 0 24 24',
    body: `<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M8 3v4"></path><path d="M16 3v4"></path><path d="M3 10h18"></path>`
  },
  download: {
    viewBox: '0 0 24 24',
    body: `<path d="M12 4v10"></path><path d="m8 10 4 4 4-4"></path><path d="M5 19h14"></path>`
  },
  share: {
    viewBox: '0 0 24 24',
    body: `<circle cx="18" cy="5" r="2"></circle><circle cx="6" cy="12" r="2"></circle><circle cx="18" cy="19" r="2"></circle><path d="m8 12 8-6"></path><path d="m8 12 8 7"></path>`
  },
  check_circle: {
    viewBox: '0 0 24 24',
    body: `<circle cx="12" cy="12" r="9"></circle><path d="m8.5 12.5 2.4 2.4 4.7-4.7"></path>`
  },
  check: {
    viewBox: '0 0 24 24',
    body: `<path d="m5 12.5 4 4 10-10"></path>`
  },
  star: {
    viewBox: '0 0 24 24',
    body: `<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.2l-5.5 2.9 1-6.2L3 9.6l6.2-.9L12 3Z"></path>`
  },
  bolt: {
    viewBox: '0 0 24 24',
    body: `<path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z"></path>`
  },
  gavel: {
    viewBox: '0 0 24 24',
    body: `<path d="m14 4 6 6"></path><path d="m12 6 6 6"></path><path d="m7 11 6 6"></path><path d="M4 20h10"></path>`
  },
  chart: {
    viewBox: '0 0 24 24',
    body: `<path d="M4 19h16"></path><path d="m6 15 4-4 3 3 5-6"></path>`
  },
  chart_up: {
    viewBox: '0 0 24 24',
    body: `<path d="M4 19h16"></path><path d="m6 15 4-4 3 3 5-6"></path><path d="M18 9V5h-4"></path>`
  },
  chart_down: {
    viewBox: '0 0 24 24',
    body: `<path d="M4 19h16"></path><path d="m6 9 4 4 3-3 5 6"></path><path d="M18 15v4h-4"></path>`
  },
  settings: {
    viewBox: '0 0 24 24',
    body: `<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1.8 1.8 0 0 1-2.6 2.6l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a1.8 1.8 0 0 1-3.6 0v-.1a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a1.8 1.8 0 0 1-2.6-2.6l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a1.8 1.8 0 0 1 0-3.6h.1a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a1.8 1.8 0 0 1 2.6-2.6l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a1.8 1.8 0 0 1 3.6 0v.1a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a1.8 1.8 0 0 1 2.6 2.6l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a1.8 1.8 0 0 1 0 3.6h-.1a1 1 0 0 0-.9.6Z"></path>`
  },
  user: {
    viewBox: '0 0 24 24',
    body: `<circle cx="12" cy="8" r="4"></circle><path d="M4 20c1.8-3.6 4.5-5 8-5s6.2 1.4 8 5"></path>`
  },
  users: {
    viewBox: '0 0 24 24',
    body: `<circle cx="9" cy="8" r="3"></circle><circle cx="16" cy="9" r="2.5"></circle><path d="M3.5 20c1.3-3 3.4-4.2 5.5-4.2S13 17 14.3 20"></path><path d="M13.5 20c.7-1.9 2-3 4.2-3 1.6 0 2.8.6 3.8 3"></path>`
  },
  support: {
    viewBox: '0 0 24 24',
    body: `<path d="M4 12a8 8 0 0 1 16 0"></path><rect x="3" y="12" width="4" height="6" rx="2"></rect><rect x="17" y="12" width="4" height="6" rx="2"></rect><path d="M7 18h4a2 2 0 0 0 2 2h2"></path>`
  },
  factory: {
    viewBox: '0 0 24 24',
    body: `<path d="M3 21V8l7 4V8l7 4V5l4 2v14H3Z"></path><path d="M7 21v-4h3v4"></path>`
  },
  grid: {
    viewBox: '0 0 24 24',
    body: `<rect x="4" y="4" width="7" height="7" rx="1"></rect><rect x="13" y="4" width="7" height="7" rx="1"></rect><rect x="4" y="13" width="7" height="7" rx="1"></rect><rect x="13" y="13" width="7" height="7" rx="1"></rect>`
  },
  filter: {
    viewBox: '0 0 24 24',
    body: `<path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z"></path>`
  },
  map: {
    viewBox: '0 0 24 24',
    body: `<path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20V6.5Z"></path><path d="M9 4v13.5"></path><path d="M15 6.5V20"></path>`
  },
  send: {
    viewBox: '0 0 24 24',
    body: `<path d="M3 11.5 21 3l-6.5 18-2.8-6.7L3 11.5Z"></path><path d="m21 3-9.2 11.3"></path>`
  },
  hand: {
    viewBox: '0 0 24 24',
    body: `<path d="M7 12V7a1.5 1.5 0 0 1 3 0v4"></path><path d="M10 11V6a1.5 1.5 0 0 1 3 0v5"></path><path d="M13 11V7a1.5 1.5 0 0 1 3 0v6"></path><path d="M16 12v-2a1.5 1.5 0 0 1 3 0v4.5c0 3.9-2.5 6.5-6.2 6.5H11c-3.2 0-5.5-2.2-5.5-5.4v-2.1A2.5 2.5 0 0 1 8 11Z"></path>`
  },
  tool: {
    viewBox: '0 0 24 24',
    body: `<path d="M14 5a4 4 0 0 0 5 5l-8.5 8.5a2 2 0 1 1-2.8-2.8L16.2 7A4 4 0 0 0 14 5Z"></path>`
  },
  briefcase: {
    viewBox: '0 0 24 24',
    body: `<rect x="3" y="7" width="18" height="12" rx="2"></rect><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path><path d="M3 12h18"></path>`
  },
  doc: {
    viewBox: '0 0 24 24',
    body: `<path d="M6 3h8l4 4v14H6V3Z"></path><path d="M14 3v5h5"></path><path d="M9 12h6"></path><path d="M9 16h6"></path>`
  },
  info: {
    viewBox: '0 0 24 24',
    body: `<circle cx="12" cy="12" r="9"></circle><path d="M12 10v6"></path><circle cx="12" cy="7" r="1" fill="currentColor" stroke="none"></circle>`
  },
  bulb: {
    viewBox: '0 0 24 24',
    body: `<path d="M9 17h6"></path><path d="M10 20h4"></path><path d="M8 14a6 6 0 1 1 8 0c-.9.8-1.4 1.8-1.6 3h-4.8c-.2-1.2-.7-2.2-1.6-3Z"></path>`
  },
  eye: {
    viewBox: '0 0 24 24',
    body: `<path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z"></path><circle cx="12" cy="12" r="2.5"></circle>`
  },
  warehouse: {
    viewBox: '0 0 24 24',
    body: `<path d="M3 10 12 4l9 6v11H3V10Z"></path><rect x="9" y="13" width="6" height="8"></rect>`
  },
  timer: {
    viewBox: '0 0 24 24',
    body: `<circle cx="12" cy="13" r="8"></circle><path d="M9 2h6"></path><path d="M12 13V9"></path><path d="m12 13 3 2"></path>`
  },
  thermo: {
    viewBox: '0 0 24 24',
    body: `<path d="M10 14.5V6a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z"></path><path d="M12 11v6"></path>`
  },
  coin: {
    viewBox: '0 0 24 24',
    body: `<ellipse cx="12" cy="7" rx="6.5" ry="3.5"></ellipse><path d="M5.5 7v6c0 1.9 2.9 3.5 6.5 3.5s6.5-1.6 6.5-3.5V7"></path><path d="M10.2 10.4c.4-.8 1.2-1.2 2-1.2 1 0 1.8.5 1.8 1.3 0 2-3.8 1.2-3.8 3"></path><circle cx="12.2" cy="15.4" r="0.8" fill="currentColor" stroke="none"></circle>`
  },
  bell: {
    viewBox: '0 0 24 24',
    body: `<path d="M6 16h12l-1.4-1.8V11a4.6 4.6 0 1 0-9.2 0v3.2L6 16Z"></path><path d="M10 18a2 2 0 0 0 4 0"></path>`
  },
  award: {
    viewBox: '0 0 24 24',
    body: `<circle cx="12" cy="8" r="4"></circle><path d="m9 12-2 9 5-3 5 3-2-9"></path>`
  },
  leaf: {
    viewBox: '0 0 24 24',
    body: `<path d="M20 4c-7 .4-12 4.8-12 10.5A5.5 5.5 0 0 0 13.5 20C19.2 20 23.6 15 24 8"></path><path d="M6 18c2-3 5.5-6 10-8"></path>`
  },
  link: {
    viewBox: '0 0 24 24',
    body: `<path d="M10 14 8 16a3.5 3.5 0 1 1-5-5l3-3a3.5 3.5 0 0 1 5 0"></path><path d="M14 10 16 8a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0"></path><path d="m8 12 8 0"></path>`
  },
  paragraph: {
    viewBox: '0 0 24 24',
    body: `<path d="M6 5h10a4 4 0 0 1 0 8h-4v6"></path><path d="M12 5v14"></path><path d="M16 5v14"></path>`
  }
} as const;

export type CanonicalIconName = keyof typeof ICON_GLYPHS;

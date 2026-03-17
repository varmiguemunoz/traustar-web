import homepageTranslations from '@/i18n/homepage.json';
import launchWebsiteTranslations from '@/i18n/launch-your-website.json';
import digitalAgencyTranslations from '@/i18n/start-your-digital-agency.json';

type Locale = 'en' | 'es';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'es'];

const translations = {
  homepage: homepageTranslations,
  'launch-your-website': launchWebsiteTranslations,
  'start-your-digital-agency': digitalAgencyTranslations,
} as const;

export type PageKey = keyof typeof translations;

export function getTranslations(page: PageKey, locale: Locale = defaultLocale) {
  const pageTranslations = translations[page];
  return pageTranslations[locale] || pageTranslations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  const pathLocale = pathname.split('/')[1] as Locale;

  if (locales.includes(pathLocale)) {
    return pathLocale;
  }

  return defaultLocale;
}

export function getAlternateUrls(pathname: string) {
  const cleanPath = pathname.replace(/^\/(en|es)/, '');

  return {
    en: cleanPath || '/',
    es: `/es${cleanPath || '/'}`,
  };
}

import { defaultLocale, type Locale, locales, type Translations, ui } from './ui';

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Typed access to a locale's full copy object.
 *
 * Every page pulls its text from here, so English and Russian stay in lockstep:
 * `Translations` is a compile-time contract, and a missing or renamed key is a
 * type error rather than a page that silently ships the wrong language.
 */
export function getTranslations(lang: Locale): Translations {
  return ui[lang];
}

/** Fills `{placeholder}` tokens in a translation string. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/** Rewrites a locale-free path onto the given locale (`/cv` -> `/ru/cv`). */
export function localizePath(path: string, lang: Locale): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pathWithoutLocale = stripLocaleFromPath(normalizedPath);

  if (lang === defaultLocale) {
    return pathWithoutLocale;
  }

  return pathWithoutLocale === '/' ? `/${lang}` : `/${lang}${pathWithoutLocale}`;
}

export function stripLocaleFromPath(path: string): string {
  const normalizedPath = path.replace(/\/$/, '') || '/';

  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (normalizedPath === `/${locale}`) return '/';
    if (normalizedPath.startsWith(`/${locale}/`)) {
      return normalizedPath.slice(locale.length + 1) || '/';
    }
  }

  return normalizedPath;
}

export function getAlternateLocale(lang: Locale): Locale {
  return lang === 'en' ? 'ru' : 'en';
}

export function getAlternateLocaleUrl(path: string, lang: Locale): string {
  return localizePath(stripLocaleFromPath(path), getAlternateLocale(lang));
}

/** Strips the `.en` / `.ru` suffix content files use to pair translations. */
export function cleanSlug(id: string): string {
  return id.replace(/\.(en|ru)$/, '').replace(/(en|ru)$/, '');
}

export function getContentSlug(entry: { id: string; data: { translationKey?: string } }): string {
  return entry.data.translationKey ?? cleanSlug(entry.id);
}

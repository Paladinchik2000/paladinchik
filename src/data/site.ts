export const siteName = 'Nikita Paladi';
export const siteTitle = 'Nikita Paladi — Personal Archive';
export const siteDescription = 'A personal archive of projects, films, books, places, and ideas.';
export const siteUrl = 'https://www.paladinchik.com';
export const previewUrl = 'https://paladinchik.vercel.app';
export const author = 'Nikita Paladi';
export const defaultLocale = 'en';
export const locales = ['en', 'ru'] as const;
export const defaultSocialImage = '/images/brand/social-preview.png';
export const social = {
  github: 'https://github.com/Paladinchik2000',
  youtube: 'https://www.youtube.com/@paladinchik2000',
  telegram: 'https://t.me/paladinchik',
  email: 'mailto:paladi.nikita2000@gmail.com',
} as const;

export const siteConfig = {
  siteName,
  siteTitle,
  siteDescription,
  siteUrl,
  previewUrl,
  author,
  defaultLocale,
  locales,
  defaultSocialImage,
  social,
} as const;

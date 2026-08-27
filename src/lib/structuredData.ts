import { siteConfig } from '../data/site';
import type { Locale } from '../i18n/ui';

type SchemaValue = Record<string, unknown>;

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface CollectionPageInput {
  title: string;
  description: string;
  url: string;
  lang: Locale;
}

interface CreativeWorkInput {
  title: string;
  description?: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  lang: Locale;
}

interface MovieReviewInput extends CreativeWorkInput {
  year?: number;
  rating?: number;
  genres?: string[];
}

interface BookReviewInput extends CreativeWorkInput {
  bookAuthor?: string;
  year?: number;
  rating?: number;
  genres?: string[];
}

export const absoluteUrl = (pathOrUrl: string) =>
  pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, siteConfig.siteUrl).toString();

const personReference = () => ({
  '@type': 'Person',
  name: siteConfig.author,
  url: siteConfig.siteUrl,
});

/**
 * schema.org date properties require ISO 8601. Display fields like `visitedAt`
 * are free text so they can read "Winter 2025-2026", so anything that is not a
 * clean YYYY[-MM[-DD]] value is dropped rather than emitted as an invalid date.
 */
const isoDate = (value?: string) =>
  value && /^\d{4}(-\d{2}(-\d{2})?)?$/.test(value) ? value : undefined;

const ratingSchema = (rating?: number) =>
  typeof rating === 'number'
    ? {
        '@type': 'Rating',
        ratingValue: rating,
        bestRating: 10,
        worstRating: 1,
      }
    : undefined;

export const createWebSiteSchema = (lang: Locale = siteConfig.defaultLocale) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.siteName,
  alternateName: 'Paladinchik',
  url: siteConfig.siteUrl,
  inLanguage: lang,
  description: siteConfig.siteDescription,
  publisher: personReference(),
});

export const createPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.author,
  alternateName: 'Paladinchik',
  url: siteConfig.siteUrl,
  jobTitle: 'Web and Android developer',
  email: siteConfig.social.email.replace(/^mailto:/, ''),
  sameAs: [siteConfig.social.github, siteConfig.social.youtube, siteConfig.social.telegram],
  // Mirrors the languages and tools listed on /about, which are in turn drawn
  // from the shipped projects — keep the three in step.
  knowsAbout: [
    'Web development',
    'Front-end development',
    'Android development',
    'TypeScript',
    'JavaScript',
    'Kotlin',
    'Astro',
    'React',
    'Jetpack Compose',
    'Technical SEO',
    'Web accessibility',
  ],
});

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
});

export const createCollectionPageSchema = ({ title, description, url, lang }: CollectionPageInput) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  url: absoluteUrl(url),
  inLanguage: lang,
  isPartOf: {
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  },
});

export const createCreativeWorkSchema = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = siteConfig.author,
  lang,
}: CreativeWorkInput): SchemaValue => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: title,
  headline: title,
  description,
  url: absoluteUrl(url),
  image: image ? absoluteUrl(image) : undefined,
  datePublished: isoDate(datePublished),
  dateModified: isoDate(dateModified),
  inLanguage: lang,
  author: {
    '@type': 'Person',
    name: author,
    url: siteConfig.siteUrl,
  },
  publisher: personReference(),
});

export const createMovieReviewSchema = ({
  title,
  description,
  url,
  image,
  year,
  rating,
  genres,
  author = siteConfig.author,
  lang,
}: MovieReviewInput): SchemaValue => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: `${title} personal review`,
  reviewBody: description,
  url: absoluteUrl(url),
  inLanguage: lang,
  author: {
    '@type': 'Person',
    name: author,
    url: siteConfig.siteUrl,
  },
  reviewRating: ratingSchema(rating),
  itemReviewed: {
    '@type': 'Movie',
    name: title,
    datePublished: year ? String(year) : undefined,
    genre: genres,
    image: image ? absoluteUrl(image) : undefined,
    description,
  },
});

export const createBookReviewSchema = ({
  title,
  description,
  url,
  image,
  bookAuthor,
  year,
  rating,
  genres,
  author = siteConfig.author,
  lang,
}: BookReviewInput): SchemaValue => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: `${title} personal review`,
  reviewBody: description,
  url: absoluteUrl(url),
  inLanguage: lang,
  author: {
    '@type': 'Person',
    name: author,
    url: siteConfig.siteUrl,
  },
  reviewRating: ratingSchema(rating),
  itemReviewed: {
    '@type': 'Book',
    name: title,
    author: bookAuthor ? { '@type': 'Person', name: bookAuthor } : undefined,
    datePublished: year ? String(year) : undefined,
    genre: genres,
    image: image ? absoluteUrl(image) : undefined,
    description,
  },
});

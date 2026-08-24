import { getCollection } from 'astro:content';
import type { Locale } from '../i18n/ui';
import { getContentSlug, getTranslations, localizePath } from '../i18n/utils';

export interface FeedItem {
  title: string;
  description: string;
  link: string;
  categories: string[];
  pubDate?: Date;
}

/**
 * Builds the feed for one locale across every collection.
 *
 * Entries carry no publication timestamp — the archive records when something
 * was watched, read or visited, not when the page was written — so items are
 * ordered by the section they belong to and then alphabetically, and `pubDate`
 * is left off rather than invented.
 */
export async function getFeedItems(lang: Locale): Promise<FeedItem[]> {
  const t = getTranslations(lang);

  const [movies, books, places, projects] = await Promise.all([
    getCollection('movies'),
    getCollection('books'),
    getCollection('places'),
    getCollection('projects'),
  ]);

  const byLang = <T extends { data: { lang: Locale } }>(entries: T[]) =>
    entries.filter((entry) => entry.data.lang === lang);

  const items: FeedItem[] = [
    ...byLang(movies).map((entry) => ({
      title: entry.data.title,
      description: entry.data.description ?? '',
      link: localizePath(`/cinema/${getContentSlug(entry)}`, lang),
      categories: [t.cinema.title, ...(entry.data.genres ?? [])],
    })),
    ...byLang(books).map((entry) => ({
      title: `${entry.data.title} — ${entry.data.author}`,
      description: entry.data.description ?? '',
      link: localizePath(`/library/${getContentSlug(entry)}`, lang),
      categories: [t.library.title, ...(entry.data.genres ?? [])],
    })),
    ...byLang(places).map((entry) => ({
      title: entry.data.title,
      description: entry.data.description ?? '',
      link: localizePath(`/places/${getContentSlug(entry)}`, lang),
      categories: [t.places.title, ...(entry.data.tags ?? [])],
    })),
    ...byLang(projects).map((entry) => ({
      title: entry.data.title,
      description: entry.data.description ?? '',
      link: localizePath(`/projects/${getContentSlug(entry)}`, lang),
      categories: [t.projects.title, ...(entry.data.tags ?? [])],
    })),
  ];

  return items.sort(
    (a, b) => a.categories[0].localeCompare(b.categories[0]) || a.title.localeCompare(b.title),
  );
}

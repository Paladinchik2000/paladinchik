import type { Locale } from '../i18n/ui';

/**
 * Canonical film genres.
 *
 * The slug is shared across locales so `/cinema/genre/crime` and
 * `/ru/cinema/genre/crime` are a proper hreflang pair rather than two
 * unrelated URLs, and so Russian genre pages avoid percent-encoded Cyrillic
 * paths. Labels here must match the strings used in content frontmatter.
 */
export const genreLabels = {
  action: { en: 'Action', ru: 'Боевик' },
  adventure: { en: 'Adventure', ru: 'Приключения' },
  animation: { en: 'Animation', ru: 'Анимация' },
  biography: { en: 'Biography', ru: 'Биография' },
  comedy: { en: 'Comedy', ru: 'Комедия' },
  'coming-of-age': { en: 'Coming-of-age', ru: 'Взросление' },
  crime: { en: 'Crime', ru: 'Криминал' },
  drama: { en: 'Drama', ru: 'Драма' },
  fantasy: { en: 'Fantasy', ru: 'Фэнтези' },
  horror: { en: 'Horror', ru: 'Ужасы' },
  music: { en: 'Music', ru: 'Музыка' },
  mystery: { en: 'Mystery', ru: 'Детектив' },
  'neo-noir': { en: 'Neo-noir', ru: 'Неонуар' },
  romance: { en: 'Romance', ru: 'Мелодрама' },
  'sci-fi': { en: 'Sci-Fi', ru: 'Фантастика' },
  series: { en: 'Series', ru: 'Сериал' },
  thriller: { en: 'Thriller', ru: 'Триллер' },
  war: { en: 'War', ru: 'Военный' },
  western: { en: 'Western', ru: 'Вестерн' },
} as const satisfies Record<string, Record<Locale, string>>;

export type GenreSlug = keyof typeof genreLabels;

export const genreSlugs = Object.keys(genreLabels) as GenreSlug[];

export const getGenreLabel = (slug: GenreSlug, lang: Locale) => genreLabels[slug][lang];

/** Resolves a frontmatter genre string back to its slug, for a given locale. */
export const getGenreSlug = (label: string, lang: Locale): GenreSlug | undefined =>
  genreSlugs.find((slug) => genreLabels[slug][lang] === label);

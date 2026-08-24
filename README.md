# Nikita Paladi — Personal Archive

A bilingual (EN/RU) personal archive of films, books, places and projects, built
with [Astro](https://astro.build). Live at
[paladinchik.com](https://www.paladinchik.com).

## Commands

| Command           | Action                                              |
| ----------------- | --------------------------------------------------- |
| `npm install`     | Install dependencies                                 |
| `npm run dev`     | Start the dev server on `localhost:4321`             |
| `npm run check`   | Type-check `.astro`, `.ts` and content collections   |
| `npm run build`   | Run `astro check`, then build to `./dist/`           |
| `npm run preview` | Serve the production build locally                   |

`build` is gated on `check`, so a type error fails the build rather than
shipping.

## Layout

```text
src/
├── assets/images/    # content artwork, optimized by astro:assets
├── components/
│   ├── pages/        # one component per page type, takes a `lang` prop
│   ├── layout/       # BaseLayout, Header, Footer
│   ├── ui/           # cards, filters, cover images
│   ├── places/       # Leaflet map
│   └── seo/          # JSON-LD
├── content/          # MDX entries: movies, books, places, projects
├── i18n/             # ui.ts (copy contract) + utils.ts
├── lib/              # images, genres, structured data, assets
├── pages/            # routes; `/ru/*` mirrors the English tree
└── styles/global.css
```

## How it is put together

**Bilingual by contract.** Every page exists twice (`/about`, `/ru/about`) but is
written once: routes are thin wrappers around a shared component that takes
`lang`. All copy lives in `src/i18n/ui.ts` behind a `Translations` interface both
locales must satisfy, so a missing or renamed translation is a **compile error**,
not a page that silently ships the wrong language.

**Content.** Entries are MDX with a Zod schema per collection
(`src/content.config.ts`). Each entry is a `{slug}.{lang}.mdx` pair joined by
`translationKey`, which is also the URL slug. Optional fields stay optional —
omit `rating` or `cover` rather than inventing a value.

**Images.** Artwork lives in `src/assets/images/` and goes through
`astro:assets`: WebP with a responsive `srcset`, intrinsic dimensions, and a
build error if a path does not resolve. The cover slot adapts to the artwork —
portrait posters get a 2:3 slot, landscape art keeps 16:10 — so neither shape is
cropped. See [docs/content-assets.md](docs/content-assets.md).

**SEO.** Canonical URLs, hreflang pairs with `x-default`, Open Graph images
cropped to 1200×630, JSON-LD (`Review`, `CreativeWork`, `CollectionPage`,
`BreadcrumbList`, `Person`, `WebSite`), and a generated sitemap. Free-text dates
are kept out of schema date fields by an ISO guard in `lib/structuredData.ts`.

**JavaScript.** Deliberately minimal. The animated WebGL background loads
three.js only on the landing page and only after idle; everywhere else the CSS
backdrop renders for free. Leaflet loads only on `/places`. Archive filtering is
plain DOM, no framework.

## Adding an entry

1. Create `src/content/{collection}/{slug}.en.mdx` and `{slug}.ru.mdx` with the
   same `translationKey`.
2. Drop artwork in `src/assets/images/{collection}/{slug}/` and reference it
   relative to the MDX file (`../../assets/images/...`).
3. `npm run check` will catch a bad image path, a missing required field, or a
   translation key that only exists in one locale.

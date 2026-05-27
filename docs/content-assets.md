# Content Asset Guide

Use `public/images` for visual assets referenced from MDX frontmatter. Paths in MDX should start with `/images/...` because Astro serves the `public` folder from the site root.

## Brand Preview

- File: `public/images/brand/social-preview.png`
- Recommended size: `1200x630`
- Used as the default Open Graph and Twitter preview image.

```yaml
# Usually no page-level frontmatter is needed.
# BaseLayout falls back to /images/brand/social-preview.png.
```

## Movie Covers

- Folder: `public/images/movies/{slug}/`
- Cover: `public/images/movies/{slug}/cover.jpg`
- Recommended size: `800x1200` or `1000x1500`

```yaml
cover: "/images/movies/blade-runner-2049/cover.jpg"
```

## Book Covers

- Folder: `public/images/books/{slug}/`
- Cover: `public/images/books/{slug}/cover.jpg`
- Recommended size: `800x1200` or `1000x1500`

```yaml
cover: "/images/books/meditations/cover.jpg"
```

## Place Photos

- Folder: `public/images/places/{slug}/`
- Cover: `public/images/places/{slug}/cover.jpg`
- Gallery: `public/images/places/{slug}/01.jpg`, `02.jpg`, `03.jpg`
- Recommended cover size: `1600x1000`
- Recommended gallery size: `1600px` wide JPG or WebP

```yaml
cover: "/images/places/rome/cover.jpg"
gallery:
  - "/images/places/rome/01.jpg"
  - "/images/places/rome/02.jpg"
  - "/images/places/rome/03.jpg"
```

## Project Covers

- Folder: `public/images/projects/{slug}/`
- Cover: `public/images/projects/{slug}/cover.jpg`
- Recommended size: `1600x900`

```yaml
cover: "/images/projects/personal-archive/cover.jpg"
```

## Fallback Behavior

If a referenced cover or gallery image is not present in `public`, the site hides the missing image and renders a designed prismatic fallback cover. This keeps archive cards and detail pages intentional while assets are added over time.

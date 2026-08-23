# Content Asset Guide

Content images live in `src/assets/images/` so Astro can optimize them. They are
**not** in `public/` — files in `public/` are copied verbatim and skip
optimization entirely.

What you get by putting a cover in `src/assets/`:

- Automatic WebP/AVIF conversion with a JPEG fallback
- A responsive `srcset` so phones download a small file and retina screens a large one
- Intrinsic `width`/`height` baked into the tag, which prevents layout shift
- Content-hashed filenames, so images can be cached forever
- A **build error if the path is wrong**, instead of silently rendering the fallback cover

## How to add an image

1. Drop the file in the folder for its collection and slug:
   `src/assets/images/movies/blade-runner-2049/cover.jpg`
2. Reference it from the MDX frontmatter with a path **relative to the MDX
   file**. Every content file sits at `src/content/{collection}/`, so the prefix
   is always `../../assets/images/`:

```yaml
cover: "../../assets/images/movies/blade-runner-2049/cover.jpg"
```

Both the `.en` and `.ru` file for an entry point at the same image.

Omit the `cover` field entirely when there is no artwork yet — the designed
prismatic fallback cover renders instead. Do not point it at a file that does
not exist; that now fails the build.

## Folders and sizes

| Collection | Path                                        | Recommended size    |
| ---------- | ------------------------------------------- | ------------------- |
| Movies     | `src/assets/images/movies/{slug}/cover.jpg`  | 1000x1500 (2:3)     |
| Books      | `src/assets/images/books/{slug}/cover.jpg`   | 1000x1500 (2:3)     |
| Places     | `src/assets/images/places/{slug}/cover.jpg`  | 1600x1000 (16:10)   |
| Places     | `src/assets/images/places/{slug}/01.jpg` ... | 1600px wide         |
| Projects   | `src/assets/images/projects/{slug}/cover.jpg`| 1600x900 (16:9)     |

Supply the largest size you have; downscaled variants are generated for you.
Covers are cropped with `object-fit: cover`, so keep the subject near the centre.

### Place galleries

```yaml
cover: "../../assets/images/places/rome/cover.jpg"
gallery:
  - "../../assets/images/places/rome/01.jpg"
  - "../../assets/images/places/rome/02.jpg"
  - "../../assets/images/places/rome/03.jpg"
```

Gallery images are the content rather than decoration, so they get real alt text
built from the place title and their position.

## Social preview

The Open Graph image is derived automatically: when an entry has a `cover`, it
is re-cropped to 1200x630 JPEG for social cards. Pages without one fall back to
`public/images/brand/social-preview.png`.

Brand artwork (`social-preview.png`, `logo-p.png`, favicons) stays in `public/`
because the web manifest and favicon links need stable, unhashed URLs.

## Responsive sizing

Width ladders and `sizes` hints live in `src/lib/images.ts`, keyed by slot
(`card`, `project`, `detail`, `gallery`). They mirror the grid breakpoints in
`global.css` — if those breakpoints change, update the presets to match.

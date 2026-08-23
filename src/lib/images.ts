/**
 * Responsive presets for the cover slots.
 *
 * `sizes` mirrors the grid breakpoints in global.css (3 columns, dropping to 2
 * at 860px and 1 at 620px, inside a 1160px shell), so the browser can pick the
 * right candidate before layout. Width ladders run to roughly 2x the largest
 * rendered size to cover high-DPR screens.
 *
 * Keep these in sync with the grid rules if the breakpoints change.
 */
export const coverPresets = {
  /** Cards in the 3-column archive and section grids. */
  card: {
    widths: [320, 480, 640, 768, 960],
    sizes: '(max-width: 620px) 100vw, (max-width: 860px) 50vw, 373px',
  },
  /** Cards in the 2-column project grid. */
  project: {
    widths: [480, 640, 768, 1140],
    sizes: '(max-width: 620px) 100vw, (max-width: 1220px) 50vw, 570px',
  },
  /** The wide hero cover on detail pages (max 900px, 16/7). */
  detail: {
    widths: [640, 900, 1350, 1800],
    sizes: '(max-width: 940px) 100vw, 900px',
  },
  /** Tiles in the 3-column place gallery. */
  gallery: {
    widths: [320, 480, 640, 768, 960],
    sizes: '(max-width: 620px) 100vw, (max-width: 860px) 50vw, 373px',
  },
} as const;

export type CoverPreset = keyof typeof coverPresets;

/** Open Graph images are fixed at the size most platforms crop to. */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

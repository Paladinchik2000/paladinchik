import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { siteConfig } from '../data/site';

/**
 * Content images live in `src/assets` and are handled by `astro:assets`, which
 * verifies them at build time. This check only covers the brand artwork that
 * has to stay in `public/` for the manifest and favicon links.
 */
const publicAssetExists = (assetPath?: string) => {
  if (!assetPath || !assetPath.startsWith('/')) return false;

  return existsSync(join(process.cwd(), 'public', assetPath.slice(1)));
};

/** The share image used by pages that have no artwork of their own. */
export const getFallbackSocialImage = () => {
  if (publicAssetExists(siteConfig.defaultSocialImage)) return siteConfig.defaultSocialImage;
  if (publicAssetExists('/images/brand/logo-p.png')) return '/images/brand/logo-p.png';

  return undefined;
};

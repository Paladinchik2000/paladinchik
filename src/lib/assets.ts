import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { siteConfig } from '../data/site';

export const publicAssetExists = (assetPath?: string) => {
  if (!assetPath || !assetPath.startsWith('/')) return false;

  return existsSync(join(process.cwd(), 'public', assetPath.slice(1)));
};

export const getExistingPublicImage = (assetPath?: string) =>
  publicAssetExists(assetPath) ? assetPath : undefined;

export const getExistingPublicImages = (assetPaths: string[] = []) =>
  assetPaths.filter((assetPath) => publicAssetExists(assetPath));

export const getSocialImage = (image?: string) => {
  if (image?.startsWith('http')) return image;
  if (publicAssetExists(image)) return image;
  if (publicAssetExists(siteConfig.defaultSocialImage)) return siteConfig.defaultSocialImage;
  if (publicAssetExists('/images/brand/logo-p.png')) return '/images/brand/logo-p.png';

  return undefined;
};

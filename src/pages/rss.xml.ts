import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { siteConfig } from '../data/site';
import { getTranslations } from '../i18n/utils';
import { getFeedItems } from '../lib/feed';

export async function GET(context: APIContext) {
  const t = getTranslations('en');

  return rss({
    title: siteConfig.siteTitle,
    description: t.home.description,
    site: context.site ?? siteConfig.siteUrl,
    items: await getFeedItems('en'),
    customData: '<language>en</language>',
  });
}

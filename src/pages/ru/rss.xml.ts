import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { siteConfig } from '../../data/site';
import { getTranslations } from '../../i18n/utils';
import { getFeedItems } from '../../lib/feed';

export async function GET(context: APIContext) {
  const t = getTranslations('ru');

  return rss({
    title: `${siteConfig.author} — ${t.common.personalArchive}`,
    description: t.home.description,
    site: context.site ?? siteConfig.siteUrl,
    items: await getFeedItems('ru'),
    customData: '<language>ru</language>',
  });
}

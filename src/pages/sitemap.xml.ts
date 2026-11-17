import type { APIRoute } from 'astro';
import { SERVICES } from '../data/company';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://almanartech.ae';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/services', changefreq: 'weekly', priority: '0.9' },
    { url: '/industries', changefreq: 'monthly', priority: '0.8' },
    { url: '/projects', changefreq: 'weekly', priority: '0.8' },
    { url: '/process', changefreq: 'monthly', priority: '0.7' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' },
  ];

  const serviceRoutes = SERVICES.map((s) => ({
    url: `/services/${s.slug}`,
    changefreq: 'weekly',
    priority: '0.9',
  }));

  const allRoutes = [...staticRoutes, ...serviceRoutes];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${siteUrl}${r.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`.trim();

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};

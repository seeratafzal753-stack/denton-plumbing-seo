import type { APIRoute } from 'astro';
import { siteConfig } from '../siteConfig';

const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${siteConfig.domain}/sitemap-index.xml
`;

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

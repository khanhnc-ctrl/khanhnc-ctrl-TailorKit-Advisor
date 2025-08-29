import type { MetadataRoute } from 'next'
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://khanhnc-ctrl.github.io/khanhnc-ctrl-TailorKit-Advisor'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  }
}



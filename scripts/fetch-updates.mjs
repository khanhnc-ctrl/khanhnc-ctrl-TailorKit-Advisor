import { writeFile } from 'node:fs/promises';
import { XMLParser } from 'fast-xml-parser';

const RSS_SOURCES = [
  { name: 'Printful Blog', url: 'https://blog.printful.com/feed/', category: 'Platform Update' },
  { name: 'Shopify Blog', url: 'https://www.shopify.com/blog/feed.xml', category: 'E-commerce' },
  { name: 'Etsy News', url: 'https://blog.etsy.com/en/feed/', category: 'Marketplace' },
  { name: 'Printify Blog', url: 'https://printify.com/blog/feed/', category: 'Platform Update' }
];

async function fetchSource(source) {
  try {
    const res = await fetch(source.url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xmlText = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false, parseAttributeValue: true, parseTagValue: false });
    const result = parser.parse(xmlText);
    const items = result?.rss?.channel?.item || result?.feed?.entry || [];
    const updates = items.slice(0, 5).map((item, index) => {
      const rawTitle = item.title ?? '';
      const rawDesc = item.description ?? item.summary ?? '';
      const title = String(rawTitle).replace(/<[^>]*>/g, '') || 'Untitled';
      const summary = (String(rawDesc).replace(/<[^>]*>/g, '').substring(0, 200) + '...') || 'No description available';
      const pubRaw = item.pubDate || item.published || item.updated || new Date().toISOString();
      const date = new Date(pubRaw).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const wordCount = summary.split(' ').length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min read';
      const link = item.link?.['@_href'] || item.link || '#';
      return {
        id: `${source.name}-${index}`,
        title,
        summary,
        date,
        category: source.category,
        readTime,
        source: source.name,
        url: link
      };
    });
    return updates;
  } catch (err) {
    console.error(`Fetch failed for ${source.name}:`, err?.message || err);
    return [];
  }
}

async function main() {
  const all = [];
  for (const src of RSS_SOURCES) {
    const items = await fetchSource(src);
    all.push(...items);
  }
  const data = all
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 12);
  const payload = { success: true, data, lastUpdated: new Date().toISOString(), source: 'RSS feeds (GitHub Actions)' };
  await writeFile('public/updates.json', JSON.stringify(payload, null, 2));
  console.log(`Wrote ${data.length} updates to public/updates.json`);
}

main().catch((e) => {
  console.error('Failed to build updates.json:', e);
  process.exit(1);
});



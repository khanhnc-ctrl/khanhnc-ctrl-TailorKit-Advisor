import { XMLParser } from 'fast-xml-parser';

export interface MarketUpdate {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  readTime: string;
  source: string;
  url: string;
}

export interface RSSItem {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  category?: string;
}

const RSS_SOURCES = [
  {
    name: 'Printful Blog',
    url: 'https://blog.printful.com/feed/',
    category: 'Platform Update'
  },
  {
    name: 'Printify Blog',
    url: 'https://printify.com/blog/feed/',
    category: 'Platform Update'
  },
  {
    name: 'Shopify Blog',
    url: 'https://www.shopify.com/blog/feed.xml',
    category: 'E-commerce'
  },
  {
    name: 'Etsy News',
    url: 'https://blog.etsy.com/en/feed/',
    category: 'Marketplace'
  }
];

export async function fetchRSSUpdates(): Promise<MarketUpdate[]> {
  const allUpdates: MarketUpdate[] = [];
  
  for (const source of RSS_SOURCES) {
    try {
      // Note: RSS feeds may be blocked by CORS in browser environment
      // This will work in server-side API routes but may fail in client-side
      const response = await fetch(source.url, { 
        next: { revalidate: 3600 } // Cache for 1 hour
      });
      
      if (!response.ok) continue;
      
      const xmlText = await response.text();
      const parser = new XMLParser({
        ignoreAttributes: false,
        parseAttributeValue: true,
        parseTagValue: false
      });
      
      const result = parser.parse(xmlText);
      const items = result.rss?.channel?.item || result.feed?.entry || [];
      
      const updates = items.slice(0, 3).map((item: RSSItem, index: number) => {
        const title = item.title?.replace(/<[^>]*>/g, '') || 'Untitled';
        const summary = item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...' || 'No description available';
        const date = new Date(item.pubDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        
        // Estimate read time (rough calculation)
        const wordCount = summary.split(' ').length;
        const readTime = Math.ceil(wordCount / 200) + ' min read';
        
        return {
          id: `${source.name}-${index}`,
          title,
          summary,
          date,
          category: source.category,
          readTime,
          source: source.name,
          url: item.link || '#'
        };
      });
      
      allUpdates.push(...updates);
    } catch (error) {
      console.error(`Error fetching from ${source.name}:`, error);
    }
  }
  
  // If no RSS updates, return fallback content
  if (allUpdates.length === 0) {
    return getFallbackUpdates();
  }
  
  // Sort by date (newest first) and limit to 12 updates
  return allUpdates
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 12);
}

export async function getCachedUpdates(): Promise<MarketUpdate[]> {
  try {
    return await fetchRSSUpdates();
  } catch (error) {
    console.error('Error fetching RSS updates:', error);
    // Return fallback updates if RSS fails
    return getFallbackUpdates();
  }
}

function getFallbackUpdates(): MarketUpdate[] {
  return [
    {
      id: 'fallback-1',
      title: 'Print on Demand Market Continues Strong Growth',
      summary: 'The POD industry shows robust momentum with increasing adoption among small businesses and entrepreneurs worldwide. Major platforms report 20%+ growth in Q3.',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: 'Market Trends',
      readTime: '3 min read',
      source: 'TailorKit',
      url: '#'
    },
    {
      id: 'fallback-2',
      title: 'Shopify Integrations Enhance POD Workflows',
      summary: 'New Shopify app updates streamline print-on-demand operations, making it easier for merchants to manage custom designs and bulk orders.',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: 'Platform Update',
      readTime: '4 min read',
      source: 'TailorKit',
      url: '#'
    },
    {
      id: 'fallback-3',
      title: 'Sustainable Materials Drive POD Innovation',
      summary: 'Eco-friendly fabric options becoming mainstream in print-on-demand, with major suppliers offering organic cotton and recycled polyester alternatives.',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: 'Sustainability',
      readTime: '5 min read',
      source: 'TailorKit',
      url: '#'
    },
    {
      id: 'fallback-4',
      title: 'Asia-Pacific POD Market Analysis',
      summary: 'China, India, and Southeast Asia emerging as key players in global POD supply chain, offering competitive pricing and fast turnaround times.',
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: 'Global Markets',
      readTime: '6 min read',
      source: 'TailorKit',
      url: '#'
    }
  ];
}

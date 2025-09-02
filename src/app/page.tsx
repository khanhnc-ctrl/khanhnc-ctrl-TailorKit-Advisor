'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { MarketUpdate } from "@/lib/rss";

// Fallback content that shows immediately
const FALLBACK_UPDATES: MarketUpdate[] = [
  {
    id: 'fallback-1',
    title: 'Print on Demand Market Continues Strong Growth',
    summary: 'The POD industry shows robust momentum with increasing adoption among small businesses and entrepreneurs worldwide. Major platforms report 20%+ growth in Q3.',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: 'Market Trends',
    readTime: '3 min read',
    source: 'TailorKit',
    url: '/khanhnc-ctrl-TailorKit-Advisor/articles/pod-market-growth'
  },
  {
    id: 'fallback-2',
    title: 'Shopify Integrations Enhance POD Workflows',
    summary: 'New Shopify app updates streamline print-on-demand operations, making it easier for merchants to manage custom designs and bulk orders.',
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: 'Platform Update',
    readTime: '4 min read',
    source: 'TailorKit',
    url: '/khanhnc-ctrl-TailorKit-Advisor/articles/shopify-pod-integrations'
  },
  {
    id: 'fallback-3',
    title: 'Sustainable Materials Drive POD Innovation',
    summary: 'Eco-friendly fabric options becoming mainstream in print-on-demand, with major suppliers offering organic cotton and recycled polyester alternatives.',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: 'Sustainability',
    readTime: '5 min read',
    source: 'TailorKit',
    url: '/khanhnc-ctrl-TailorKit-Advisor/articles/sustainable-materials-pod'
  },
  {
    id: 'fallback-4',
    title: 'Asia-Pacific POD Market Analysis',
    summary: 'China, India, and Southeast Asia emerging as key players in global POD supply chain, offering competitive pricing and fast turnaround times.',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: 'Global Markets',
    readTime: '6 min read',
    source: 'TailorKit',
    url: '/khanhnc-ctrl-TailorKit-Advisor/articles/asia-pacific-pod-market'
  }
];

export default function Home() {
  const [updates, setUpdates] = useState<MarketUpdate[]>(FALLBACK_UPDATES);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>(new Date().toISOString());

  const fetchUpdates = async () => {
    try {
      setLoading(true);
      const response = await fetch('/khanhnc-ctrl-TailorKit-Advisor/api/updates');
      const result = await response.json();
      
      if (result.success && result.data.length > 0) {
        setUpdates(result.data);
        setLastUpdated(result.lastUpdated);
      } else {
        // Keep fallback content if API fails
        setUpdates(FALLBACK_UPDATES);
        setLastUpdated(new Date().toISOString());
      }
    } catch (error) {
      console.error('Error fetching updates:', error);
      // Keep fallback content on error
      setUpdates(FALLBACK_UPDATES);
      setLastUpdated(new Date().toISOString());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Try to fetch updates, but show fallback immediately
    fetchUpdates();
    
    // Auto-refresh every 2 hours
    const interval = setInterval(fetchUpdates, 2 * 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="https://cdn.shopify.com/app-store/listing_images/958e5ec4440b11eb378c3c27a7a4097d/icon/CKPAh-fW_YYDEAE=.png"
                alt="TailorKit Logo"
                className="h-8 w-8 rounded object-cover"
              />
              <span className="font-semibold">TailorKit</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#updates" className="hover:text-blue-600">Market Updates</Link>
            <Link href="#about" className="hover:text-blue-600">About</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a 
              href="https://apps.shopify.com/tailorkit" 
            target="_blank"
            rel="noopener noreferrer"
              className="h-9 rounded-md bg-blue-600 text-white px-3 text-sm hover:bg-blue-700"
            >
              Get App
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl/tight font-semibold sm:text-5xl/tight">Print on Demand Market Intelligence</h1>
                <p className="mt-4 text-gray-600 max-w-prose">
                  Stay ahead of the POD market with TailorKit&apos;s curated insights. We help Shopify merchants 
                  understand global trends, platform changes, and opportunities in the print-on-demand space.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <a 
                    href="https://apps.shopify.com/tailorkit" 
          target="_blank"
          rel="noopener noreferrer"
                    className="h-10 rounded-md bg-blue-600 text-white px-4 text-sm hover:bg-blue-700"
                  >
                    Try TailorKit Free
        </a>
        <a
                    href="#updates" 
                    className="h-10 rounded-md border border-gray-300 px-4 text-sm hover:bg-gray-50"
                  >
                    View Updates
                  </a>
                </div>
                <div className="mt-6 text-xs text-gray-500">14-day free trial • No credit card required</div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4 shadow-sm bg-white">
                <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 grid place-items-center">
                  <div className="text-center">
                    <div className="text-blue-600 text-2xl mb-2">🎨</div>
                    <div className="text-sm text-blue-700 font-medium">TailorKit for Shopify</div>
                    <div className="text-xs text-blue-600">Print template integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="updates" className="border-t border-gray-100 bg-gray-50/60">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Latest Market Updates</h2>
                <p className="text-gray-600">Stay informed about the latest POD industry developments</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">
                  {lastUpdated && `Last updated: ${new Date(lastUpdated).toLocaleTimeString()}`}
                </div>
                <button 
                  onClick={fetchUpdates}
                  disabled={loading}
                  className="text-xs text-blue-600 hover:text-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              {updates.map((update) => (
                <MarketUpdateCard key={update.id} update={update} />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-sm text-gray-500 mb-2">
                Updates automatically refresh every 2 hours
              </div>
              <button 
                onClick={fetchUpdates}
                disabled={loading}
                className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Load Latest Updates'}
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-gray-100">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-4">About TailorKit</h2>
                <p className="text-gray-600 mb-4">
                  TailorKit is a Shopify app that simplifies print-on-demand for merchants. We help you create, 
                  manage, and integrate custom print templates with your POD products seamlessly.
                </p>
                <p className="text-gray-600 mb-6">
                  Our market updates keep you informed about industry trends, platform changes, and opportunities 
                  to grow your POD business.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Shopify Integration</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Print Templates</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Market Intelligence</span>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white">
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>Drag & drop template editor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>Multi-platform POD integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>Bulk product customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>Real-time market insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} TailorKit - POD Market Intelligence</div>
          <div className="flex items-center gap-4">
            <a href="https://apps.shopify.com/tailorkit" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">Shopify App</a>
            <a href="#" className="hover:text-gray-800">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MarketUpdateCard({ update }: { update: MarketUpdate }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
            {update.category}
          </span>
          <span className="text-xs text-gray-500">via {update.source}</span>
        </div>
        <span className="text-xs text-gray-500">{update.readTime}</span>
      </div>
      <a href={update.url} className="block">
        <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer transition-colors">
          {update.title}
        </h3>
      </a>
      <p className="text-gray-600 text-sm mb-3">{update.summary}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{update.date}</span>
        <a 
          href={update.url} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Read More →
        </a>
    </div>
    </article>
  );
}

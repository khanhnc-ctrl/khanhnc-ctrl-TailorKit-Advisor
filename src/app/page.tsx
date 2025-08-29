import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded bg-blue-600 text-white grid place-items-center font-semibold">T</span>
            <span className="font-semibold">TailorKit</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#updates" className="hover:text-blue-600">Market Updates</Link>
            <Link href="#about" className="hover:text-blue-600">About</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
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
                  Stay ahead of the POD market with TailorKit's curated insights. We help Shopify merchants 
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
            <h2 className="text-3xl font-semibold mb-2">Latest Market Updates</h2>
            <p className="text-gray-600 mb-8">Stay informed about the latest POD industry developments</p>
            
            <div className="space-y-6">
              <MarketUpdate 
                date="August 29, 2025"
                title="Shopify Printful Integration Gets Major Update"
                summary="New bulk order processing and improved print quality options now available for merchants using Printful through Shopify."
                category="Platform Update"
                readTime="3 min read"
              />
              
              <MarketUpdate 
                date="August 28, 2025"
                title="European POD Market Sees 23% Growth"
                summary="Print on demand services in EU markets experiencing significant expansion, driven by sustainable fashion trends and local manufacturing."
                category="Market Trends"
                readTime="5 min read"
              />
              
              <MarketUpdate 
                date="August 27, 2025"
                title="New Sustainable Materials in POD"
                summary="Eco-friendly fabric options becoming mainstream in print-on-demand, with major suppliers offering organic cotton and recycled polyester."
                category="Sustainability"
                readTime="4 min read"
              />
              
              <MarketUpdate 
                date="August 26, 2025"
                title="Asia-Pacific POD Market Analysis"
                summary="China, India, and Southeast Asia emerging as key players in global POD supply chain, offering competitive pricing and fast turnaround."
                category="Global Markets"
                readTime="6 min read"
              />
            </div>
            
            <div className="mt-8 text-center">
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Load More Updates →
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
            <Link href="/contact" className="hover:text-gray-800">Contact</Link>
            <a href="https://apps.shopify.com/tailorkit" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">Shopify App</a>
            <a href="#" className="hover:text-gray-800">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MarketUpdate({ date, title, summary, category, readTime }: { 
  date: string; 
  title: string; 
  summary: string; 
  category: string; 
  readTime: string; 
}) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
          {category}
        </span>
        <span className="text-xs text-gray-500">{readTime}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-3">{summary}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{date}</span>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Read More →
        </button>
      </div>
    </article>
  );
}

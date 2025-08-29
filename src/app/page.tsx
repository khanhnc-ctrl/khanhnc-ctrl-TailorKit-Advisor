import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded bg-gray-900 text-white grid place-items-center font-semibold">T</span>
            <span className="font-semibold">TailorKit Advisor</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#features" className="hover:text-gray-600">Features</Link>
            <Link href="#pricing" className="hover:text-gray-600">Pricing</Link>
            <Link href="#faq" className="hover:text-gray-600">FAQ</Link>
            <Link href="/contact" className="hover:text-gray-600">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex h-9 rounded-md border border-gray-300 px-3 text-sm hover:bg-gray-50">Sign in</button>
            <button className="h-9 rounded-md bg-gray-900 text-white px-3 text-sm hover:bg-gray-800">Get started</button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl/tight font-semibold sm:text-5xl/tight">AI-powered tailoring and style guidance</h1>
                <p className="mt-4 text-gray-600 max-w-prose">Upload measurements, choose fabrics, and let AI recommend perfect fits and outfits. From bespoke suits to daily wear, get guidance that matches your body and style.</p>
                <div className="mt-6 flex items-center gap-3">
                  <button className="h-10 rounded-md bg-gray-900 text-white px-4 text-sm hover:bg-gray-800">Try the demo</button>
                  <button className="h-10 rounded-md border border-gray-300 px-4 text-sm hover:bg-gray-50">Learn more</button>
                </div>
                <div className="mt-6 text-xs text-gray-500">No credit card required</div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4 shadow-sm bg-white">
                <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 grid place-items-center text-sm text-gray-500">Preview</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-gray-100 bg-gray-50/60">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold">Why TailorKit</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Feature title="Smart sizing" description="AI interprets your measurements to suggest precise patterns and sizes." />
              <Feature title="Fabric insights" description="Compare drape, breathability, and durability across materials instantly." />
              <Feature title="Style matching" description="Outfit suggestions tailored to your body type and occasion." />
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-gray-100">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold">Simple pricing</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <PricingCard name="Hobby" price="$0" features={["3 projects", "Basic fabric library", "Email support"]} cta="Start for free" />
              <PricingCard name="Pro" price="$19" features={["Unlimited projects", "Advanced AI suggestions", "Priority support"]} cta="Go Pro" highlighted />
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-gray-100 bg-gray-50/60">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="mt-6 space-y-4 text-sm text-gray-700">
              <FAQ q="How accurate are recommendations?" a="We combine your inputs with fit datasets to guide towards the best outcome. Always validate with a test garment for bespoke work." />
              <FAQ q="Can I use my own fabric library?" a="Yes, you can import fabric data and attach properties for AI evaluation." />
              <FAQ q="Do you support teams?" a="Team workspaces and shared libraries are available on Pro." />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} TailorKit Advisor</div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-800">Privacy</Link>
            <Link href="#" className="hover:text-gray-800">Terms</Link>
            <Link href="#" className="hover:text-gray-800">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-base font-medium">{title}</div>
      <div className="mt-1 text-sm text-gray-600">{description}</div>
    </div>
  );
}

function PricingCard({ name, price, features, cta, highlighted = false }: { name: string; price: string; features: string[]; cta: string; highlighted?: boolean }) {
  return (
    <div className={`${highlighted ? "ring-2 ring-gray-900" : ""} rounded-lg border border-gray-200 bg-white p-5 shadow-sm`}>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-base font-medium">{name}</div>
          <div className="mt-1 text-3xl font-semibold">{price}<span className="text-sm font-normal text-gray-500">/mo</span></div>
        </div>
        {highlighted && <span className="text-xs rounded bg-gray-900 px-2 py-1 text-white">Popular</span>}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gray-900" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className="mt-5 w-full h-10 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800">{cta}</button>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm open:shadow-md">
      <summary className="cursor-pointer list-none text-sm font-medium">
        <span className="select-none">{q}</span>
      </summary>
      <div className="mt-2 text-sm text-gray-600">{a}</div>
    </details>
  );
}

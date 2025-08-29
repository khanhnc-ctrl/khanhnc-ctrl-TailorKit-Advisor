import Link from "next/link";

const REPO_ISSUES_URL = "https://github.com/khanhnc-ctrl/khanhnc-ctrl-TailorKit-Advisor/issues/new";

export default function ContactPage() {
  const title = encodeURIComponent("Contact: TailorKit POD Market Updates");
  const body = encodeURIComponent(
    `Question or feedback about TailorKit or POD market updates?\n\n` +
      `Context (optional):\n- Topic: [POD market, TailorKit app, Shopify integration, etc.]\n- Specific question:\n- Your POD experience level:\n\n` +
      `Thanks!`
  );

  const issueUrl = `${REPO_ISSUES_URL}?title=${title}&body=${body}`;

  return (
    <div className="min-h-[60vh] mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 text-gray-600">
        Have questions about TailorKit or want to discuss POD market trends? Open an issue and we'll get back to you.
      </p>
      
      <div className="mt-8 space-y-6">
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="font-semibold mb-3">Get TailorKit App</h2>
          <p className="text-gray-600 mb-4">
            Ready to integrate print templates with your Shopify POD products?
          </p>
          <a
            className="inline-flex h-10 items-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
            href="https://apps.shopify.com/tailorkit"
            target="_blank"
            rel="noreferrer"
          >
            Install on Shopify
          </a>
        </div>

        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="font-semibold mb-3">Market Updates Feedback</h2>
          <p className="text-gray-600 mb-4">
            Questions about our POD market insights or want to suggest topics?
          </p>
          <a
            className="inline-flex h-10 items-center rounded-md border border-gray-300 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
            href={issueUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub Issue
          </a>
        </div>
      </div>

      <div className="mt-10 text-sm text-gray-600">
        <p>For immediate Shopify app support, visit the TailorKit app page in your Shopify admin.</p>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
          ← Back to market updates
        </Link>
      </div>
    </div>
  );
}



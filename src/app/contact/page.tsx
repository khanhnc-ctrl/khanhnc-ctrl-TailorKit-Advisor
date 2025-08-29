import Link from "next/link";

const REPO_ISSUES_URL = "https://github.com/khanhnc-ctrl/khanhnc-ctrl-TailorKit-Advisor/issues/new";

export default function ContactPage() {
  const title = encodeURIComponent("Contact: TailorKit Advisor");
  const body = encodeURIComponent(
    `Describe your question or feedback here.\n\n` +
      `Context (optional):\n- Page or feature:\n- Steps to reproduce (if a bug):\n- Expected behavior:\n- Screenshots:\n\n` +
      `Thanks!`
  );

  const issueUrl = `${REPO_ISSUES_URL}?title=${title}&body=${body}`;

  return (
    <div className="min-h-[60vh] mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 text-gray-600">
        Have a question or feedback? Open an issue and well get back to you.
      </p>
      <div className="mt-6">
        <a
          className="inline-flex h-10 items-center rounded-md bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800"
          href={issueUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open a GitHub Issue
        </a>
      </div>

      <div className="mt-10 text-sm text-gray-600">
        Prefer email? You can reach the maintainer via the email on their GitHub profile.
      </div>

      <div className="mt-8">
        <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}



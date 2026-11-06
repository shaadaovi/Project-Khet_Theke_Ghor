import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy · provisional", href: "/privacy" },
  { label: "Terms · provisional", href: "/terms" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-8 bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="text-2xl font-bold text-primary">Khet Theke Ghor</p>
        <p className="mt-4 text-sm text-gray-600">
          Fruits and vegetables, with a clearer connection to their source. An
          illustrative Dhaka selected-zone pilot.
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-primary">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
          {/* Plain text on purpose: the social pages don't exist yet */}
          <li>Facebook / Instagram · not linked</li>
        </ul>

        <p className="mt-6 text-xs leading-5 text-muted">
          Illustrative sample content · Names, photos, prices, availability and
          pilot zones are examples. Static customer UI; no live order, payment
          or delivery service.
        </p>
      </div>
    </footer>
  );
}
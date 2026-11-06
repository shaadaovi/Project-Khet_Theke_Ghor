
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Farmers", href: "/farmers" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5eae3] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#287a45] text-xl font-bold text-white">
            K
          </span>
          <span className="text-xl font-bold tracking-tight text-[#287a45]">
            Khet Theke Ghor
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#287a45]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-[#287a45] hover:bg-[#f5f8f1] sm:block"
          >
            Login
          </Link>

          <Link
            href="/cart"
            className="rounded-lg bg-[#287a45] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1e6036]"
          >
            Cart
          </Link>

          {/* Mobile navigation */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700">
              Menu
            </summary>

            <nav className="absolute right-0 top-12 flex w-52 flex-col gap-1 rounded-xl border border-gray-200 bg-white p-3 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-[#f5f8f1] hover:text-[#287a45]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/login"
                className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-[#f5f8f1]"
              >
                Login
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, MapPin, Search, ShoppingBasket } from "lucide-react";

const topLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Account", href: "/account" },
  { label: "Help", href: "/help" },
];

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Fruits", href: "/shop?category=fruits" },
  { label: "Vegetables", href: "/shop?category=vegetables" },
  { label: "About", href: "/about" },
];

// Temporary sample value until the real cart exists
const cartCount = 2;

function isActive(pathname: string, href: string) {
  if (href.includes("?")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function SearchBox() {
  return (
    <form action="/shop" role="search" className="relative">
      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
      <input
        type="search"
        name="q"
        placeholder="Search fresh produce"
        className="h-11 w-full rounded-lg bg-cream pl-10 pr-4 text-sm outline-none placeholder:text-muted focus:ring-2 focus:ring-primary/30"
      />
    </form>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"en" | "bn">("en");

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* 1. Top bar */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 lg:gap-8 lg:px-8">
          {/* Brand */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/images/logo/logo.svg"
              alt=""
              width={36}
              height={36}
              priority
            />
            <span className="leading-tight">
              <span className="block text-lg font-bold text-primary">
                Khet Theke Ghor
              </span>
              <span className="block text-xs text-muted">ক্ষেত থেকে ঘর</span>
            </span>
          </Link>

          {/* Search (tablet and desktop) */}
          <div className="hidden max-w-md flex-1 md:block">
            <SearchBox />
          </div>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-4 lg:gap-6">
            <nav aria-label="Top" className="hidden items-center gap-6 lg:flex">
              {topLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm transition-colors hover:text-primary ${
                    isActive(pathname, item.href)
                      ? "font-semibold text-primary"
                      : "text-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Language toggle (visual only for now) */}
            <div className="hidden rounded-lg border border-border p-1 text-sm sm:flex">
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={`rounded-md px-3 py-1.5 font-semibold ${
                  lang === "en" ? "bg-mint text-primary" : "text-muted"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("bn")}
                aria-pressed={lang === "bn"}
                className={`rounded-md px-3 py-1.5 ${
                  lang === "bn" ? "bg-mint font-semibold text-primary" : "text-muted"
                }`}
              >
                বাংলা
              </button>
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              <ShoppingBasket className="h-4 w-4" />
              Cart · {cartCount}
            </Link>
          </div>
        </div>

        {/* Search (mobile only) */}
        <div className="px-5 pb-3 md:hidden">
          <SearchBox />
        </div>
      </div>

      {/* 2. Delivery strip */}
      <div className="bg-mint text-xs text-primary">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 lg:px-8">
          <button type="button" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Deliver to Dhanmondi, Dhaka
            <ChevronDown className="h-4 w-4" />
          </button>
          <p className="hidden sm:block">
            Dhaka selected-zone pilot · One farmer per order
          </p>
        </div>
      </div>

      {/* 3. Menu row */}
      <nav aria-label="Main" className="border-b border-border">
        <ul className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-5 py-3 text-sm lg:px-8">
          {menuLinks.map((item) => (
            <li key={item.label} className="shrink-0">
              <Link
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={`whitespace-nowrap transition-colors hover:text-primary ${
                  isActive(pathname, item.href)
                    ? "font-semibold text-primary"
                    : "text-gray-800"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Only on small screens, where the top bar links are hidden */}
          <li className="shrink-0 lg:hidden">
            <Link href="/account" className="text-gray-800 hover:text-primary">
              Account
            </Link>
          </li>
          <li className="shrink-0 lg:hidden">
            <Link href="/help" className="text-gray-800 hover:text-primary">
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
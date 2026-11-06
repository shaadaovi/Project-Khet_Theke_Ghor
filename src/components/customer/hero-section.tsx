import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Text side */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            From local fields to everyday meals
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Fresh from the farm, delivered to your home.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 lg:text-lg">
            Connect directly with farmers for the fruits and vegetables you
            bring to your table. Explore our illustrative pilot for selected
            zones in Dhaka.
          </p>

          <form action="/shop" role="search" className="relative mt-8 max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              name="q"
              placeholder="Search fruit, vegetables or farms"
              className="h-12 w-full rounded-lg border border-border bg-white pl-11 pr-4 text-sm outline-none placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </form>

          <Link
            href="/shop"
            className="mt-5 inline-flex h-12 items-center rounded-lg bg-primary px-7 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Shop Now
          </Link>

          <p className="mt-5 text-xs text-muted">
            One farmer per order. Third-party delivery coordinated by the
            platform.
          </p>
        </div>

        {/* Photo side */}
        <figure>
          <div className="relative aspect-[11/10] overflow-hidden rounded-xl">
            <Image
              src="/images/hero/farm-hero.jpg"
              alt="A woven basket of fresh tomatoes, eggplants and cucumbers on a rustic table"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs text-muted">
            A closer look at the produce, and the people behind it.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
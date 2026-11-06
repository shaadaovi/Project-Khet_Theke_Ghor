import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Fruits",
    description: "Seasonal picks for your table",
    href: "/shop?category=fruits",
    image: "/images/categories/fruits-category.jpg",
    alt: "A woven basket of guavas, papaya and limes",
  },
  {
    name: "Vegetables",
    description: "Everyday ingredients, locally grown",
    href: "/shop?category=vegetables",
    image: "/images/categories/vegetables-category.jpg",
    alt: "A woven basket of okra, eggplants and leafy greens",
  },
];

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
      <h2 className="text-xl font-bold text-primary lg:text-2xl">
        Good food starts with simple ingredients.
      </h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[3/1] overflow-hidden">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {category.description}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-primary" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
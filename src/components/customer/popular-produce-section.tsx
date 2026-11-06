import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/customer/product-card";
import { sampleProducts } from "@/lib/sample-products";

export default function PopularProduceSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl font-bold text-primary lg:text-2xl">
          Popular produce
        </h2>
        <Link
          href="/shop"
          className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          View shop
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <p className="mt-3 text-sm text-gray-600">
        Choose your farm, pack weight and quantity. Availability shown is an
        example, not a live stock feed.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
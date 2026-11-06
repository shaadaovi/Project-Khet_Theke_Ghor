"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Product } from "@/types/product";

const weightOptions = [500, 1000, 2000]; // in grams

function formatWeight(grams: number) {
  return grams < 1000 ? `${grams} g` : `${grams / 1000} kg`;
}

export default function ProductCard({ product }: { product: Product }) {
  const [weight, setWeight] = useState(1000);
  const [packs, setPacks] = useState(1);

  const price = Math.round((product.pricePerKg * weight) / 1000);

  return (
    <article>
      <div className="overflow-hidden rounded-xl border border-border bg-white">
        {/* Photo */}
        <div className="relative aspect-[8/5] overflow-hidden">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          {product.available && (
            <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available
            </span>
          )}
        </div>

        {/* Details */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-muted">
            {product.farmName} · {product.location}
          </p>

          {/* Weight options */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {weightOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setWeight(option)}
                aria-pressed={weight === option}
                className={`rounded-md border py-2 text-xs transition-colors ${
                  weight === option
                    ? "border-primary bg-mint font-semibold text-primary"
                    : "border-border text-gray-700 hover:border-primary"
                }`}
              >
                {formatWeight(option)}
              </button>
            ))}
          </div>

          {/* Price */}
          <p className="mt-4 text-primary">
            <span className="text-xl font-bold">৳{price}</span>
            <span className="ml-1 text-xs text-muted">
              / {formatWeight(weight)}
            </span>
          </p>

          {/* Add to cart (not connected to a real cart yet) */}
          <button
            type="button"
            className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            <Plus className="h-4 w-4" />
            Add to cart
          </button>
        </div>
      </div>

      {/* Pack count */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-muted">Pack count</span>
        <div className="flex items-center overflow-hidden rounded-md border border-border">
          <button
            type="button"
            onClick={() => setPacks((current) => Math.max(1, current - 1))}
            disabled={packs === 1}
            aria-label="Decrease pack count"
            className="flex h-9 w-9 items-center justify-center bg-cream text-gray-700 hover:bg-mint disabled:text-gray-300 disabled:hover:bg-cream"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center text-sm">{packs}</span>
          <button
            type="button"
            onClick={() => setPacks((current) => Math.min(20, current + 1))}
            disabled={packs === 20}
            aria-label="Increase pack count"
            className="flex h-9 w-9 items-center justify-center text-gray-700 hover:bg-mint disabled:text-gray-300 disabled:hover:bg-white"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
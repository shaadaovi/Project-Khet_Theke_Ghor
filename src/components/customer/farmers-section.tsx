import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { sampleFarmers } from "@/lib/sample-farmers";

export default function FarmersSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
      <h2 className="text-xl font-bold text-primary lg:text-2xl">
        Meet our farmers
      </h2>
      <p className="mt-3 text-sm text-gray-600">
        Sample farmer profiles. The people shown are illustrative, not verified
        marketplace identities.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {sampleFarmers.map((farmer) => (
          <article
            key={farmer.id}
            className="rounded-xl border border-border bg-white p-5 lg:p-6"
          >
            <div className="flex gap-4">
              {/* Portrait */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={farmer.image}
                  alt={farmer.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              {/* Name and location */}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {farmer.farmName}
                  </h3>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-md bg-mint px-2 py-1 text-xs font-medium text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Farmer
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-700">
                  {farmer.personName} · sample farmer
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5" />
                  {farmer.location}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              {farmer.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                href={`/farmers/${farmer.id}`}
                className="rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                View farm &amp; products
              </Link>
              <p className="text-xs text-muted">
                Source details are supplied by the farmer.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
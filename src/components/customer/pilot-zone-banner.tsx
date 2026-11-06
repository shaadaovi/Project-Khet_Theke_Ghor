import Link from "next/link";

export default function PilotZoneBanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
      <div className="rounded-xl border border-primary/10 bg-mint px-6 py-6 lg:px-8">
        <h2 className="text-xl font-bold text-primary">
          Is your address in the pilot zone?
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-gray-800">
          Dhanmondi, Mohammadpur and Mirpur are illustrative selected-zone
          examples, not all-Dhaka coverage. Confirm the supported area and
          delivery estimate at checkout.
        </p>
        <Link
          href="/delivery-areas"
          className="mt-5 inline-flex h-11 items-center rounded-md border border-border bg-white px-6 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
        >
          Check delivery areas
        </Link>
      </div>
    </section>
  );
}
const benefits = [
  {
    title: "Direct connection",
    description: "Know the farmer and farm location behind your order.",
  },
  {
    title: "Fresh produce",
    description:
      "Browse seasonal fruits and vegetables supplied and packed by the farmer.",
  },
  {
    title: "Convenient delivery",
    description:
      "The platform coordinates a manually assigned third-party delivery partner.",
  },
  {
    title: "Transparent prices",
    description:
      "See pack prices, quantities and the delivery estimate before you confirm.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
      <div className="rounded-xl bg-cream px-6 py-8 lg:px-10 lg:py-10">
        <h2 className="text-xl font-bold text-primary lg:text-2xl">
          Why choose Khet Theke Ghor?
        </h2>

        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title}>
              <h3 className="text-lg font-semibold text-primary">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
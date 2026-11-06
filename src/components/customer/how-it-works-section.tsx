const steps = [
  {
    number: "01",
    title: "Find your produce",
    description: "Browse fruits and vegetables and check the farm source.",
  },
  {
    number: "02",
    title: "Build one farm’s order",
    description: "Choose predefined weights and the number of packs.",
  },
  {
    number: "03",
    title: "Review & confirm",
    description: "Check your selected-zone address, totals and payment choice.",
  },
  {
    number: "04",
    title: "Follow your order",
    description: "See farmer preparation and third-party delivery updates.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
      <h2 className="text-xl font-bold text-primary lg:text-2xl">
        From your first pick to your front door.
      </h2>

      <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.number}>
            <span className="text-3xl font-light text-primary/70">
              {step.number}
            </span>
            <h3 className="mt-3 text-base font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
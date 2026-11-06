
import SiteHeader from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center px-5 text-center">
        <p className="mb-4 font-semibold text-[#287a45]">
          FROM FARM TO YOUR HOME
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Fresh from Farmers,
          <span className="text-[#287a45]"> Straight to Your Home.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Discover fresh fruits and vegetables sourced directly from farmers.
          Better freshness, fair prices, and a stronger connection to agriculture.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/shop"
            className="rounded-lg bg-[#287a45] px-6 py-3 font-semibold text-white hover:bg-[#1e6036]"
          >
            Explore Products
          </a>

          <a
            href="/farmers"
            className="rounded-lg border border-[#287a45] px-6 py-3 font-semibold text-[#287a45] hover:bg-[#f5f8f1]"
          >
            Become a Farmer
          </a>
        </div>
      </main>
    </>
  );
}

import SiteHeader from "@/components/layout/site-header";
import HeroSection from "@/components/customer/hero-section";
import CategorySection from "@/components/customer/category-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CategorySection />
      </main>
    </>
  );
}
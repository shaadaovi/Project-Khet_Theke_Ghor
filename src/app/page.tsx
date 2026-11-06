import SiteHeader from "@/components/layout/site-header";
import HeroSection from "@/components/customer/hero-section";
import CategorySection from "@/components/customer/category-section";
import PopularProduceSection from "@/components/customer/popular-produce-section";
import WhyChooseSection from "@/components/customer/why-choose-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CategorySection />
        <PopularProduceSection />
        <WhyChooseSection />
      </main>
    </>
  );
}
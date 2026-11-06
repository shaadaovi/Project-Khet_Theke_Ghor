import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import HeroSection from "@/components/customer/hero-section";
import CategorySection from "@/components/customer/category-section";
import PopularProduceSection from "@/components/customer/popular-produce-section";
import WhyChooseSection from "@/components/customer/why-choose-section";
import FarmersSection from "@/components/customer/farmers-section";
import HowItWorksSection from "@/components/customer/how-it-works-section";
import PilotZoneBanner from "@/components/customer/pilot-zone-banner";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CategorySection />
        <PopularProduceSection />
        <WhyChooseSection />
        <FarmersSection />
        <HowItWorksSection />
        <PilotZoneBanner />
      </main>
      <SiteFooter />
    </>
  );
}
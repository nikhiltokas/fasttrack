import Wrapper from "@/components/providers/Wrapper";
import Navbar from "@/components/fragments/Navbar";
import Hero from "@/components/layout/landing/Hero";
import Section1 from "@/components/layout/landing/Section-1";
import FeaturedServices from "@/components/layout/landing/Section-2-FeaturedServices";
import Testimonials from "@/components/layout/landing/Section-3-Testimonials";
import SectionFAQ from "@/components/layout/landing/Section-4-FAQ";
import Footer from "@/components/fragments/Footer";
import { LogoMarquee } from "@/components/layout/landing/Section-5-LogoMarquee";
import SectionCTA from "@/components/layout/landing/Section-6-CTA";
import TruckRepairForm from "@/components/layout/landing/Section-7-Form";

const HomePage = () => {
  return (
    <Wrapper className="space-y-32 relative">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Section1 />
      <FeaturedServices id="featured-services" />
      <Testimonials />
      <SectionFAQ />
      <TruckRepairForm id="truck-repair-form" />
      <LogoMarquee />
      <SectionCTA />
      <Footer />
    </Wrapper>
  );
};

export default HomePage;

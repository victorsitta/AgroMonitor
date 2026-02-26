import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import FeaturesSection from "@/components/landing/FeaturesSection";
import GrainsSection from "@/components/landing/GrainsSection";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <FeaturesSection />
    <GrainsSection />
    <StatsSection />
    <TestimonialsSection />
    <PricingSection />
    <Footer />
  </div>
);

export default Index;

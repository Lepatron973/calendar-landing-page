import HeroSection from "@/components/HeroSection";
import EmotionalSection from "@/components/EmotionalSection";
import ProductDescription from "@/components/ProductDescription";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EmotionalSection />
      <ProductDescription />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;

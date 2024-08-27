import { FAQSection } from "../components/section/FAQSection";
import { HomeHeroSection } from "../components/section/HomeHeroSection";
import { WhyUsSection } from "../components/section/WhyUsSection";

export const Home = () => {
  return (
    <div className="mt-16">
      <HomeHeroSection />
      <WhyUsSection />
      <FAQSection />
    </div>
  );
};

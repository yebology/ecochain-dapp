import { FAQSection } from "../components/section/FAQSection";
import { HomeHeroSection } from "../components/section/HomeHeroSection";
import { ReviewSection } from "../components/section/ReviewSection";
import { WhyUsSection } from "../components/section/WhyUsSection";

export const Home = () => {
  return (
    <div className="mt-16">
      <HomeHeroSection />
      <WhyUsSection />
      <ReviewSection />
      <FAQSection />
    </div>
  );
};

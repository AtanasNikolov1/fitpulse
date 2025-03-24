import FeaturesSection from "../components/features/home/FeaturesSection";
import HomeHeroSection from "../components/features/home/HomeHeroSection";
import TestimonialsSection from "../components/features/home/TestimonialsSection";

const Home = () => {
  return (
    <main className="bg-light-gray pb-12 md:pb-17">
      <HomeHeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;

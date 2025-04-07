import ProgressHeroSection from "../components/features/progress/ProgressHeroSection";
import WeightTracker from "../components/features/progress/weight/WeightTracker";
import SleepTracker from "../components/features/progress/sleep/SleepTracker";
import StepsTracker from "../components/features/progress/steps/StepsTracker";
import WaterTracker from "../components/features/progress/water/WaterTracker";

const ProgressPage = () => {
  return (
    <main className="w-full">
      <ProgressHeroSection />
      <div className="flex flex-col gap-14 md:gap-20 py-6 px-5 md:p-10">
        <WeightTracker />
        <StepsTracker />
        <SleepTracker />
        <WaterTracker />
      </div>
    </main>
  );
};

export default ProgressPage;

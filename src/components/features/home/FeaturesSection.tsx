import { BarChart, Dumbbell, Target, Users, ChefHat, Bell } from "lucide-react"; // Import the icons from Lucide React
import Feature from "./Feature";

const FeaturesSection = () => {
  return (
    <section className="bg-light-gray py-16 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl  md:text-4xl font-extrabold mb-14 md:mb-17 lg:mb-20  text-soft-violet tracking-wide">
          Features Designed for Your Progress
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          <Feature
            title="Dashboard"
            description="Get a clear view of your progress and track your goals all in one place."
          >
            <BarChart size={50} />
          </Feature>

          <Feature
            title="Track Workouts"
            description="Log your exercises, track your performance, and improve your
              fitness level."
          >
            <Dumbbell size={50} />
          </Feature>

          <Feature
            title="Nutrition Tracking"
            description="Track your meals and monitor your calories, macros, and more to stay on track."
          >
            <ChefHat size={50} />
          </Feature>

          <Feature
            title="Set Fitness Goals"
            description="Set personalized fitness goals and track your progress towards achieving them."
          >
            <Target size={50} />
          </Feature>

          <Feature
            title="Reminders & Notifications"
            description="Stay on track with timely reminders for workouts, meals, and hydration."
          >
            <Bell size={50} />
          </Feature>

          <Feature
            title="Social Features"
            description="Connect with a community, share progress, and stay motivated
              together."
          >
            <Users size={50} />
          </Feature>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

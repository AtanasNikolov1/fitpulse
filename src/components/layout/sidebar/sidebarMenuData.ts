import {
  BarChart,
  Dumbbell,
  LucideProps,
  Settings,
  Trophy,
  Utensils,
} from "lucide-react";

export type MenuItem = {
  name: string;
  icon: React.ComponentType<LucideProps>;
  link: string;
};

export const menuItems: MenuItem[] = [
  { name: "Progress", icon: BarChart, link: "/dashboard/progress" },
  { name: "Workouts", icon: Dumbbell, link: "/dashboard/workouts" },
  { name: "Calorie Tracker", icon: Utensils, link: "/dashboard/calories" },
  { name: "Achievements", icon: Trophy, link: "/dashboard/achievements" },
  { name: "Settings", icon: Settings, link: "/dashboard/settings" },
];

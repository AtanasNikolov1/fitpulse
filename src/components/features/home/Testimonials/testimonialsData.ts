export type Testimonial = {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  imageUrl: string;
  name: string;
  rating: number;
  description: string;
};

export const testimonialsData: Testimonial[] = [
  {
    backgroundColor: "bg-purple-200",
    textColor: "text-dark-charcoal",
    borderColor: "border-dark-gray",

    imageUrl: "/images/jane_smith-avatar.jpg",
    name: "Jane Smith",
    rating: 4,
    description:
      "I love the community feature! It's great to share progress and keep each other motivated.",
  },
  {
    backgroundColor: "bg-purple-400",
    textColor: "text-pure-white",
    borderColor: "border-pure-white",
    imageUrl: "/images/emma_wilson-avatar.jpg",
    name: "Emma Wilson",
    rating: 5,
    description:
      "The dashboard is extremely helpful for tracking my progress. It’s easy to use and visually motivating!",
  },
  {
    backgroundColor: "bg-gray-500",
    textColor: "text-pure-white",
    borderColor: "border-pure-white",

    imageUrl: "/images/john_doe-avatar.jpg",
    name: "John Doe",
    rating: 5,
    description:
      "This app has completely transformed my fitness journey! The tracking tools are amazing and keep me on track every day.",
  },
  {
    backgroundColor: "bg-zinc-200",
    textColor: "text-dark-charcoal",
    borderColor: "border-dark-gray",
    imageUrl: "/images/mark_taylor-avatar.jpg",
    name: "Mark Taylor",
    rating: 5,
    description:
      "The nutrition tracking is phenomenal. It helps me stay on top of my meal plan and achieve my health goals.",
  },
];

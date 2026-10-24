export type SocialService = {
  id: string;
  name: string;
  platform: string;
  description: string;
  price: number;
  duration: string;
};

export const socialServices: SocialService[] = [
  {
    id: "social-001",
    name: "Facebook Page Setup",
    platform: "Facebook",
    description: "Business page creation and basic configuration.",
    price: 1000,
    duration: "One time",
  },
  {
    id: "social-002",
    name: "Instagram Business Setup",
    platform: "Instagram",
    description: "Business profile setup and profile optimization.",
    price: 1000,
    duration: "One time",
  },
  {
    id: "social-003",
    name: "YouTube Thumbnail Design",
    platform: "YouTube",
    description: "Custom thumbnail design for your videos.",
    price: 500,
    duration: "Per thumbnail",
  },
  {
    id: "social-004",
    name: "Short Video Editing",
    platform: "All Platforms",
    description: "Edit short videos for social media.",
    price: 800,
    duration: "Per video",
  },
  {
    id: "social-005",
    name: "Instagram Reels Editing",
    platform: "Instagram",
    description: "Short-form video editing for Reels.",
    price: 1000,
    duration: "Per reel",
  },
  {
    id: "social-006",
    name: "Social Media Post Design",
    platform: "All Platforms",
    description: "Custom graphics for business social accounts.",
    price: 300,
    duration: "Per post",
  },
  {
    id: "social-007",
    name: "Facebook Ads Setup",
    platform: "Facebook",
    description: "Campaign configuration and audience setup.",
    price: 2000,
    duration: "Per campaign setup",
  },
  {
    id: "social-008",
    name: "Meta Ads Management",
    platform: "Facebook & Instagram",
    description: "Campaign monitoring and optimization.",
    price: 5000,
    duration: "Monthly",
  },
  {
    id: "social-009",
    name: "YouTube SEO",
    platform: "YouTube",
    description: "Video title, description, and keyword optimization.",
    price: 1500,
    duration: "Per video",
  },
  {
    id: "social-010",
    name: "Social Media Management",
    platform: "All Platforms",
    description: "Content planning and account management.",
    price: 10000,
    duration: "Monthly",
  },
  {
    id: "social-011",
    name: "TikTok Video Editing",
    platform: "TikTok",
    description: "Edit short-form videos for TikTok.",
    price: 800,
    duration: "Per video",
  },
  {
    id: "social-012",
    name: "LinkedIn Business Page Setup",
    platform: "LinkedIn",
    description: "Professional business page setup.",
    price: 1500,
    duration: "One time",
  },
];
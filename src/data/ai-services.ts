export type AIService = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  type: "service" | "subscription" | "course";
};

export const aiServices: AIService[] = [
  {
    id: "ai-001",
    name: "AI Writing Assistance",
    category: "AI Writing",
    description: "AI-assisted writing and content improvement.",
    price: 300,
    duration: "Per task",
    type: "service",
  },
  {
    id: "ai-002",
    name: "AI Image Generation",
    category: "AI Images",
    description: "Create AI-generated images for your projects.",
    price: 500,
    duration: "Per project",
    type: "service",
  },
  {
    id: "ai-003",
    name: "AI Video Creation",
    category: "AI Video",
    description: "AI-assisted video creation for digital content.",
    price: 800,
    duration: "Per video",
    type: "service",
  },
  {
    id: "ai-004",
    name: "AI Voice Generation",
    category: "AI Audio",
    description: "Generate voiceovers for videos and presentations.",
    price: 400,
    duration: "Per project",
    type: "service",
  },
  {
    id: "ai-005",
    name: "Prompt Engineering",
    category: "AI Tools",
    description: "Custom prompts for writing, images, and workflows.",
    price: 500,
    duration: "Per project",
    type: "service",
  },
  {
    id: "ai-006",
    name: "AI Automation Setup",
    category: "Automation",
    description: "Set up an AI-assisted workflow for your business.",
    price: 2000,
    duration: "Per setup",
    type: "service",
  },
  {
    id: "ai-007",
    name: "AI Website Integration",
    category: "Development",
    description: "Integrate supported AI functionality into a website.",
    price: 3000,
    duration: "Per project",
    type: "service",
  },
  {
    id: "ai-008",
    name: "Cloud Setup Assistance",
    category: "Cloud",
    description: "Help with cloud configuration and deployment.",
    price: 1500,
    duration: "Per setup",
    type: "service",
  },
  {
    id: "ai-009",
    name: "AI Content Package",
    category: "AI Writing",
    description: "AI-assisted content creation for your business.",
    price: 1000,
    duration: "Per package",
    type: "service",
  },
  {
    id: "ai-010",
    name: "AI Research Assistance",
    category: "AI Tools",
    description: "Organize research and summarize supplied material.",
    price: 1000,
    duration: "Per project",
    type: "service",
  },
];
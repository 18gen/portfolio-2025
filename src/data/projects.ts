export interface ProjectEntry {
  id: string;
  title: string;
  video: string;
  technologies: {
    name: string;
    colorPalette: string;
  }[];
  description: string;
  sourceUrl?: string;
}

export const projects: ProjectEntry[] = [
  {
    id: "meta-connect",
    title: "Meta Connect",
    video: "projects/metaConnect.mp4",
    technologies: [
      { name: "Next.js", colorPalette: "blue" },
      { name: "Nebius", colorPalette: "red" },
      { name: "Llama 3.2", colorPalette: "green" },
    ],
    description:
      "Platform where AI agents copy your communication style and chat on your behalf with other AI agents. They randomly match you, measure compatibility, and even suggest what to say next—making it easy to start talking to new people.",
    sourceUrl: "https://github.com/Ri-Hong/Meta-Connect",
  },
  {
    id: "live-story",
    title: "LiveStory",
    video: "projects/liveStory.mp4",
    technologies: [
      { name: "Reflex", colorPalette: "blue" },
      { name: "Python", colorPalette: "red" },
      { name: "Vapi API", colorPalette: "green" },
    ],
    description:
      "An interactive storybook where characters come to life, letting children engage with them in real time to explore emotions and ask questions. With AI voice-to-voice pipelines, readers can feel the emotion of their characters.",
    sourceUrl: "https://github.com/pranavbedi/LiveStory",
  },
  {
    id: "memory-lane",
    title: "Y+Our Memory Lane",
    video: "projects/memoryLane.mp4",
    technologies: [
      { name: "HTML/CSS", colorPalette: "blue" },
      { name: "django", colorPalette: "red" },
      { name: "googleMap/Cohere API", colorPalette: "green" },
    ],
    description:
      "Crafted during UofTHack11 with a theme of Nostalgia, it showcases street view in time lapse at the exact same perspective. It also tells stories about the location's landmarks and history, enhancing the nostalgic journey. Users can also contribute personal snapshots and tales, merging 'your and our' memory lanes into a shared narrative.",
    sourceUrl: "https://github.com/18gen/UofTHacks2024",
  },
  {
    id: "sustainable-chef",
    title: "Sustainable Chef",
    video: "projects/receiptGenerator.mp4",
    technologies: [
      { name: "HTML/CSS", colorPalette: "blue" },
      { name: "Flask", colorPalette: "red" },
      { name: "OpenAI/DALL-E API", colorPalette: "green" },
    ],
    description:
      "Cooking assistant web-app built at Hack the Change that helps reduce food waste, by tracking the expiry dates of groceries and suggesting recipes using those ingredients. Based on the recipes, it also generates a resulting image and transforms leftover management into a creative and sustainable culinary experience.",
    sourceUrl: "https://github.com/18gen/receipt-generator",
  },
  {
    id: "chess-game",
    title: "Chess Game",
    video: "projects/chessGame.mp4",
    technologies: [
      { name: "XQuartz", colorPalette: "blue" },
      { name: "C++", colorPalette: "red" },
    ],
    description:
      "The chess game, built exclusively with C++ for CS246 group project, features AI players(levels 1 to 4) and includes graphics using XQuartz. *The source code is not shareable due to academic policies",
  },
];

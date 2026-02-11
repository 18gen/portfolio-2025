export interface WorkEntry {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  image: string;
  dateRange: string;
  technologies: {
    name: string;
    colorPalette: string;
  }[];
  responsibilities: string[];
}

export const works: WorkEntry[] = [
  {
    id: "woven",
    title: "Software Engineer Intern, Arene Simulation",
    company: "Woven by Toyota",
    companyUrl: "https://woven.toyota/en",
    image: "works/wovenByToyota.png",
    dateRange: "June - August 2025",
    technologies: [
      { name: "Python", colorPalette: "yellow" },
      { name: "Blender", colorPalette: "orange" },
      { name: "Unreal Engine", colorPalette: "purple" },
    ],
    responsibilities: [
      "Built a pipeline to convert 3D models from Blender into Unreal Engine and RoadRunner for asset and scenario creation",
      "Developed vehicle model validation tooling (body, wheels, paint), uncovering issues in 95% of existing assets",
      "Designed a customizable shell-based workflow with modular YAML configuration files for conversion/validation setup",
    ],
  },
  {
    id: "mics",
    title: "Software Developer Intern",
    company: "Medical Informatics Co., Ltd.",
    companyUrl: "https://homis-mics.jp",
    image: "works/mics.jpg",
    dateRange: "May 2024 - Present",
    technologies: [
      { name: "Next.js", colorPalette: "blue" },
      { name: "Ruby on Rails", colorPalette: "red" },
      { name: "Rest API", colorPalette: "purple" },
    ],
    responsibilities: [
      "Built an electronic medical record system for 100+ home health care clinics (30,000+ patients) in Japan",
      "Refactored and optimized AI-based documentation functions, reducing operational costs by 97%",
      "Designed a statistical tool with charts, data tables, and CSV downloads extracted from medical records to analyze clinic management indicators",
    ],
  },
  {
    id: "geesehacks",
    title: "Founder/Director of Hackathon Organization",
    company: "GeeseHacks",
    companyUrl: "https://www.geesehacks.com",
    image: "works/geesehacks.jpg",
    dateRange: "January 2024 - Present",
    technologies: [{ name: "Management", colorPalette: "green" }],
    responsibilities: [
      "Leading a team of 40 members in organizing a 300-participant hackathon on Jan. 25-26, 2025",
      "Scured $22k from industry giants such as Google, SunLife, and CS-CAN",
    ],
  },
  {
    id: "kagayaki",
    title: "System Management Intern",
    company: "Medical Corporation Kagayaki",
    companyUrl: "https://www.sogo-zaitaku.jp",
    image: "works/kagayaki.jpg",
    dateRange: "July - August 2022",
    technologies: [{ name: "JavaScript", colorPalette: "red" }],
    responsibilities: [
      "Developed and implemented QR code tracking system for blood containers used in transfusions",
      "Streamlined the process with a flowchart, enabling the first home blood transfusions in province",
      "The system is now implemented in several clinics, and over 100 patients have received blood transfusions at home",
    ],
  },
];

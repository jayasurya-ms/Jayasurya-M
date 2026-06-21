import ProjectGrid from "../components/ProjectGrid";

// Embedded Projects data replacing data.json
const projectsData = [
  {
    id: "p1",
    title: "3 Concept Building Solutions (CRM and Web-App)",
    category: "CRM & Web-App • April 2026",
    description:
      "Developed CRM and web application features using React.js (functional components, hooks). Built responsive and reusable UI components, including tables, filters, and reporting interfaces. Integrated RESTful APIs for dynamic data handling and ensured performance optimization and cross-browser compatibility.\n\nKey Achievement: Gained hands-on experience in API integration and scalable UI development, and contributed to building efficient CRM dashboards and reporting workflows.",
    tech_stack: [
      "React.js",
      "HTML",
      "Tailwind CSS",
      "shadcn/ui",
      "react-router-dom",
      "Axios",
    ],
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "",
  },
  {
    id: "p2",
    title: "Square-M Reality",
    category: "Client Project • Feb 2026",
    description:
      "Developed a business website from figma design approved by the client.\n\nKey Achievement: Gained knowledge about how to develop from Figma assets and fetch/render data using Axios API, establishing a fully responsive and user-friendly interface.",
    tech_stack: [
      "React.js",
      "HTML",
      "Tailwind CSS",
      "GSAP",
      "react-router-dom",
      "react-helmet",
    ],
    image_url:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://squaremrealty.com",
  },
  {
    id: "p3",
    title: "Fortune Trading Academy",
    category: "Company Website • Jan 2026",
    description:
      "Focused on studying the existing codebase to identify, debug, and resolve layout bugs while enhancing SEO performance.\n\nKey Achievement: Gained knowledge about global context, codebase debugging, and successfully optimized SEO metadata (sitemap.xml, custom tags, schema.org configuration).",
    tech_stack: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    image_url:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://fortunetradingacademy.com",
  },
  {
    id: "p4",
    title: "DS Preschool",
    category: "Societal Project • April 2025",
    description:
      "Created an interactive preschool website to improve outreach and parent engagement.\n\nKey Achievement: Successfully deployed the platform with a responsive and user-friendly interface at dspreschool.netlify.app.",
    tech_stack: ["React.js", "HTML", "CSS", "Bootstrap"],
    image_url:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://dspreschool.netlify.app",
  },
  {
    id: "p5",
    title: "Adaptive Course Recommendation System",
    category: "Full Stack & AI • Sept 2025",
    description:
      "Developed a full stack adaptive course recommendation system to personalize learning based on user profiles & engagement metrics.\n\nKey Achievement: Built a real-time recommendation platform addressing cold start and feedback loop challenges, enhancing learner experience and outcomes using Gemini Pro and ChatGPT.",
    tech_stack: [
      "Flask(Python)",
      "React.js",
      "MongoDB",
      "LightGBM",
      "Cursor",
      "Gemini",
      "GPT",
    ],
    image_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "",
  },
  {
    id: "p6",
    title: "TechMart",
    category: "Internship Project • Jan 2025",
    description:
      "Built an eCommerce platform to showcase and manage tech products online.\n\nKey Achievement: Developed a fully functional, responsive shopping site with dynamic product handling.",
    tech_stack: ["React.js", "HTML", "CSS", "Bootstrap", "MongoDB"],
    image_url:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "",
  },
];

export default function Projects() {
  return (
    <div className="pt-24 min-h-screen bg-transparent">
      {/* 
        Pass embedded project data downwards as props instead of 
        having the deeply nested component import a JSON file. 
      */}
      <ProjectGrid projects={projectsData} />
    </div>
  );
}

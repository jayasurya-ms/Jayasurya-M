import ProjectGrid from "../components/ProjectGrid";
import p1image from "../assets/3cbs.png";
import p2image from "../assets/squar.jpeg";
import p3image from "../assets/fortune.png";
import p4image from "../assets/ds.png";
import p5image from "../assets/course.png";
import p6image from "../assets/littl.jpeg";
import p7image from "../assets/tech.png";

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
    image_url: p1image,
    github_url:
      "https://github.com/jayasurya-ms/3Concepts-Building-Solutions-crm",
    live_url: "https://3concepts.in/",
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
    image_url: p2image,
    github_url: "https://github.com/jayasurya-ms/Square-M-Reality",
    live_url: "https://squaremrealty.com",
  },
  {
    id: "p3",
    title: "Fortune Trading Academy",
    category: "Company Website • Jan 2026",
    description:
      "Focused on studying the existing codebase to identify, debug, and resolve layout bugs while enhancing SEO performance.\n\nKey Achievement: Gained knowledge about global context, codebase debugging, and successfully optimized SEO metadata (sitemap.xml, custom tags, schema.org configuration).",
    tech_stack: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    image_url: p3image,
    github_url: "https://github.com/jayasurya-ms/Fortune-Trading-Academy",
    live_url: "https://fortunetradingacademy.com",
  },
  {
    id: "p4",
    title: "DS Preschool",
    category: "Societal Project • April 2025",
    description:
      "Created an interactive preschool website to improve outreach and parent engagement.\n\nKey Achievement: Successfully deployed the platform with a responsive and user-friendly interface at dspreschool.netlify.app.",
    tech_stack: ["React.js", "HTML", "CSS", "Bootstrap"],
    image_url: p4image,
    github_url: "https://github.com/jayasurya-ms/D.S-Preschool",
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
    image_url: p5image,
    github_url:
      "https://github.com/jayasurya-ms/E-course-recommendation-system",
    live_url: "",
  },
  {
    id: "p6",
    title: "Little Champs Gurukulam",
    category: "Societal Project • May 2025",
    description:
      "Created an interactive preschool website to improve outreach and parent engagement.\n\nKey Achievement: Successfully deployed the platform with a responsive and user-friendly interface.",
    tech_stack: ["React.js", "HTML", "CSS", "Bootstrap"],
    image_url: p6image,
    github_url: "https://github.com/jayasurya-ms/Little-Champs",
    live_url: "https://littlechampsgurukulam.netlify.app/",
  },
  {
    id: "p7",
    title: "TechMart",
    category: "Internship Project • Jan 2025",
    description:
      "Built an eCommerce platform to showcase and manage tech products online.\n\nKey Achievement: Developed a fully functional, responsive shopping site with dynamic product handling.",
    tech_stack: ["React.js", "HTML", "CSS", "Bootstrap", "MongoDB"],
    image_url: p7image,
    github_url: "https://github.com/jayasurya-ms/Tech-Mart",
    live_url: "",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#09041a] via-[#150a2e] to-[#0c061e] relative z-10 w-full overflow-hidden">
      {/* Top glowing gradient divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-violet-500/30 to-transparent z-10" />

      {/* Decorative ambient glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/15 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="pt-20 md:pt-25">
        {/* 
          Pass embedded project data downwards as props instead of 
          having the deeply nested component import a JSON file. 
        */}
        <ProjectGrid
          projects={projectsData}
          lightTheme={false}
          title="All My Works"
        />
      </div>
    </div>
  );
}

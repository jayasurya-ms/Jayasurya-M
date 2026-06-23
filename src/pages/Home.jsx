import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectGrid from "../components/ProjectGrid";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import p1image from "../assets/3cbs.png";
import p2image from "../assets/square.png";
import p4image from "../assets/ds.png";

// Embedded Projects data for Home Page (Top 3 projects)
const featuredProjects = [
  {
    id: "p1",
    title: "3 Concept Building Solutions",
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
    title: "SquareM Reality",
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
    title: "DS Preschool",
    category: "Societal Project • April 2025",
    description:
      "Created an interactive preschool website to improve outreach and parent engagement.\n\nKey Achievement: Successfully deployed the platform with a responsive and user-friendly interface at dspreschool.netlify.app.",
    tech_stack: ["React.js", "HTML", "CSS", "Bootstrap"],
    image_url: p4image,
    github_url: "https://github.com/jayasurya-ms/D.S-Preschool",
    live_url: "https://dspreschool.netlify.app",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* The Hero component contains the main introduction and static background effect */}
      <Hero />

      {/* The Skills component highlights the technical stack */}
      <Skills />

      {/* Services Section */}
      <Services />

      {/* Experience Timeline */}
      <Experience />

      {/* Featured Projects logic right on the Home component itself */}
      <ProjectGrid projects={featuredProjects} showViewAll={true} lightTheme={true} />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action Banner */}
      <CallToAction />
    </div>
  );
}

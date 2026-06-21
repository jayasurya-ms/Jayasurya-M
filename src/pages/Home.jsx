import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectGrid from "../components/ProjectGrid";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

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
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "",
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
    image_url:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://squaremrealty.com",
  },
  {
    id: "p3",
    title: "Fortune Trading Academy",
    category: "Merida Tech Minds Company Website • Feb 2026",
    description:
      "Focused on studying the existing codebase to identify, debug, and resolve layout bugs while enhancing SEO performance.\n\nKey Achievement: Gained knowledge about global context, codebase debugging, and successfully optimized SEO metadata (sitemap.xml, custom tags, schema.org configuration).",
    tech_stack: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    image_url:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://fortunetradingacademy.com",
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

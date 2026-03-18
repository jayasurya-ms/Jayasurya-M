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
    title: "Aether E-Commerce Engine",
    category: "Fullstack Platform",
    description:
      "A highly scalable e-commerce backend built with Python and FastAPI, serving a lightning-fast React frontend.",
    tech_stack: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    image_url:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://example.com",
  },
  {
    id: "p2",
    title: "Lumina Data Pipeline",
    category: "Data Architecture",
    description:
      "An automated ETL pipeline that processes terabytes of analytics data, visualized through a secure React dashboard.",
    tech_stack: ["Python", "Apache Kafka", "React", "AWS"],
    image_url:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://example.com",
  },
  {
    id: "p3",
    title: "Nexus Financial App",
    category: "Web Application",
    description:
      "Secure, real-time financial tracking dashboard backed by a Django REST framework and Redux state management.",
    tech_stack: ["Django", "React", "Redux", "Docker"],
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://example.com",
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
      <ProjectGrid projects={featuredProjects} showViewAll={true} />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action Banner */}
      <CallToAction />
    </div>
  );
}

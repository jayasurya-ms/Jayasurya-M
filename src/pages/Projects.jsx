import ProjectGrid from "../components/ProjectGrid";

// Embedded Projects data replacing data.json
const projectsData = [
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
  {
    id: "p4",
    title: "Quantum Real Estate",
    category: "Web Application",
    description:
      "A highly performant property listing platform with an AI-driven matching algorithm built in Python.",
    tech_stack: ["React", "Python", "Flask", "Elasticsearch"],
    image_url:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://example.com",
  },
  {
    id: "p5",
    title: "Horizon Task Manager",
    category: "Productivity Tool",
    description:
      "A collaborative task management workspace featuring kanban boards and WebSockets for real-time synchronization.",
    tech_stack: ["Next.js", "Django Channels", "Redis"],
    image_url:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://example.com",
  },
  {
    id: "p6",
    title: "Echo Analytics API",
    category: "Backend System",
    description:
      "A serverless microservice architecture scraping and analyzing social sentiment using Python NLP libraries.",
    tech_stack: ["Python", "AWS Lambda", "spaCy", "React"],
    image_url:
      "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1600&auto=format&fit=crop",
    github_url: "https://github.com/",
    live_url: "https://example.com",
  },
];

export default function Projects() {
  return (
    <div className="pt-24 min-h-screen bg-zinc-950">
      {/* 
        Pass embedded project data downwards as props instead of 
        having the deeply nested component import a JSON file. 
      */}
      <ProjectGrid projects={projectsData} />
    </div>
  );
}

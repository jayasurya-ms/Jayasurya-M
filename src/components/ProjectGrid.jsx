// Updated ProjectGrid to accept data as props instead of importing it directly.

import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// This allows the page components to provide the data natively.
export default function ProjectGrid({ projects = [], showViewAll = false }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-12 md:py-32 px-6 lg:px-24 bg-transparent relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-24 text-white">
          Selected Works
        </h2>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-32 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-medium tracking-wide hover:bg-white/10 hover:border-indigo-400/50 hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] transition-all duration-300"
            >
              <span>Explore Complete Archive</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-indigo-400" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

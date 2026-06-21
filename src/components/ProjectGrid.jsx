// Updated ProjectGrid to accept data as props instead of importing it directly.

import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// This allows the page components to provide the data natively.
export default function ProjectGrid({
  projects = [],
  showViewAll = false,
  lightTheme = false,
}) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const button = buttonRef.current;

    if (!heading) return;

    // Heading bottom-to-top reveal animation
    const headingAnim = gsap.fromTo(
      heading,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    let buttonAnim = null;
    if (button) {
      // Button bottom-to-top reveal animation
      buttonAnim = gsap.fromTo(
        button,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: button,
            start: "top 65%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }

    return () => {
      if (headingAnim.scrollTrigger) headingAnim.scrollTrigger.kill();
      headingAnim.kill();
      if (buttonAnim) {
        if (buttonAnim.scrollTrigger) buttonAnim.scrollTrigger.kill();
        buttonAnim.kill();
      }
    };
  }, [showViewAll, projects]);

  if (!projects || projects.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className={`py-12 md:py-20 px-6 lg:px-24 relative z-10 w-full overflow-hidden transition-colors duration-500 ${
        lightTheme
          ? "bg-linear-to-b from-[#09041a] via-[#150a2e] to-[#0c061e] border-t border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {lightTheme && (
        <>
          {/* Top glowing gradient divider line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-violet-500/30 to-transparent z-10" />
          {/* Bottom glowing gradient divider line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-fuchsia-500/25 to-transparent z-10" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/15 rounded-full blur-[100px] pointer-events-none z-0" />
        </>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-10 md:mb-20 text-white"
        >
          Selected Works
        </h2>

        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              lightTheme={lightTheme}
            />
          ))}
        </div>

        {showViewAll && (
          <div ref={buttonRef} className="mt-15 flex justify-center">
            <Link
              to="/projects"
              className="cyber-button group inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300"
            >
              <span>Explore Complete Archive</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-purple-400" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Embedded data to replace data.json
const experienceData = [
  {
    id: 1,
    period: "2021 - Present",
    role: "Senior Fullstack Engineer",
    company: "TechNova Corp",
    description:
      "Leading the architectural design and fullstack implementation of enterprise web applications. Developed high-availability Python backends and performant React frontends, serving over 1M daily requests.",
  },
  {
    id: 2,
    period: "2019 - 2021",
    role: "Backend & Data Engineer",
    company: "DataSync Inc",
    description:
      "Built and optimized scalable data pipelines and RESTful microservices using Django. Reduced database query load times by 40% through efficient indexing and aggressive caching strategies.",
  },
  {
    id: 3,
    period: "2017 - 2019",
    role: "Frontend Developer",
    company: "Creative Web Studio",
    description:
      "Developed dynamic, data-rich user interfaces using React and Redux. Collaborated closely with backend teams to integrate and consume REST APIs securely and efficiently.",
  },
];

export default function Experience() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Reveal each experience block independently as it comes into view
    const blocks = containerRef.current.querySelectorAll(".exp-block");

    blocks.forEach((block) => {
      gsap.fromTo(
        block,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
          },
        },
      );
    });
  }, []);

  return (
    <section className="py-24 px-6 lg:px-24 bg-transparent relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          {/* Sticky Left Column */}
          <div className="lg:w-1/3 relative">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-400">
                  Trajectory
                </span>
              </h2>
              <p className="text-xl text-indigo-100/70 font-light max-w-sm">
                A timeline of impactful engineering roles, architecting
                fullstack systems and crafting robust digital solutions.
              </p>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-12">
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className="exp-block relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-indigo-400/50 hover:bg-white/10 transition-all duration-500 group overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)]"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-indigo-200 font-medium">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold tracking-wider whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <p className="relative z-10 text-indigo-100/80 font-light text-lg leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

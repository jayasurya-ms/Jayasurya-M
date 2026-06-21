import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Embedded data to replace data.json
const experienceData = [
  {
    id: 1,
    period: "Mar 2026 - Apr 2026",
    role: "React Developer",
    company: "AG Solutions",
    description:
      "Developed and maintained CRM dashboard features using React.js, building reusable and responsive UI components with shadcn/ui and modern styling practices. Integrated REST APIs and handled dynamic data rendering with proper loading and error states. Worked extensively on panel-based interfaces including tables, filters, and report views, while collaborating with team members to debug issues and improve overall user experience.",
  },
  {
    id: 2,
    period: "Feb 2026 - Mar 2026",
    role: "Python Fullstack Developer",
    company: "Merida Tech Minds",
    description:
      "Developed a responsive user interface using React.js with reusable components like Banner which accepts dynamic data as props. Implemented dynamic state management and styled the UI using Tailwindcss for an engaging user experience and used GSAP for smooth animation. ",
  },
  {
    id: 3,
    period: "Dec 2025 - Jan 2026",
    role: "Frontend Developer",
    company: "Dyshin Technosoft Pvt Ltd",
    description:
      "Designed and developed a responsive user interface using React.js with reusable components like product listings, details, and cart management. Implemented dynamic state management and styled the UI using Bootstrap CSS for engaging user experience. ",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Scrub animation for the timeline track line
    const progressLine = containerRef.current.querySelector(
      ".timeline-progress-line",
    );
    let progressLineTrigger;

    if (progressLine) {
      progressLineTrigger = gsap.fromTo(
        progressLine,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".timeline-column"), // right column
            start: "top 70%",
            end: "bottom 75%",
            scrub: true,
          },
        },
      );
    }

    // 2. Reveal each experience card as it scrolls into view
    const blocks = containerRef.current.querySelectorAll(".exp-block");
    const cardTriggers = [];

    blocks.forEach((block) => {
      const cardAnim = gsap.fromTo(
        block,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 50%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
      cardTriggers.push(cardAnim);
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      if (progressLineTrigger && progressLineTrigger.scrollTrigger) {
        progressLineTrigger.scrollTrigger.kill();
        progressLineTrigger.kill();
      }
      cardTriggers.forEach((t) => {
        if (t.scrollTrigger) t.scrollTrigger.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 lg:px-24 bg-linear-to-b from-[#030712] via-[#050615] to-[#030712] relative z-10 w-full overflow-hidden"
    >
      {/* Top glowing gradient divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-purple-500/30 to-transparent z-10" />
      {/* Bottom glowing gradient divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-fuchsia-500/25 to-transparent z-10" />
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          {/* Sticky Left Column */}
          <div className="lg:w-1/3 relative">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-fuchsia-500 glow-text-purple">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-sm">
                A timeline of impactful engineering roles, architecting
                fullstack systems and crafting robust digital solutions.
              </p>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-12 relative pl-0 md:pl-10 timeline-column">
            {/* Vertical Timeline Track Line */}
            <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-white/5 hidden md:block z-0">
              <div className="timeline-progress-line w-full h-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-purple-500 origin-top transform scale-y-0 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            </div>

            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className="exp-block cyber-glass-card relative p-8 md:p-12 rounded-3xl group overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-fuchsia-500/10 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-purple-400/80 font-medium">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold tracking-wider whitespace-nowrap shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                    {exp.period}
                  </div>
                </div>

                <p className="relative z-10 text-white/70 font-light text-md leading-relaxed max-w-2xl">
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

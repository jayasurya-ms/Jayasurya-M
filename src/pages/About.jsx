import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, MapPin, Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Embedded About data
const aboutData = {
  bio: "Full Stack Developer with 6 months of hands-on experience building responsive and dynamic web applications using React.js and Python. Experienced in working with industry-standard practices, including API integration, CRM development, and dashboard interfaces. Passionate about developing efficient, scalable, and user-friendly solutions to solve real-world problems.",
  philosophy:
    "Based in Bengaluru, I specialize in complete web applications - from designing to building responsive React interfaces, ensuring data flows securely and efficiently.",
  education: [
    {
      degree: "Master of Computer Applications",
      institution: "RV Institute of Technology",
      location: "Bengaluru, India",
      duration: "2024 – 2025",
      cgpa: "8.72",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Community Institute of Management",
      location: "India",
      duration: "2020 – 2023",
      cgpa: "8.75",
    },
  ],
};

export default function About() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const bentoItems = containerRef.current.querySelectorAll(".bento-item");

    let mm = gsap.matchMedia();

    mm.add("(min-width: 320px)", () => {
      gsap.fromTo(
        bentoItems,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });

    // Refresh ScrollTrigger after component mounts
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 lg:px-24 bg-linear-to-b from-[#09041a] via-[#150a2e] to-[#0c061e] relative z-10 w-full overflow-hidden min-h-screen flex items-center"
    >
      {/* Top glowing gradient divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-fuchsia-500/30 to-transparent z-10" />
      {/* Bottom glowing gradient divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-purple-500/25 to-transparent z-10" />

      {/* Decorative ambient glow orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div
        className="max-w-7xl mx-auto relative z-10 w-full"
        ref={containerRef}
      >
        <div className="mb-12">
          <h2 className="text-2xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-md md:text-xl text-white/60 font-light max-w-2xl">
            Building digital experiences with a focus on scalable architecture
            and engaging user interfaces.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* CONTAINER 1: Description (Bio, Philosophy, Hobbies) */}
          <div className="bento-item cyber-glass-card bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col group hover:border-purple-500/30 transition-colors duration-500">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/10 border border-purple-400/30 rounded-xl flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_8px_rgba(168,85,247,0.1)]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">The Developer</h3>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 flex-1">
              <p className="text-white/70 leading-relaxed font-light text-sm md:text-base">
                {aboutData.bio}
              </p>

              <div className="flex gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                <MapPin className="w-6 h-6 text-fuchsia-400 shrink-0" />
                <p className="text-white/60 leading-relaxed font-light text-[12px] md:text-sm">
                  {aboutData.philosophy}
                </p>
              </div>
            </div>
          </div>

          {/* CONTAINER 2: Education */}
          <div className="bento-item cyber-glass-card bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col group hover:border-purple-500/30 transition-colors duration-500">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-500/10 border border-purple-400/30 rounded-xl flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_8px_rgba(168,85,247,0.1)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Education</h3>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              {aboutData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-4 ${
                    idx !== aboutData.education.length - 1
                      ? "pb-6 border-b border-white/5"
                      : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                    <h4 className="text-[18px] md:text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="w-fit px-3 py-1 bg-white/[0.05] rounded-full text-white/60 text-[10px] md:text-xs border border-white/10 tracking-wide">
                      {edu.duration}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <p className="text-white/50 text-sm flex-1">
                      {edu.institution} <br className="hidden md:block" />
                      <span className="text-white/40">{edu.location}</span>
                    </p>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        CGPA
                      </span>
                      <span className="text-purple-400 text-lg font-semibold">
                        {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

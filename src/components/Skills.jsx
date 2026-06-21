import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaPython,
  FaBootstrap,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaServer,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiGreensock } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// Skills data with proficiency levels
const skillsData = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" />, level: 85 },
  { name: "Django", icon: <SiDjango className="text-[#092E20]" />, level: 60 },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    level: 95,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-[#7952B3]" />,
    level: 85,
  },
  { name: "GSAP", icon: <SiGreensock className="text-[#88CE02]" />, level: 70 },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: 80 },
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 90 },
  {
    name: "REST APIs",
    icon: <FaServer className="text-gray-400" />,
    level: 85,
  },
  {
    name: "SQL",
    icon: <FaDatabase className="text-[#00758f]" />,
    level: 75,
  },
  {
    name: "Core Java",
    icon: <FaJava className="text-[#e76f00]" />,
    level: 85,
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    console.log(
      "Skills useEffect mounted. Section element:",
      sectionRef.current,
    );
    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 640px) and (max-width: 1023px)",
        isMobile: "(max-width: 639px)",
      },
      (context) => {
        let { isDesktop, isTablet, isMobile } = context.conditions;
        console.log(
          "Skills matchMedia triggered. Conditions:",
          context.conditions,
        );

        if (isMobile) {
          // --- 1. Natural Mobile Reveal (Auto-Height) ---
          gsap.fromTo(
            ".skills-header",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: ".skills-header",
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );

          skillsData.forEach((skill, i) => {
            const cardTl = gsap.timeline({
              scrollTrigger: {
                trigger: `.skill-card-${i}`,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            });

            cardTl.fromTo(
              `.skill-card-${i}`,
              { opacity: 0, y: 30, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
            );

            cardTl.fromTo(
              `.skill-bar-fill-${i}`,
              { width: "0%" },
              { width: `${skill.level}%`, duration: 1, ease: "power2.out" },
              "<",
            );

            const percentEl = document.querySelector(`.skill-percent-${i}`);
            if (percentEl) {
              cardTl.fromTo(
                percentEl,
                { innerText: 0 },
                {
                  innerText: skill.level,
                  duration: 1,
                  snap: { innerText: 1 },
                  onUpdate: function () {
                    percentEl.innerHTML =
                      Math.ceil(this.targets()[0].innerText) + "<span>%</span>";
                  },
                },
                "<",
              );
            }
          });
        } else {
          console.log("Skills setting up Pinned ScrollTrigger timeline...");
          // --- 2. Premium Pinned Reveal (Desktop & Tablet) ---
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: isDesktop ? "+=2200" : "+=1900",
              pin: true,
              scrub: 1.2,
              anticipatePin: 1,
            },
          });

          // Header Reveal
          tl.fromTo(
            ".skills-header",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
          );

          const cardRevealStart = "+=0.2";

          // Staggered Skill Reveal
          skillsData.forEach((skill, i) => {
            const cardSelector = `.skill-card-${i}`;
            const barSelector = `.skill-bar-fill-${i}`;
            const percentSelector = `.skill-percent-${i}`;

            tl.fromTo(
              cardSelector,
              { opacity: 0, y: 40, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power2.out" },
              i === 0 ? cardRevealStart : "-=0.9",
            );

            tl.fromTo(
              barSelector,
              { width: "0%" },
              { width: `${skill.level}%`, duration: 1.5, ease: "power2.out" },
              "<",
            );

            const percentEl = document.querySelector(percentSelector);
            if (percentEl) {
              tl.fromTo(
                percentEl,
                { innerText: 0 },
                {
                  innerText: skill.level,
                  duration: 1.5,
                  snap: { innerText: 1 },
                  onUpdate: function () {
                    percentEl.innerHTML =
                      Math.ceil(this.targets()[0].innerText) + "<span>%</span>";
                  },
                },
                "<",
              );
            }
          });

          tl.to({}, { duration: 1 });
        }
      },
    );

    ScrollTrigger.refresh();

    return () => mm.revert();
  }, []);

  // Interactive Hover (Tilt Effect) - Restricted to Desktop
  const handleMouseMove = (e, index) => {
    if (window.innerWidth <= 768) return;
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 12;
    const rotateY = (x / rect.width - 0.5) * -12;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="skills-section bg-[#030712] relative min-h-0 md:min-h-screen overflow-hidden z-10"
    >
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }
        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 25px;
          }
        }
        .skill-card {
          padding: 15px;
          border-radius: 16px;
          background: rgba(6, 12, 26, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(168, 85, 247, 0.12);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37), 
                      inset 0 0 12px rgba(168, 85, 247, 0.05);
          transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
          position: relative;
          z-index: 1;
        }
        @media (min-width: 768px) {
          .skill-card {
            padding: 24px;
            border-radius: 20px;
          }
        }
        .skill-card:hover {
          border-color: rgba(168, 85, 247, 0.45);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5),
                      0 0 18px rgba(168, 85, 247, 0.3), 
                      inset 0 0 15px rgba(168, 85, 247, 0.1);
          background: rgba(6, 12, 26, 0.5);
        }
        .skill-bar {
          height: 4px;
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          overflow: hidden;
          margin-top: 10px;
        }
        @media (min-width: 768px) {
          .skill-bar {
            height: 6px;
            margin-top: 12px;
          }
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 8px;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
        }
        .skill-percent span {
          font-size: 0.8em;
          opacity: 0.6;
          margin-left: 2px;
        }
      `}</style>

      {/* Centered Luxury Pin Content */}
      <div
        ref={containerRef}
        className="pin-wrapper min-h-0 md:min-h-screen w-full flex flex-col items-center justify-center py-12 md:py-24 px-4 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl w-full relative z-10">
          <div className="skills-header mb-12 md:mb-20 text-center opacity-0">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tighter">
              Core <span className="text-white/40">Capabilities</span>
            </h2>
            <div className="w-12 md:w-16 h-px bg-white/20 mx-auto mb-6 md:mb-8"></div>
            <p className="text-white/40 max-w-lg mx-auto text-base md:text-lg font-light tracking-wide px-4">
              A precise blend of modern technologies to build premium digital
              experiences.
            </p>
          </div>

          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`skill-card skill-card-${index} group opacity-0`}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="flex justify-between items-center mb-3 md:mb-5">
                  <div className="text-3xl md:text-4xl transition-transform duration-500 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <div
                    className={`skill-percent skill-percent-${index} text-white font-mono text-base md:text-lg`}
                    data-percent={skill.level}
                  >
                    0%
                  </div>
                </div>

                <h3 className="text-white font-medium text-sm md:text-lg mb-2 md:mb-3 tracking-tight">
                  {skill.name}
                </h3>

                <div className="skill-bar">
                  <div
                    className={`skill-bar-fill skill-bar-fill-${index}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
} from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiGreensock } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// Embedded Skills data
const skillsData = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
  { name: "GSAP", icon: <SiGreensock className="text-[#88CE02]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
  { name: "REST APIs", icon: <FaServer className="text-gray-400" /> },
];

export default function Skills() {
  const containerRef = useRef(null);
  const logoElements = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = containerRef.current;
      const elements = logoElements.current;

      // Title Circular Motion on Scroll
      const titleEl = gsap.utils.selector(containerRef)(".title-container");

      gsap.to(titleEl, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        // A simple circular/orbital wobble while scrolling past
        x: () => Math.sin(Math.PI * 2) * 100, // This will be dynamic based on progress
        y: () => Math.cos(Math.PI * 2) * 100,
        ease: "none",
        modifiers: {
          x: function (x, target) {
            // Use scroll progress to drive the angle of the circle
            const progress = target._scrollTrigger
              ? target._scrollTrigger.progress
              : 0;
            const angle = progress * Math.PI * 4; // 2 full circles
            return Math.sin(angle) * 80 + "px";
          },
          y: function (y, target) {
            const progress = target._scrollTrigger
              ? target._scrollTrigger.progress
              : 0;
            const angle = progress * Math.PI * 4;
            return Math.cos(angle) * 80 + "px";
          },
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=250%",
          scrub: true, // No delay. Animation strictly ends before page unpins.
          pin: true,
        },
      });

      const totalElements = elements.length;
      const progressObj = { value: 0 };

      tl.to(progressObj, {
        value: 1,
        ease: "none",
        onUpdate: () => {
          const globalProgress = progressObj.value;

          elements.forEach((el, index) => {
            const snakeSpacing = 0.08;
            const myPositionOnPath = globalProgress - index * snakeSpacing;

            const myFinalRestingProgress = 1 - index * snakeSpacing;
            let localProgress = myPositionOnPath;
            if (localProgress < 0) localProgress = 0;
            if (localProgress > myFinalRestingProgress) {
              localProgress = myFinalRestingProgress;
            }

            const startX = window.innerWidth * 0.8;
            const endX = -window.innerWidth * 0.8;
            const currentX = startX + (endX - startX) * localProgress;

            const startY = window.innerHeight * 0.5;
            const archRise = window.innerHeight * 0.25;

            const currentArchAngle = localProgress * Math.PI;
            const currentY = startY - Math.sin(currentArchAngle) * archRise;

            const normalizedDepth = Math.sin(currentArchAngle);
            const scale = 0.7 + normalizedDepth * 0.3;

            let opacity = 1;
            if (myPositionOnPath < 0) opacity = 0;
            else if (myPositionOnPath < 0.1) opacity = myPositionOnPath / 0.1;

            const zIndex = 150 + Math.floor(normalizedDepth * 50);

            gsap.set(el, {
              xPercent: -50,
              yPercent: -50,
              x: currentX,
              y: currentY,
              scale: scale,
              opacity: opacity,
              zIndex: zIndex,
            });
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="skills"
      // Fill the screen exactly, because we are going to pin it
      className="bg-slate-950 relative h-screen w-full flex flex-col items-center justify-start overflow-hidden z-10 border-t border-white/5"
    >
      {/* Title with circular scroll animation */}
      <div className="title-container relative z-50 flex flex-col items-center justify-center pointer-events-none w-full px-4 mb-24 mt-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 text-center drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          Technical Arsenal
        </h2>
        <p className="text-xl md:text-2xl text-pink-500 font-light text-center max-w-2xl drop-shadow-md">
          Technologies and tools I leverage to build digital experiences.
        </p>
      </div>

      {/* Logos River Container */}
      <div className="absolute inset-0 flex pointer-events-none w-full h-full">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (logoElements.current[index] = el)}
            // whitespace-nowrap and w-max ensures it grows or shrinks to flex gap size based on word length
            className="absolute group transition-all gap-5 top-2/5 left-1/2 flex items-center justify-center px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl pointer-events-auto hover:bg-[#1F2833]/90 hover:scale-[1.1] cursor-pointer hover:border-pink-500/50 hover:shadow-[0_0_40px_rgba(214,24,163,0.3)] whitespace-nowrap w-max"
          >
            <div className="text-4xl md:text-5xl drop-shadow-md text-white">
              {skill.icon}
            </div>
            <span className="text-lg md:text-xl font-bold text-gray-200 hidden group-hover:block">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

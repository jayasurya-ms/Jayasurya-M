import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const isEven = index % 2 === 0;

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    // Card slide-up reveal
    gsap.fromTo(
      card,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      },
    );

    // Image Parallax
    gsap.fromTo(
      image,
      { y: -30 },
      {
        y: 30,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    // Text Stagger animation
    const textChildren = text.children;
    gsap.fromTo(
      textChildren,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === card) t.kill();
      });
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center group`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="flex-1 w-full overflow-hidden rounded-3xl relative aspect-4/3 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:border-indigo-500/50 group-hover:shadow-[0_8px_40px_rgba(99,102,241,0.2)] transition-all duration-500">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            ref={imageRef}
            src={project.image_url}
            alt={project.title}
            className="w-full h-[120%] object-cover absolute top-[-10%] left-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
          />
        </motion.div>
      </div>

      <div ref={textRef} className="flex-1 flex flex-col justify-center">
        <span className="text-indigo-400 text-sm tracking-widest uppercase mb-4 block font-medium">
          {project.category}
        </span>
        <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-300 text-lg font-light leading-relaxed mb-8 max-w-xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech_stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-indigo-200 text-sm font-medium tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition-colors font-medium border-b border-transparent hover:border-indigo-400 pb-1"
          >
            <Github className="w-5 h-5" />
            Source
          </a>
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition-colors font-medium border-b border-transparent hover:border-indigo-400 pb-1"
          >
            <ExternalLink className="w-5 h-5" />
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

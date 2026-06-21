import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project, index, lightTheme = false }) {
  const cardRef = useRef(null);
  const animContainerRef = useRef(null);
  const photoRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const isEven = index % 2 === 0;

  useEffect(() => {
    const card = cardRef.current;
    const container = animContainerRef.current;
    const photo = photoRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    // Set initial hidden state to avoid layout flashes before animation starts
    gsap.set(container, { opacity: 0, y: 100 });
    gsap.set([photo, text], { opacity: 0, y: 20 });

    // Timeline for container reveal (animates the whole container wrapper, then staggers its contents)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      container,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
      },
    )
      .fromTo(
        photo,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8", // Start photo animation as card begins revealing
      )
      .fromTo(
        text,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.79", // Stagger details with exactly 0.01s gap (0.8 - 0.79)
      );

    // Image Parallax within the card frame (uses static trigger)
    const parallax = gsap.fromTo(
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

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      if (parallax.scrollTrigger) parallax.scrollTrigger.kill();
      parallax.kill();
    };
  }, []);

  return (
    <div ref={cardRef} className="w-full">
      <div ref={animContainerRef} className="w-full opacity-0">
        <motion.div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center group cyber-glass-card p-6 md:p-8 lg:p-12 rounded-[2rem] w-full`}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div
            ref={photoRef}
            className="flex-1 lg:flex-[1] w-full overflow-hidden rounded-2xl relative aspect-4/3"
          >
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

          <div
            ref={textRef}
            className="flex-1 lg:flex-[2] flex flex-col justify-center"
          >
            <span className="text-purple-400 text-sm tracking-widest uppercase mb-4 block font-medium">
              {project.category}
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-white/60 text-md font-light leading-relaxed mb-8 max-w-3xl whitespace-pre-line">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech_stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-purple-950/20 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium tracking-wide"
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
                className="flex items-center gap-2 text-white/70 hover:text-purple-300 transition-colors font-medium border-b border-transparent hover:border-purple-300 pb-1"
              >
                <Github className="w-5 h-5" />
                Source
              </a>
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-purple-300 transition-colors font-medium border-b border-transparent hover:border-purple-300 pb-1"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

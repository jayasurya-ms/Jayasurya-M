import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const ctaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section className="py-15 md:py-32 px-6 lg:px-24 bg-linear-to-b from-[#0a031c] via-[#1b073c] to-[#010204] relative z-10 w-full overflow-hidden">
      {/* Top glowing gradient divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-fuchsia-500/35 to-transparent z-10" />
      {/* Bottom glowing gradient divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-purple-500/20 to-transparent z-10" />
      <div
        ref={ctaRef}
        className="max-w-5xl mx-auto flex flex-col items-center text-center cyber-glass-card-purple py-12 md:py-18 px-8 md:px-6 rounded-[3rem] overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20 pointer-events-none" />

        <h2 className="text-3xl md:text-7xl font-bold tracking-tight text-white mb-8 max-w-3xl relative z-10">
          Have a Project in Mind ? <br />
          <span className="text-purple-400 glow-text-purple">Let's build it together.</span>
        </h2>

        <p className="text-[14px] md:text-xl text-white/60 font-light mb-12 max-w-xl relative z-10">
          I'm currently available for freelance projects or full-time roles.
          Reach out, and let's craft something memorable.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="text-md md:text-lg cyber-button group relative inline-flex items-center justify-center gap-3 px-10 py-4 font-semibold rounded-full overflow-hidden transition-all z-10"
        >
          <span className="relative z-10 transition-colors duration-300">
            Get in Touch
          </span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-all duration-300 text-purple-400" />
        </button>
      </div>
    </section>
  );
}

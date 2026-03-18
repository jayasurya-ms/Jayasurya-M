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
    <section className="py-32 px-6 lg:px-24 bg-transparent relative z-10 border-t border-white/10 border-b">
      <div
        ref={ctaRef}
        className="max-w-5xl mx-auto flex flex-col items-center text-center bg-white/5 backdrop-blur-xl py-20 px-6 rounded-[3rem] border border-white/10 overflow-hidden relative shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20 pointer-events-none" />

        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 max-w-3xl relative z-10">
          Have a project in mind? <br />
          <span className="text-indigo-400">Let's build it together.</span>
        </h2>

        <p className="text-xl text-indigo-100/80 font-light mb-12 max-w-xl relative z-10">
          I'm currently available for freelance projects or full-time roles.
          Reach out, and let's craft something memorable.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-900 font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 z-10 shadow-lg"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Get in Touch
          </span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
          <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0" />
        </button>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    quote:
      "An absolute professional. Brought our vision to life with animations that felt both incredibly smooth and purposefully aligned with our brand identity.",
    name: "Govind Greg",
    role: "AG Solutions - CEO",
  },
  {
    quote:
      "Not only is the code clean and scalable, but the attention to micro-interactions and the overall user experience is simply unmatched.",
    name: "Jerold",
    role: "Merida Tech Minds - TL",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".testimonial-card");

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section className="py-15 md:py-24 px-6 lg:px-24 bg-linear-to-b from-[#030712] via-[#090518] to-[#030712] relative z-10 w-full overflow-hidden">
      {/* Top glowing gradient divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-purple-500/25 to-transparent z-10" />
      {/* Bottom glowing gradient divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-fuchsia-500/20 to-transparent z-10" />
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center">
          Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card cyber-glass-card-purple relative p-10 rounded-3xl group"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-white/5 z-0 group-hover:text-purple-400/20 transition-colors" />
              <p className="relative z-10 text-[15px] md:text-lg text-white/80 font-light leading-relaxed mb-8 pt-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center text-white font-semibold tracking-wide shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-[15px] md:text-lg">{testimonial.name}</h4>
                  <span className="text-purple-400 text-[15px] md:text-lg font-medium">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

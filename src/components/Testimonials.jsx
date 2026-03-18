import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    quote:
      "An absolute professional. Brought our vision to life with animations that felt both incredibly smooth and purposefully aligned with our brand identity.",
    name: "Sarah Jenkins",
    role: "Creative Director at Vercel",
  },
  {
    quote:
      "Not only is the code clean and scalable, but the attention to micro-interactions and the overall user experience is simply unmatched.",
    name: "David Kim",
    role: "Founder, Horizon Apps",
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
    <section className="py-24 px-6 lg:px-24 bg-transparent relative z-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center">
          Client Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card relative p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-indigo-400/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] group"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-white/10 z-0 group-hover:text-indigo-400/30 transition-colors" />
              <p className="relative z-10 text-xl md:text-2xl text-indigo-100/90 font-light leading-relaxed mb-8 pt-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-semibold tracking-wide shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <span className="text-indigo-300 text-sm">
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

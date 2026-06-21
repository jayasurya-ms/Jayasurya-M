import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Layout, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon: Layout,
    title: "Frontend Developer",
    subtitle: "React Developer",
    description:
      "Building responsive, animated web apps. I implement interactive features, fluid animations, and scalable layouts using clean, maintainable code.",
    skills: [
      { category: "Core", items: ["React.js", "JavaScript"] },
      { category: "Styling", items: ["Tailwind CSS", "Responsive Design"] },
      { category: "Animation", items: ["GSAP", "Framer Motion"] },
      {
        category: "Concepts",
        items: ["State Management", "Cross-Browser Compatibility"],
      },
    ],
  },
  {
    icon: Database,
    title: "Backend Developer",
    subtitle: "Python Developer",
    description:
      "Designing scalable server-side systems. I manage secure database models, build CLI tools, and develop data dashboards to keep applications fast and reliable.",
    skills: [
      { category: "Core", items: ["Python"] },
      {
        category: "Databases",
        items: ["MySQL", "Relational Databases"],
      },
      {
        category: "Data Handling",
        items: ["Matplotlib, Seaborn", "Data Visualization"],
      },
      {
        category: "Concepts",
        items: ["OOP Concepts", "Server-Side Logic", "System Architecture"],
      },
    ],
  },
  {
    icon: Cpu,
    title: "API Integration",
    subtitle: "System Connectivity",
    description:
      "Securing connections between systems. I connect frontend clients with external platforms, handling authentication, routing, and endpoint integrations.",
    skills: [
      { category: "Core", items: ["RESTful APIs", "JSON"] },
      {
        category: "Security",
        items: ["JWT Auth"],
      },
      { category: "Tools", items: ["Postman", "Testing & Debugging"] },
      {
        category: "Concepts",
        items: ["Async Programming", "Third-Party Integrations", "Webhooks"],
      },
    ],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".service-card");

    const anim = gsap.fromTo(
      cards,
      {
        opacity: 0,
        scale: 0,
        rotation: -180,
        transformOrigin: "center center",
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.4)",
        stagger: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    // Delayed refresh to ensure React layout shifts and dynamic height is fully settled
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);
  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-24 bg-linear-to-b from-[#09041a] via-[#150a2e] to-[#0c061e] relative z-10 w-full overflow-hidden">
      {/* Top glowing gradient divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-fuchsia-500/30 to-transparent z-10" />
      {/* Bottom glowing gradient divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-purple-500/25 to-transparent z-10" />

      {/* Decorative ambient glow orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-purple-500/15 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-fuchsia-500/15 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            What I Do
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl">
            Specialized skillsets focused on delivering high-end,
            production ready digital solutions from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card cyber-glass-card rounded-3xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-purple-500/10 border border-purple-400/30 rounded-xl flex items-center justify-center mb-8 text-purple-300 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-400/65 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all duration-500 backdrop-blur-md shadow-[inset_0_0_8px_rgba(168,85,247,0.1)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col -mt-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {service.title}
                      </h3>
                      <span className="text-purple-400 text-sm font-medium tracking-wide block mb-4">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed font-light text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex flex-col gap-3">
                  <h4 className="text-purple-400 text-xs font-semibold uppercase tracking-wider">
                    Technical Skills
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {service.skills.map((skillGroup, gIdx) => (
                      <div key={gIdx} className="text-xs">
                        <span className="text-purple-300 font-semibold mr-1.5">
                          {skillGroup.category}:
                        </span>
                        <span className="text-white/70 font-light">
                          {skillGroup.items.join(", ")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

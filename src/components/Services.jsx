import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Layout, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Embedded data to replace data.json
const servicesData = [
  {
    icon: Database,
    title: "Backend APIs & Architecture",
    description:
      "Designing and building scalable REST and GraphQL APIs using Python (Django/FastAPI). Ensuring secure, high-performance data flow and database optimization.",
  },
  {
    icon: Layout,
    title: "React Frontend Engineering",
    description:
      "Creating responsive, interactive user interfaces with React, state management, and modern CSS frameworks. Turning complex data into intuitive, fast web experiences.",
  },
  {
    icon: Cpu,
    title: "Data Processing & Pipelines",
    description:
      "Developing robust ETL pipelines and automating business workflows. Integrating third-party services and managing cloud infrastructure for reliable deployments.",
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".service-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section className="py-24 px-6 lg:px-24 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            What I Do
          </h2>
          <p className="text-xl text-indigo-200/80 font-light max-w-2xl">
            Specialized skillsets focused on delivering high-end,
            production-ready digital solutions from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl hover:bg-white/10 transition-colors group shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
              >
                <div className="w-14 h-14 bg-indigo-500/20 border border-indigo-400/30 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/40 transition-all duration-500 backdrop-blur-md shadow-md">
                  <Icon className="w-6 h-6 text-indigo-200" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-indigo-100/70 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

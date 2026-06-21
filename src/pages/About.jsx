import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

// Embedded About data replacing data.json
const aboutData = {
  bio: "I am a Fullstack Developer specializing in React and Python. I build scalable backends, reliable data pipelines, and responsive frontend interfaces. My focus is on writing clean, maintainable code that solves real-world business challenges.",
  contact_links: [
    { platform: "GitHub", url: "https://github.com/", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/", icon: "Linkedin" },
    { platform: "Email", url: "mailto:jayasurya.m9916@gmail.com", icon: "Mail" },
  ],
};

const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
};

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-transparent px-6 lg:px-24">
      <div className="max-w-7xl mx-auto py-12 md:py-24 flex flex-col md:flex-row gap-12 md:gap-24 relative z-10">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 text-white glow-text-purple"
          >
            About Me
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-white/60 font-light leading-relaxed"
          >
            <div className="space-y-6">
              <p>
                Based in India, I specialize in architecting complete
                web applications. From designing normalized database schemas to
                creating responsive React interfaces, I ensure data flows
                securely and efficiently.
              </p>
              <p>
                With deep expertise in Python frameworks like Django and
                FastAPI, combined with a strong command of React and state
                management, I approach problem-solving systematically. I believe
                in comprehensive testing and well-documented APIs.
              </p>
              <p>
                When I'm not coding, you can find me automating workflows,
                contributing to open-source project tools, or learning new
                technologies to stay at the cutting edge.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg text-purple-400 mb-6 uppercase tracking-wider font-medium">
            Connect
          </h3>
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4"
          >
            {aboutData.contact_links.map((link, idx) => {
              const IconComponent = iconMap[link.icon];
              return (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVars}
                  whileHover={{ x: 10, color: "#a855f7" }}
                  className="flex items-center gap-4 text-xl text-white/60 hover:text-purple-300 transition-colors py-2 group"
                >
                  {IconComponent && (
                    <IconComponent className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
                  )}
                  <span>{link.platform}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

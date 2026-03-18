import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const authorName = "Jane Doe";

  return (
    <footer className="pt-24 pb-12 px-6 lg:px-24 border-t border-white/10 bg-black/40 backdrop-blur-3xl relative z-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 mb-20">
        {/* Brand & Bio */}
        <div className="flex-1 w-full max-w-sm">
          <span className="text-white font-bold tracking-tighter text-3xl mb-6 block">
            Jane<span className="text-indigo-400">Doe</span>
          </span>
          <p className="text-indigo-100/70 text-lg font-light leading-relaxed mb-8">
            A specialized fullstack developer crafting elite, high-performance
            web applications and systems. Based in San Francisco.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 text-indigo-300 font-medium hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            hello@example.com
          </a>
        </div>

        {/* Links */}
        <div className="flex-1 flex gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-wider uppercase text-sm mb-4">
              Nav
            </h4>
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-indigo-100/60 hover:text-white transition-colors text-base"
              >
                {item}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-wider uppercase text-sm mb-4">
              Social
            </h4>
            {[
              { name: "GitHub", href: "https://github.com" },
              { name: "LinkedIn", href: "https://linkedin.com" },
              { name: "Twitter", href: "https://twitter.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-100/60 hover:text-indigo-300 transition-colors text-base"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter / CTA Column */}
        <div className="flex-1 max-w-sm">
          <h4 className="text-white font-semibold tracking-wider uppercase text-sm mb-6">
            Stay Updated
          </h4>
          <p className="text-indigo-100/60 font-light mb-6">
            Join my newsletter to get insights on fullstack development and
            design.
          </p>
          <form
            action="https://formsubmit.co/jayasurya.m9916@gmail.com"
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            {/* Honeypot to prevent spam */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            {/* Disable FormSubmit captcha for smoother UX */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Success page redirection (optional, keeping it simple for now) */}

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-indigo-200/40 focus:outline-hidden focus:border-indigo-400 transition-colors"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl px-4 py-3 transition-colors shadow-sm"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-indigo-200/50 text-sm font-light">
          © {currentYear} {authorName}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Twitter, href: "https://twitter.com" },
          ].map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, color: "#ffffff" }}
                className="text-indigo-200/40 hover:text-indigo-300 transition-colors cursor-pointer"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

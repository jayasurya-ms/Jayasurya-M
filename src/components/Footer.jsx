import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  Instagram,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const authorName = "Jayasurya M";

  return (
    <footer className="pt-24 pb-12 px-6 lg:px-24 border-t border-white/5 bg-[#030712]/60 backdrop-blur-2xl relative z-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 mb-20">
        {/* Brand & Bio */}
        <div className="flex-1 w-full max-w-sm">
          <span className="text-white font-bold tracking-tighter text-3xl mb-6 block">
            Jayasurya
            <span className="text-purple-400 glow-text-purple"> M</span>
          </span>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
            A specialized fullstack developer crafting elite, high-performance
            web applications and systems. Based in India.
          </p>
          <a
            href="mailto:jayasurya.m9916@gmail.com"
            className="inline-flex items-center gap-2 text-purple-400 font-medium hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            jayasurya.m9916@gmail.com
          </a>
        </div>

        {/* Links */}
        <div className="flex-1 flex gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-wider uppercase text-sm mb-4">
              Quick Links
            </h4>
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-white/50 hover:text-purple-300 transition-colors text-base"
              >
                {item}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-wider uppercase text-sm mb-4">
              Social Medias
            </h4>
            {[
              { name: "GitHub", href: "https://github.com/jayasurya-ms" },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/jayasurya-ms",
              },
              {
                name: "Instagram",
                href: "https://www.instagram.com/am_midnyt_rider_47?igsh=MWxydnBrZmo4czlwYw==",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-purple-300 transition-colors text-base"
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
          <p className="text-white/50 font-light mb-6">
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

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="flex-1 bg-purple-950/10 border border-purple-500/25 rounded-xl px-4 py-3 text-white placeholder:text-purple-200/20 focus:outline-hidden focus:border-purple-400/50 transition-colors"
            />
            <button
              type="submit"
              className="cyber-button flex items-center justify-center rounded-xl px-4 py-3 transition-all duration-300 shadow-sm"
            >
              <ArrowRight className="w-5 h-5 text-purple-400" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/40 text-sm font-light">
          © {currentYear} {authorName}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          {[
            { icon: Github, href: "https://github.com/jayasurya-ms" },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/jayasurya-ms",
            },
            {
              icon: Instagram,
              href: "https://www.instagram.com/am_midnyt_rider_47?igsh=MWxydnBrZmo4czlwYw==",
            },
          ].map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, color: "#a855f7" }}
                className="text-white/40 hover:text-purple-300 transition-colors cursor-pointer"
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

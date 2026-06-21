import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 bg-transparent ${isScrolled ? "py-4" : "py-0"}`}
    >
      <div className="w-full px-6 lg:px-24">
        <div
          className={`flex items-center transition-all duration-500 ${isScrolled ? "h-14 justify-end" : "h-20 justify-between"}`}
        >
          {/* Logo container always visible */}
          <div className="transition-all duration-500 block bg-transparent">
            <NavLink to="/" className="text-white font-bold text-xl">
              Jayasurya<span className="text-purple-400"> M</span>
            </NavLink>
          </div>

          {/* Desktop Nav - Hidden if scrolled (forces mobile menu button visible) */}
          <div
            className={`items-center gap-8 ${isScrolled ? "hidden" : "hidden md:flex"}`}
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-md font-bold transition-colors hover:text-purple-300 ${
                    isActive
                      ? "text-purple-500 shadow-[0_2px_0_0_#a855f7] glow-text-purple"
                      : "text-white/80 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="/resume.pdf"
              download
              className="cyber-button flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Nav Toggle - Shows on Mobile ALWAYS, Shows on Desktop ONLY when Scrolled */}
          <div
            className={`transition-all duration-500 ${isScrolled ? "block" : "md:hidden"}`}
          >
            <button
              className="flex cursor-pointer hover:rotate-90 transition-all duration-500 ease-in-out items-center justify-center p-3 rounded-full text-purple-100 hover:text-blend z-50!"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Menu (For Mobile AND Scrolled Desktop) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%", x: "20%" }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.75, 0, 0.25, 1],
              type: "tween",
            }}
            exit={{ opacity: 0, y: "-100%", x: "-20%" }}
            className="absolute top-0 h-screen w-full cyber-glass-card rounded-none z-40"
          >
            <div className="size-full flex flex-col gap-2 justify-between items-center">
              <div className="text-white w-full py-7 px-7 font-bold text-xl flex justify-between md:w-[90%]">
                <div>
                  <a href="/">
                    Jayasurya<span className="text-purple-400"> M</span>
                  </a>
                </div>
                <div
                  className="font-regular! text-md cursor-pointer px-2 md:px-4"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="w-[90%] flex">
                  <div className="w-[50%] justify-center items-center hidden md:flex">
                    <div className="bg-white w-[60%] h-110"></div>
                  </div>
                  <div className="w-full md:w-[50%] flex flex-col gap-10 justify-center items-center">
                    <div className="flex flex-col gap-2 w-[60%]">
                      {links.map((link) => (
                        <NavLink
                          key={link.name}
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            `text-4xl md:text-6xl leading-9 md:leading-14 hover:text-purple-300 transition-all duration-500 w-fit font-bold ${
                              isActive ? "text-purple-500 glow-text-purple" : "text-white/80"
                            }`
                          }
                        >
                          {link.name}
                        </NavLink>
                      ))}
                    </div>
                    <div className="text-white/60 w-[60%] flex flex-col gap-2 font-medium">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors w-fit">Github</a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors w-fit">Linkedin</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="flex w-[90%] gap-2 py-5 text-white/80 font-bold">
                  <Phone className="text-purple-400" />
                  <a href="tel:+919916446595" className="hover:text-purple-400 transition-colors"> +91 99164 46595</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

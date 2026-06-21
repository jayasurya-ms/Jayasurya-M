import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-transparent px-6 lg:px-24 flex items-center relative z-10">
      {/* Abstract animated orbs for Contact page */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-white glow-text-purple"
        >
          Let's Work Together
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/60 font-light mb-12 max-w-2xl"
        >
          I'm currently available for freelance work and open to new
          opportunities. If you have a project in mind, let's discuss how we can
          bring it to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {/* Contact Methods */}
          <div className="flex flex-col items-center p-8 cyber-glass-card rounded-2xl group">
            <Mail className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-medium mb-2">Email</h3>
            <a
              href="mailto:jayasurya.m9916@gmail.com"
              className="text-white/60 hover:text-purple-300 transition-colors"
            >
              jayasurya.m9916@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center p-8 cyber-glass-card-purple rounded-2xl group">
            <Phone className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-medium mb-2">Phone</h3>
            <a
              href="tel:+919916446595"
              className="text-white/60 hover:text-purple-300 transition-colors"
            >
              +91 99164 46595
            </a>
          </div>

          <div className="flex flex-col items-center p-8 cyber-glass-card rounded-2xl group">
            <MapPin className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-medium mb-2">Location</h3>
            <span className="text-white/60">India</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

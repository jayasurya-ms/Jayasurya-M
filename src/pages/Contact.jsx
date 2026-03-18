import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-transparent px-6 lg:px-24 flex items-center relative z-10">
      {/* Abstract animated orb for Contact page */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-white"
        >
          Let's Work Together
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-indigo-100/80 font-light mb-12 max-w-2xl"
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
          <div className="flex flex-col items-center p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] group">
            <Mail className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-medium mb-2">Email</h3>
            <a
              href="mailto:hello@example.com"
              className="text-indigo-200/80 hover:text-indigo-300 transition-colors"
            >
              hello@example.com
            </a>
          </div>

          <div className="flex flex-col items-center p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] group">
            <Phone className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-medium mb-2">Phone</h3>
            <a
              href="tel:+1234567890"
              className="text-indigo-200/80 hover:text-indigo-300 transition-colors"
            >
              +1 (234) 567-890
            </a>
          </div>

          <div className="flex flex-col items-center p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl hover:bg-white/10 hover:border-indigo-400/50 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] group">
            <MapPin className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-medium mb-2">Location</h3>
            <span className="text-indigo-200/80">San Francisco, CA</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

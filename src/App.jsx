import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.8, // Slower scroll duration for luxurious, controlled scroll tail
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth deceleration profile
      lerp: 0.05, // Slower lerp for a very fluid, buttery feeling
      wheelMultiplier: 0.7, // Slower scroll speed for mouse wheels
      touchMultiplier: 1.2, // Controlled scroll speed for mobile touch
      syncTouch: true, // Smooth touch events on mobile
      syncTouchLerp: 0.05, // Slow touch smoothing to match desktop feel and prevent quick jittering
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

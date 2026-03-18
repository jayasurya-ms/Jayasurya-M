import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgimg from "/src/assets/banner.png";

// Embedded data to replace data.json
const heroData = {
  name: "Jayasurya M",
  title: "React & Python Fullstack Developer",
  bio: "I build robust, scalable applications from the database up to the user interface. Passionate about writing clean APIs and creating lightning-fast frontend experiences.",
  cta: "View My Work",
};

export default function Hero() {
  const bgOverlayRef = useRef(null);
  const bgref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP continuous subtle translation on the dark overlay for extra depth
    if (bgOverlayRef.current) {
      gsap.to(bgOverlayRef.current, {
        y: 10,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    if (bgref.current) {
      gsap.to(bgref.current, {
        y: -300,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bgref.current,
          start: "top top",
          end: "+=1400",
          scrub: true,
          pin: true,
        },
      });
    }

    if (textRef.current) {
      const q = gsap.utils.selector(textRef);
      const tl = gsap.timeline({ delay: 0.2 });

      // Name title animates immediately
      tl.fromTo(
        q(".title-char"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "back.out(1.5)",
        },
      );

      // Subtitle and bio animate on scroll
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 60%", // Trigger when the top of the text block hits 50% down the viewport
          end: "bottom 40%",
          toggleActions: "restart reverse restart reverse",
          // markers: true,
        },
      });

      scrollTl
        .fromTo(
          q(".subtitle-word"),
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
        )
        .fromTo(
          q(".bio-text"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
        );
    }
  }, []);

  const titleText = heroData.name;
  const subtitleText = heroData.title;

  return (
    <section className="relative h-220 md:h-300 w-full flex flex-col items-center justify-center overflow-hidden px-6 lg:px-24 z-10">
      <div
        ref={bgref}
        className="absolute z-0 size-full bg-cover bg-position-[top_10%_right_20%] md:bg-position-[top_10%_right_25%] xl:bg-position-[top_10%_right_30%]"
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>

      <div className="z-10! w-full max-w-7xl pt-24 pb-12 flex flex-col justify-center min-h-[80vh]">
        <div ref={textRef} className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-5xl ms-6 text-white font-bold">
            Hii, I'm
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white flex flex-wrap drop-shadow-lg">
            {titleText.split("").map((char, index) => (
              <span
                key={char + "-" + index}
                className="title-char inline-block tracking-normal"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <h2 className="text-2xl md:text-4xl text-white tracking-wide font-light flex flex-wrap drop-shadow-md">
            {subtitleText.split(" ").map((word, index) => (
              <span
                key={word + "-" + index}
                className="mr-2 inline-flex overflow-hidden"
              >
                <span className="subtitle-word inline-block">{word}</span>
              </span>
            ))}
          </h2>

          <p className="bio-text mt-6 text-lg md:text-xl text-slate-200 max-w-2xl font-light">
            {heroData.bio}
          </p>

          <div className="mt-12"></div>
        </div>
      </div>
    </section>
  );
}

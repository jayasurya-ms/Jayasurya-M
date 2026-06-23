import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgimgw from "../assets/bannerw.jpeg";
import bgimgm from "../assets/bannerm.jpeg";

// Embedded data to replace data.json
const heroData = {
  name: "Jayasurya M",
  title: "React & Python Fullstack Developer",
  bio: "I build robust, scalable applications from the database up to the user interface. Passionate about writing clean APIs and creating lightning-fast frontend experiences.",
  cta: "View My Work",
};

export default function Hero() {
  const bgOverlayRefWeb = useRef(null);
  const bgOverlayRefMob = useRef(null);
  const bgrefWeb = useRef(null);
  const bgrefMob = useRef(null);
  const textRefWeb = useRef(null);
  const textRefMob = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop/Web Animations (>= 768px)
    mm.add("(min-width: 768px)", () => {
      // Subtle overlay animation
      if (bgOverlayRefWeb.current) {
        gsap.to(bgOverlayRefWeb.current, {
          y: 10,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

      // Web Background Parallax
      if (bgrefWeb.current) {
        gsap.to(bgrefWeb.current, {
          y: -300,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bgrefWeb.current,
            start: "top top",
            end: "+=1400",
            scrub: true,
            pin: true,
          },
        });
      }

      // Web Text Animations
      if (textRefWeb.current) {
        const q = gsap.utils.selector(textRefWeb);

        // Immediate Name Animation
        gsap.fromTo(
          q(".title-char-web"),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "back.out(1.5)",
            delay: 0.2,
          },
        );

        // Subtitle and Bio Scroll Animation
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textRefWeb.current,
              start: "top 55%",
              end: "bottom 60%",
              toggleActions: "restart reverse restart reverse",
            },
          })
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
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          );
      }
    });

    // Mobile Animations (< 768px)
    mm.add("(max-width: 767px)", () => {
      // Subtle overlay animation
      if (bgOverlayRefMob.current) {
        gsap.to(bgOverlayRefMob.current, {
          y: 10,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

      // Mobile Background Parallax
      if (bgrefMob.current) {
        gsap.to(bgrefMob.current, {
          y: -150,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bgrefMob.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true,
          },
        });
      }

      // Mobile Text Animations
      if (textRefMob.current) {
        const q = gsap.utils.selector(textRefMob);

        // Immediate Name Animation
        gsap.fromTo(
          q(".title-char-mob"),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "back.out(1.5)",
            delay: 0.2,
          },
        );

        // Subtitle and Bio Scroll Animation
        gsap
          .timeline({
            scrollTrigger: {
              trigger: textRefMob.current,
              start: "top 45%",
              end: "bottom 60%",
              toggleActions: "restart reverse restart reverse",
            },
          })
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
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          );
      }
    });

    return () => mm.revert();
  }, []);

  const titleText = heroData.name;
  const subtitleText = heroData.title;

  return (
    <>
      {/* WEB HERO */}
      <section className="hidden md:flex relative h-300 w-full flex-col items-center justify-center overflow-hidden px-6 lg:px-24 z-10">
        <div
          ref={bgrefWeb}
          className="absolute z-0 size-full bg-cover bg-position-[bottom_30%_right_50%]"
          style={{ backgroundImage: `url(${bgimgw})` }}
        ></div>

        <div className="z-10! w-full max-w-7xl pt-24 pb-12 flex flex-col justify-center min-h-[80vh]">
          <div ref={textRefWeb} className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-5xl ms-6 text-white font-bold">
              Hii, I'm
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white flex flex-wrap drop-shadow-lg glow-text-purple">
              {titleText.split("").map((char, index) => (
                <span
                  key={char + "-" + index}
                  className="title-char-web inline-block tracking-normal"
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

      {/* MOBILE HERO */}
      <section className="flex md:hidden relative h-220 w-full flex-col items-center justify-center overflow-hidden px-6 z-10">
        <div
          ref={bgrefMob}
          className="absolute z-0 size-full bg-cover bg-position-[top_10%_right_20%]"
          style={{ backgroundImage: `url(${bgimgm})` }}
        ></div>

        <div className="z-10! w-full max-w-7xl pt-24 pb-12 flex flex-col justify-center min-h-[80vh]">
          <div ref={textRefMob} className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-5xl ms-6 text-white font-bold">
              Hii, I'm
            </h2>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white flex flex-wrap drop-shadow-lg glow-text-purple">
              {titleText.split("").map((char, index) => (
                <span
                  key={char + "-" + index}
                  className="title-char-mob inline-block tracking-normal"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <h2 className="text-2xl md:text-4xl text-white tracking-wide font-semibold md:font-bold flex flex-wrap drop-shadow-md">
              {subtitleText.split(" ").map((word, index) => (
                <span
                  key={word + "-" + index}
                  className="mr-2 inline-flex overflow-hidden"
                >
                  <span className="subtitle-word inline-block">{word}</span>
                </span>
              ))}
            </h2>

            <p className="bio-text mt-6 text-lg md:text-xl text-slate-200 max-w-2xl font-semibold md:font-bold">
              {heroData.bio}
            </p>

            <div className="mt-12"></div>
          </div>
        </div>
      </section>
    </>
  );
}

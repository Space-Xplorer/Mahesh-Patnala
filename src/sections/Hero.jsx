import { useRef, useEffect, Suspense } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const heroRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        heroRef.current.style.setProperty("--mouse-x", `${x}%`);
        heroRef.current.style.setProperty("--mouse-y", `${y}%`);
      }
    };
    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(() => {
    let frame = 0;
    const svg = waveRef.current;
    const path = svg?.querySelector('#snake-wave');
    const amplitude = 4;
    const frequency = 2 * Math.PI / 18;
    const speed = 0.12;
    const width = 26;
    const height = 11;
    let animId;
    function draw() {
      let d = '';
      for (let x = 0; x <= width; x += 2) {
        const y = height / 2 + amplitude * Math.sin(frequency * x + frame * speed);
        d += x === 0 ? `M${x} ${y}` : ` L${x} ${y}`;
      }
      if (path) path.setAttribute('d', d);
      frame++;
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />
      {/* Scroll Down Button with Animated Wave */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
        <a
          href="#projects"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById("projects");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="group flex flex-col items-center cursor-pointer select-none"
          aria-label="Scroll down to projects"
        >
          <p className="text-sm text-slate-500 dark:text-slate-300 mb-1 font-medium">Scroll down</p>
          <div>
            {/*Animated Snake*/}
            <svg
              ref={waveRef}
              width="26"
              height="11"
              viewBox="0 0 26 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="wave-animate text-black dark:text-white"
              style={{ minWidth: 26, minHeight: 11 }}
            >
              <path id="snake-wave" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

// function Rig() {
//   useFrame((state, delta) => {
//     easing.damp3(
//       state.camera.position,
//       [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
//       0.5,
//       delta
//     );
//   });
//   return null;
// }

export default Hero;

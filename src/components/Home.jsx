import { useEffect, useState } from "react";
import AOS from "aos";
import bgImage from "../assets/bgport.jpg";

const Home = () => {
  const texts = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Specialist",
  ];

  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [char, setChar] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    const current = texts[index];

    if (char < current.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + current[char]);
        setChar((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setDisplay("");
        setChar(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
      return () => clearTimeout(reset);
    }
  }, [char, index]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 pt-24 md:pt-32 text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        
        {/* Hello */}
        <h6
          className="text-yellow-500 font-semibold tracking-widest text-sm sm:text-base"
          data-aos="fade-down"
        >
          HELLO..!!
        </h6>

        {/* Name */}
        <h1
          className="text-2xl sm:text-4xl md:text-6xl font-bold mt-4 leading-snug"
          data-aos="fade-right"
        >
          I'm{" "}
          <span className="text-yellow-500 italic font-extrabold drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]">
            Mayur Thigale
          </span>
        </h1>

        {/* Typing Effect */}
        <div
          className="mt-6 text-lg sm:text-2xl md:text-3xl font-semibold text-gray-200 min-h-10"
          data-aos="fade-up"
        >
          {display}
          <span className="animate-pulse text-yellow-500">|</span>
        </div>

        {/* Description */}
        <p
          className="mt-8 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-0 max-w-2xl mx-auto"
          data-aos="zoom-in"
        >
          I build modern, scalable, and high-performance web applications
          using the MERN stack with clean architecture and responsive UI.
        </p>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-yellow-500 text-yellow-500 text-2xl sm:text-3xl shadow-[0_0_20px_rgba(234,179,8,0.6)] hover:bg-yellow-500 hover:text-black transition">
          ↓
        </div>
      </a>
    </section>
  );
};

export default Home;
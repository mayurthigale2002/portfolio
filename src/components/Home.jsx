import { useEffect, useState } from "react";
import AOS from "aos";
import bgImage from "../assets/bgport.jpg";

const Home = () => {
  const texts = ["WEB DEVELOPER...", "MERN DEVELOPER...", "REACT DEVELOPER..."];
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
        setChar(char + 1);
      }, 100);
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
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-4xl text-center z-10">
        
        {/* Hello */}
        <h6
          className="text-yellow-500 font-semibold tracking-widest text-sm sm:text-base"
          data-aos="fade-down"
        >
          HELLO..!!
        </h6>

        {/* Name */}
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 leading-tight"
          data-aos="fade-right"
        >
          I'm{" "}
          <span className="text-yellow-500 italic font-extrabold">
            Mayur Thigale
          </span>
        </h1>

        {/* Typing Effect */}
        <div
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 h-10"
          data-aos="fade-up"
        >
          {display}
          <span className="animate-pulse text-yellow-500">|</span>
        </div>

        {/* Description */}
        <p
          className="mt-8 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg px-2"
          data-aos="zoom-in"
        >
          To pursue a challenging career and be part of a progressive
          organization that enhances my knowledge and allows me to solve
          problems creatively and effectively.
        </p>

      </div>
    </section>
  );
};

export default Home;

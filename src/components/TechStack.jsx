import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
    { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <FaReact />, name: "React", color: "text-cyan-400" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
    { icon: <SiExpress />, name: "Express.js", color: "text-gray-300" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
    { icon: <FaGithub />, name: "GitHub", color: "text-white" },
    { icon: <SiPostman />, name: "Postman", color: "text-orange-400" },
    { icon: <SiVercel />, name: "Vercel", color: "text-white" },
  ];

  return (
    <section
      id="tech"
      className="py-20 px-6 bg-black text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-3xl md:text-5xl font-bold">
          MY TECH STACK
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Skills Grid */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8"
        data-aos="fade-up"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-2 transition-all duration-500"
          >
            <div className={`text-5xl mb-4 ${skill.color}`}>
              {skill.icon}
            </div>
            <p className="text-gray-300 text-sm md:text-base font-medium">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

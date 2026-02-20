import { useEffect } from "react";
import AOS from "aos";
import profileImg from "../assets/mayur.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-bold text-center mb-6"
          data-aos="fade-down"
        >
          ABOUT ME..!!
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div data-aos="fade-right">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              {/* Image */}
              <img
                src={profileImg}
                alt="Mayur"
                className="w-48 h-48 object-cover rounded-3xl border-4 border-yellow-500 shadow-lg hover:scale-105 transition duration-500"
              />

              {/* Basic Info */}
              <div className="text-gray-400 space-y-2 text-sm sm:text-base">
                <p>
                  <span className="text-yellow-500 font-semibold">Name:</span>{" "}
                  Mayur Thigale
                </p>
                <p>
                  <span className="text-yellow-500 font-semibold">
                    Profession:
                  </span>{" "}
                  Web Developer
                </p>
                <p>
                  <span className="text-yellow-500 font-semibold">Skills:</span>{" "}
                  HTML, CSS, Bootstrap, JavaScript
                </p>
                <p>
                  <span className="text-yellow-500 font-semibold">Bio:</span> A
                  passionate web developer dedicated to creating dynamic and
                  user-friendly websites.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-6 text-white">
                SKILLS :
              </h4>

              {[
                { name: "React", level: "95%" },
                { name: "Node", level: "90%" },
                { name: "Express", level: "85%" },
                { name: "MongoDB", level: "80%" },
              ].map((skill, index) => (
                <div key={index} className="mb-5">
                  <p className="mb-1 text-gray-300">{skill.name}</p>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div
                      className="bg-yellow-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div data-aos="fade-left" className="text-gray-400">
            <p className="leading-relaxed text-sm sm:text-base">
              I am Mayur Thigale, a passionate web developer dedicated to
              creating dynamic and user-friendly websites. With expertise in
              HTML, CSS, JavaScript, and various frameworks, I strive to deliver
              high-quality solutions that enhance user experience. My goal is to
              continuously learn and grow in the ever-evolving field of web
              development.
            </p>

            <h4 className="text-xl font-semibold mt-8 mb-4 text-white">
              ADDITIONAL INFORMATION :
            </h4>

            <div className="space-y-3 text-sm sm:text-base">
              <p>
                <span className="text-yellow-500 font-semibold">
                  Certification:
                </span>{" "}
                MERN Stack Certification
              </p>
              <p>
                <span className="text-yellow-500 font-semibold">
                  Certification:
                </span>{" "}
                Microsoft Azure Certification
              </p>
              <p>
                <span className="text-yellow-500 font-semibold">Hobbies:</span>{" "}
                Reading, Traveling, Coding
              </p>
              <p>
                <span className="text-yellow-500 font-semibold">
                  Languages:
                </span>{" "}
                English, Hindi, Marathi
              </p>
              <p>
                <span className="text-yellow-500 font-semibold">Location:</span>{" "}
                Pune, India
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mayur-thigale-14b8312b1/",
                    "_blank",
                  )
                }
                className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
              >
                LinkedIn Profile
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/mayurthigale2002", "_blank")
                }
                className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
              >
                GitHub Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

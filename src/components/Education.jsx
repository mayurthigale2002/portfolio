import { useEffect } from "react";
import AOS from "aos";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section
      id="education"
      className="min-h-screen py-20 px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-bold text-center mb-6"
          data-aos="fade-down"
        >
          EDUCATION..!!
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>

        <div
          className="grid md:grid-cols-2 gap-10"
          data-aos="fade-up"
        >
          
          {/* Master's Card */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-yellow-500/20 transition duration-500">
            <h2 className="text-2xl font-bold text-gray-200">
              Master's in Computer Science
            </h2>

            <h4 className="text-yellow-500 font-semibold mt-3">
              2023 - 2025
            </h4>

            <h5 className="mt-4 text-lg font-medium text-gray-300">
              Prof. Ramkrishna More College, Akurdi
            </h5>

            <p className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
              Completed my master's degree in computer science, focusing on
              advanced topics such as artificial intelligence, machine
              learning, and data science. Engaged in research projects aimed at
              solving real-world problems using innovative technologies.
            </p>

            <h4 className="mt-6 font-semibold">
              <span className="text-yellow-500">SGPA:</span> 8.68
            </h4>
          </div>

          {/* Bachelor's Card */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-yellow-500/20 transition duration-500">
            <h2 className="text-2xl font-bold text-gray-200">
              Bachelor's in Computer Science
            </h2>

            <h4 className="text-yellow-500 font-semibold mt-3">
              2020 - 2023
            </h4>

            <h5 className="mt-4 text-lg font-medium text-gray-300">
              Hutatma Rajguru Mahavidhyalaya, Rajgurunagar
            </h5>

            <p className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
              Completed my bachelor's degree in computer science, focusing on
              artificial intelligence, machine learning, and data science.
              Participated in academic projects to develop practical and
              innovative technical solutions.
            </p>

            <h4 className="mt-6 font-semibold">
              <span className="text-yellow-500">CGPA:</span> 7.64
            </h4>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;

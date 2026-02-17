import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Certification = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="py-20 px-6 bg-black text-white" id="certification">
      
      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-3xl md:text-5xl font-bold">
          CERTIFICATION..!!
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">

        {/* ================= Azure Certification ================= */}
        <div 
          className="bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-2 transition-all duration-500"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
            Microsoft Azure Certification (AZ-900)
          </h2>

          <ul className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
            <li>
              The Microsoft Azure Fundamentals (AZ-900) certification provides
              a strong understanding of cloud concepts, Azure services, pricing,
              security, and governance.
            </li>

            <li>
              Covers core Azure services, compliance, and cloud architecture fundamentals.
            </li>

            <li>
              Ideal for IT professionals, beginners, and business stakeholders
              starting their cloud journey.
            </li>
          </ul>
        </div>

        {/* ================= MERN Stack Certification ================= */}
        <div 
          className="bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-2 transition-all duration-500"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
            MERN Stack Certification
          </h2>

          <ul className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
            <li>
              Completed comprehensive training in MERN Stack development,
              covering MongoDB, Express.js, React.js, and Node.js.
            </li>

            <li>
              Developed full-stack web applications with authentication,
              REST APIs, database integration, and responsive UI.
            </li>

            <li>
              Gained hands-on experience in building scalable,
              modern web applications using industry best practices.
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
};

export default Certification;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 px-6 bg-black text-white" id="contact">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-down">
          <h1 className="text-3xl md:text-5xl font-bold">CONTACT ME..!!</h1>
          <p className="text-gray-400 mt-3">
            Below are the details to reach out to me!
          </p>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Cards */}
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          data-aos="fade-up"
        >
          {/* Address */}
          <a
            href="https://www.google.com/maps?q=Pune,Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-2 transition-all duration-500"
          >
            <FaLocationDot className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">ADDRESS</h3>
            <p className="text-gray-400 mt-2">Pune, Maharashtra</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+918600832098"
            className="block bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-2 transition-all duration-500"
          >
            <FaPhone className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">CONTACT NO.</h3>
            <p className="text-gray-400 mt-2">+91 8600832098</p>
          </a>

          {/* Email */}
          <a
            href="mailto:mayurthigale2002@gmail.com"
            className="block bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-2 transition-all duration-500"
          >
            <FaEnvelope className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg">EMAIL ADDRESS</h3>
            <p className="text-gray-400 mt-2 break-all">
              mayurthigale2002@gmail.com
            </p>
          </a>
        </div>

        {/* Resume Button */}
        <div className="text-center mt-14" data-aos="zoom-in">
          <a
            href="/Mayur_Thigale_Software_Developer_Resume.pdf"
            download
            className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ================= SOCIAL SECTION ================= */}
      <section className="py-16 bg-black text-white">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">
            Find me on..!!
          </h2>
          <p className="text-gray-400 mt-3 mb-10">
            Feel free to connect with me on social media platforms.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center flex-wrap gap-6 text-2xl">
            <a
              href="https://www.facebook.com/mayur.thigale.18/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/mayur_thigale_9331/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full hover:bg-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/mayur-thigale-14b8312b1/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/mayurthigale2002"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full hover:bg-gray-700 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.youtube.com/@mayurthigalepatil9331"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full hover:bg-red-600 transition duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import { useState, useEffect } from "react";
import AOS from "aos";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-3">
      <nav
        data-aos="fade-down"
        className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md shadow-lg rounded-2xl border border-black px-6 py-4"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
            MAYUR THIGALE
          </h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <li><a href="/" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-500 transition">About</a></li>
            <li><a href="/education" className="hover:text-yellow-500 transition">Education</a></li>
            <li><a href="/projects" className="hover:text-yellow-500 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-yellow-500 transition">Contact</a></li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-center font-medium">
            <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="/education" onClick={() => setIsOpen(false)}>Education</a></li>
            <li><a href="/projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";


const App = () => {
  return (
    <div className="bg-black text-white scroll-smooth">

      <Navbar />

      <Home />
      <About />
      <TechStack />
      <Education />
      <Projects />
      <Certification />
      <Contact />
      <Footer />

    </div>
  );
};

export default App;

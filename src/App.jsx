import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Terminal from "./components/Terminal";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Terminal />
      <Projects />
      <Resume />
      <Contact />
      <Footer />

      <BackToTop />
    </>
  );
}

export default App;
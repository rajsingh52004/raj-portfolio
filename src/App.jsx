import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

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
      <Timeline />
      <Projects />
      <Resume />
      <Contact />
      <Footer />

      <BackToTop />
    </>
  );
}

export default App;
import { motion } from "framer-motion";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">About Me</p>

        <h2>
          Java Full Stack Developer focused on building scalable web apps.
        </h2>

        <p>
          I am Raj Singh, a Java Full Stack Developer skilled in Java, Spring
          Boot, Hibernate, REST APIs, MySQL and React.js. I enjoy creating clean,
          responsive and production-ready web applications with strong backend
          architecture and modern frontend experience.
        </p>

        <div className="about-stats">
          <div>
            <h3>3+</h3>
            <span>Projects</span>
          </div>

          <div>
            <h3>Java</h3>
            <span>Core Stack</span>
          </div>

          <div>
            <h3>React</h3>
            <span>Frontend</span>
          </div>

          <div>
            <h3>Spring</h3>
            <span>Backend</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
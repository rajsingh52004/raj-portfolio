import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDatabase,
  FaShieldAlt,
  FaServer,
  FaCode,
  FaRocket,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostman,
  SiJunit5,
} from "react-icons/si";
import "../styles/About.css";

const expertise = [
  { icon: <FaJava />, name: "Java" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaShieldAlt />, name: "JWT Security" },
  { icon: <SiHibernate />, name: "Hibernate" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaServer />, name: "REST APIs" },
  { icon: <FaCode />, name: "Microservices" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiJunit5 />, name: "JUnit" },
];

const highlights = [
  "1.2+ Years Professional Experience",
  "15+ REST APIs Developed",
  "Enterprise MES Application Support",
  "Production Issue Resolution",
  "JWT Authentication & Spring Security",
  "Database Troubleshooting & Optimization",
];

function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-left">
          <p className="section-tag">About Me</p>

          <h2>
            Java Full Stack Developer building scalable enterprise web
            applications.
          </h2>

          <p className="about-summary">
            I am Raj Singh, a Java Full Stack Developer with 1.2+ years of
            professional experience in enterprise application development,
            production support and full-stack web solutions. I work with Java,
            Spring Boot, React.js, Hibernate, REST APIs, JWT, MySQL and
            Microservices to build clean, secure and scalable applications.
          </p>

          <div className="about-highlights">
            {highlights.map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>
        </div>

        <motion.div
          className="about-profile-card"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="profile-glow"></div>

          <h3>Raj Singh</h3>
          <p>Java Full Stack Developer</p>

          <div className="profile-status">
            <span></span>
            Available for Opportunities
          </div>

          <div className="profile-details">
            <div>
              <strong>1.2+</strong>
              <small>Years Exp.</small>
            </div>

            <div>
              <strong>15+</strong>
              <small>REST APIs</small>
            </div>

            <div>
              <strong>6+</strong>
              <small>Projects</small>
            </div>
          </div>

          <div className="profile-location">
            <FaMapMarkerAlt />
            Bengaluru / Pune, India
          </div>
        </motion.div>
      </motion.div>

      <div className="about-expertise">
        <motion.div
          className="about-sub-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <FaRocket />
          <h3>Core Expertise</h3>
        </motion.div>

        <div className="expertise-grid">
          {expertise.map((skill, index) => (
            <motion.div
              className="expertise-card"
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06 }}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="about-stats">
        <motion.div whileHover={{ y: -8 }}>
          <h3>1.2+</h3>
          <span>Years Experience</span>
        </motion.div>

        <motion.div whileHover={{ y: -8 }}>
          <h3>15+</h3>
          <span>REST APIs</span>
        </motion.div>

        <motion.div whileHover={{ y: -8 }}>
          <h3>6+</h3>
          <span>Projects</span>
        </motion.div>

        <motion.div whileHover={{ y: -8 }}>
          <h3>100%</h3>
          <span>Responsive Apps</span>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
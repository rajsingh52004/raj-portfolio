import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  { name: "Java", level: 90 },
  { name: "Spring Boot", level: 86 },
  { name: "React.js", level: 84 },
  { name: "MySQL", level: 82 },
  { name: "Hibernate", level: 80 },
  { name: "REST API", level: 85 },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <p className="section-tag">Technical Skills</p>
        <h2>Core Development Stack</h2>
      </div>

      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-progress-card"
            key={skill.name}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <motion.div
                className="skill-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: index * 0.12 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
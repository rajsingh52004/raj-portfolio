import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "../styles/Experience.css";

const experiences = [
  {
    company: "Rein Solutions",
    role: "MES Engineer",
    duration: "June 2026 – Present",
    location: "Pune, Maharashtra",
    status: "Current",
    responsibilities: [
      "Supported enterprise Manufacturing Execution System (MES) applications for automotive manufacturing.",
      "Investigated production issues using application logs, SQL queries and server traces.",
      "Executed SQL queries for data validation, reporting and database troubleshooting.",
      "Tested REST APIs using Postman and validated JSON/XML payloads.",
      "Performed Root Cause Analysis (RCA) and documented preventive fixes.",
      "Collaborated with Java developers and QA engineers during deployments.",
      "Managed incidents using Jira and ServiceNow while maintaining SLA compliance.",
      "Worked in Linux and Windows environments for production support.",
    ],
    tech: [
      "Java",
      "SQL",
      "MySQL",
      "REST API",
      "Postman",
      "JSON",
      "XML",
      "Linux",
      "Jira",
      "ServiceNow",
    ],
  },
  {
    company: "itsWin Technologies",
    role: "Associate Software Engineer",
    duration: "May 2025 – June 2026",
    location: "Indore, Madhya Pradesh",
    status: "Previous",
    responsibilities: [
      "Developed and maintained 15+ RESTful APIs using Spring Boot and Spring MVC for enterprise web applications.",
      "Designed scalable backend modules using Spring Boot, Spring Data JPA, Hibernate ORM and MySQL.",
      "Integrated React.js frontend with backend services using Axios for smooth client-server communication.",
      "Designed and optimized relational database schemas, wrote complex SQL queries and improved query performance.",
      "Implemented Spring Security and JWT-based authentication for secure role-based access control.",
      "Developed responsive and reusable React.js components using Hooks, JavaScript ES6+, HTML5 and CSS3.",
      "Optimized frontend performance through lazy loading, code splitting and component optimization.",
      "Created unit tests using JUnit 5 and Mockito to improve backend code quality and maintainability.",
      "Used Git and GitHub for version control, pull requests and feature branch workflows.",
      "Collaborated with senior developers and QA engineers to debug production issues and validate releases.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "JWT",
      "Hibernate",
      "JPA",
      "React.js",
      "JavaScript",
      "MySQL",
      "REST API",
      "Axios",
      "Git",
      "GitHub",
    ],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <motion.div
        className="experience-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">Career Journey</p>
        <h2>Professional Experience</h2>
        <p>
          Building enterprise applications, solving production challenges and
          developing scalable Java-based solutions.
        </p>
      </motion.div>

      <div className="timeline"></div>

      <div className="experience-wrapper">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="experience-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="experience-header">
              <div>
                <div className="role-row">
                  <FaBriefcase />
                  <h3>{exp.role}</h3>
                </div>
                <h4>{exp.company}</h4>
              </div>

              <span
                className={
                  exp.status === "Current"
                    ? "status current"
                    : "status previous"
                }
              >
                {exp.status}
              </span>
            </div>

            <div className="experience-info">
              <span>
                <FaCalendarAlt />
                {exp.duration}
              </span>

              <span>
                <FaMapMarkerAlt />
                {exp.location}
              </span>
            </div>

            <ul className="experience-list">
              {exp.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {exp.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "../styles/Projects.css";

import eliteBankImg from "../assets/elite-bank.png";
import emsImg from "../assets/ems.png";
import viloraImg from "../assets/vilora.png";

const projects = [
  {
    name: "Elite Bank",
    image: eliteBankImg,
    type: "Digital Banking System",
    desc: "Full-stack banking platform with account management, deposits, withdrawals, transfers and analytics.",
    features: [
      "Account Management",
      "Fund Transfer",
      "Transaction History",
      "Banking Analytics",
    ],
    tech: ["React", "Spring Boot", "Hibernate", "MySQL"],
    github: "https://github.com/rajsingh52004/Elite-Bank",
  },
  {
    name: "Employee Management System",
    image: emsImg,
    type: "Enterprise CRUD Application",
    desc: "Employee management solution with dashboard analytics, employee CRUD, department handling and REST APIs.",
    features: [
      "Employee CRUD",
      "Department Management",
      "Dashboard Analytics",
      "REST APIs",
    ],
    tech: ["Spring Boot", "JPA", "Hibernate", "MySQL"],
    github: "https://github.com/rajsingh52004/Employee_Management_System",
  },
  {
    name: "Vilora",
    image: viloraImg,
    type: "Premium E-Commerce Platform",
    desc: "Modern e-commerce app with authentication, cart, wishlist, order management and premium UI.",
    features: [
      "Cart & Wishlist",
      "Authentication",
      "Admin Dashboard",
      "Order Management",
    ],
    tech: ["React", "Context API", "GSAP", "Framer Motion"],
    github: "https://github.com/rajsingh52004/vilora-ecommerce",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <p className="section-tag">Featured Work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.name}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
          >
            <div className="project-image-wrap">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
            </div>

            <div className="project-top">
              <span>0{index + 1}</span>
              <p>{project.type}</p>
            </div>

            <h3>{project.name}</h3>

            <p className="project-desc">{project.desc}</p>

            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              <FaGithub /> View GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
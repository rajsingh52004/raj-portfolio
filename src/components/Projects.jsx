import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

import eliteBankImg from "../assets/elite-bank.png";
import emsImg from "../assets/ems.png";
import viloraImg from "../assets/vilora.png";
import singhQuantumImg from "../assets/singh-quantum.png";
import traviqueImg from "../assets/travique.png";
import cakeBloomImg from "../assets/cakebloom.png";

const projects = [
  {
    name: "Elite Bank",
    image: eliteBankImg,
    type: "Digital Banking System",
    desc: "Full-stack banking platform with account management, deposits, withdrawals, transfers and analytics.",
    features: ["Account Management", "Fund Transfer", "Transaction History", "Banking Analytics"],
    architecture: "React frontend with Spring Boot backend using Controller-Service-Repository layered architecture.",
    challenge: "Handled banking transaction flow, clean API structure, responsive dashboard and data consistency.",
    tech: ["React", "Spring Boot", "Hibernate", "MySQL", "REST API", "Axios"],
    github: "https://github.com/rajsingh52004/Elite-Bank",
  },
  {
    name: "Employee Management System",
    image: emsImg,
    type: "Enterprise CRUD Application",
    desc: "Employee management solution with dashboard analytics, employee CRUD, department handling and REST APIs.",
    features: ["Employee CRUD", "Department Management", "Dashboard Analytics", "REST APIs"],
    architecture: "Spring Boot backend with REST APIs, Hibernate ORM, MySQL database and layered architecture.",
    challenge: "Managed CRUD operations, clean API endpoints, validations and maintainable backend structure.",
    tech: ["Spring Boot", "JPA", "Hibernate", "MySQL", "REST API"],
    github: "https://github.com/rajsingh52004/Employee_Management_System",
  },
  {
    name: "Vilora",
    image: viloraImg,
    type: "Premium E-Commerce Platform",
    desc: "Modern e-commerce app with authentication, cart, wishlist, order management and premium UI.",
    features: ["Cart & Wishlist", "Authentication", "Admin Dashboard", "Order Management"],
    architecture: "React frontend using Context API, component-based architecture, routing and animated UI interactions.",
    challenge: "Built premium UI, product management flow, cart logic, wishlist handling and smooth user experience.",
    tech: ["React", "Context API", "JavaScript", "GSAP", "Framer Motion", "CSS3"],
    github: "https://github.com/rajsingh52004/vilora-ecommerce",
  },
  {
    name: "Singh Quaantam Labs",
    image: singhQuantumImg,
    type: "AI Career Platform",
    desc: "AI powered career ecosystem with job exploration, admin panel, career pages and modern animated UI.",
    features: ["AI Career Assistant", "Careers Page", "Admin Panel", "Job Exploration"],
    architecture: "Career platform built with modern frontend and backend structure for job and admin workflow.",
    challenge: "Created premium UI, career flow, admin access and responsive job platform experience.",
    tech: ["React", "Spring Boot", "REST API", "MySQL", "AI Chat"],
    github: "https://github.com/rajsingh52004/singh-quantum-careers-platform",
  },
  {
    name: "Travique",
    image: traviqueImg,
    type: "Travel Discovery Platform",
    desc: "Modern travel platform for discovering destinations, hotels, restaurants, saved places and AI trip planning.",
    features: ["AI Trip Planner", "Destination Search", "Saved Places", "Travel Compare"],
    architecture: "React-based travel platform with reusable components, routing and API-ready structure.",
    challenge: "Built large hero experience, global search design, AI planner UI and responsive travel workflow.",
    tech: ["React", "GSAP", "Framer Motion", "Weather API", "jsPDF"],
    github: "https://github.com/rajsingh52004/travique",
  },
  {
    name: "CakeBloom",
    image: cakeBloomImg,
    type: "Bouquet & Cake Ordering Platform",
    desc: "Online bouquet and cake ordering system built with microservices architecture and premium product UI.",
    features: ["Product Ordering", "Cart System", "Login & Register", "Microservices Architecture"],
    architecture: "Microservices-based platform with separated services, API Gateway, Eureka and database integration.",
    challenge: "Designed ordering flow, product modules, service communication and responsive celebration-themed UI.",
    tech: ["React", "Spring Boot", "Microservices", "Eureka", "API Gateway", "MySQL"],
    github: "https://github.com/rajsingh52004/Online-Bouquet-Cake-Microservices",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
            transition={{ duration: 0.7, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
          >
            <div className="project-image-wrap">
              <img src={project.image} alt={project.name} className="project-image" />
            </div>

            <div className="project-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
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
              {project.tech.slice(0, 5).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-actions">
              <button className="project-btn details" onClick={() => setSelectedProject(project)}>
                <FaExternalLinkAlt /> View Details
              </button>

              <a href={project.github} target="_blank" rel="noreferrer" className="project-btn github">
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <FaTimes />
              </button>

              <img src={selectedProject.image} alt={selectedProject.name} className="modal-image" />

              <p className="modal-type">{selectedProject.type}</p>
              <h2>{selectedProject.name}</h2>
              <p className="modal-desc">{selectedProject.desc}</p>

              <div className="modal-section">
                <h4>Key Features</h4>
                <ul>
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Architecture</h4>
                <p>{selectedProject.architecture}</p>
              </div>

              <div className="modal-section">
                <h4>Challenges Solved</h4>
                <p>{selectedProject.challenge}</p>
              </div>

              <div className="modal-tech">
                {selectedProject.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modal-github">
                <FaGithub /> Open GitHub Repository
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
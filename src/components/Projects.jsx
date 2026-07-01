import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

import { projectsData } from "../data/projectsData";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <p className="section-tag">Featured Work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
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
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{project.type}</p>
            </div>

            <h3>{project.name}</h3>

            <p className="project-desc">{project.shortDesc}</p>

            <ul className="project-features">
              {project.features.slice(0, 4).map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <div className="project-tech">
              {project.tech.slice(0, 5).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-actions">
              <button
                className="project-btn details"
                onClick={() => setSelectedProject(project)}
              >
                <FaExternalLinkAlt /> Case Study
              </button>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn github"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
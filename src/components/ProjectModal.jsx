import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
  FaServer,
  FaLightbulb,
  FaRocket,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";
import "../styles/ProjectModal.css";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="case-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="case-modal"
          initial={{ opacity: 0, scale: 0.88, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 50 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="case-close" onClick={onClose}>
            <FaTimes />
          </button>

          <div className="case-hero">
            <img src={project.image} alt={project.name} />

            <div className="case-hero-content">
              <p>{project.type}</p>
              <h2>{project.name}</h2>
              <span>{project.shortDesc}</span>

              <div className="case-hero-actions">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>

                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="case-snapshot">
            <div>
              <strong>{project.role}</strong>
              <span>Role</span>
            </div>

            <div>
              <strong>{project.duration}</strong>
              <span>Duration</span>
            </div>

            <div>
              <strong>{project.status}</strong>
              <span>Status</span>
            </div>

            <div>
              <strong>{project.tech[0]}</strong>
              <span>Main Stack</span>
            </div>
          </div>

          <div className="case-section two-col">
            <div className="case-info-card">
              <FaLightbulb />
              <h3>Problem Statement</h3>
              <p>{project.problem}</p>
            </div>

            <div className="case-info-card">
              <FaRocket />
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="case-section">
            <div className="case-title">
              <FaLayerGroup />
              <h3>System Architecture</h3>
            </div>

            <div className="architecture-flow">
              {project.architecture.map((item, index) => (
                <div className="architecture-step" key={item}>
                  <span>{item}</span>
                  {index !== project.architecture.length - 1 && <b>↓</b>}
                </div>
              ))}
            </div>
          </div>

          <div className="case-section">
            <div className="case-title">
              <FaCode />
              <h3>Key Features</h3>
            </div>

            <div className="case-feature-grid">
              {project.features.map((feature) => (
                <div className="case-feature-card" key={feature}>
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="case-section two-col">
            <div>
              <div className="case-title mini">
                <FaDatabase />
                <h3>Database Design</h3>
              </div>

              <div className="database-list">
                {project.database.map((table) => (
                  <span key={table}>{table}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="case-title mini">
                <FaServer />
                <h3>REST API Endpoints</h3>
              </div>

              <div className="api-list">
                {project.apis.map((api) => (
                  <div className="api-card" key={`${api.method}-${api.endpoint}`}>
                    <strong className={`method ${api.method.toLowerCase()}`}>
                      {api.method}
                    </strong>
                    <span>{api.endpoint}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="case-section two-col">
            <div>
              <div className="case-title mini">
                <FaLightbulb />
                <h3>Challenges Solved</h3>
              </div>

              <ul className="case-list">
                {project.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="case-title mini">
                <FaRocket />
                <h3>Key Learnings</h3>
              </div>

              <ul className="case-list">
                {project.learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="case-section">
            <div className="case-title">
              <FaCode />
              <h3>Technology Stack</h3>
            </div>

            <div className="case-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="case-bottom">
            <a href={project.github} target="_blank" rel="noreferrer">
              <FaGithub /> Open Repository
            </a>

            <button onClick={onClose}>
              <FaTimes /> Close Case Study
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
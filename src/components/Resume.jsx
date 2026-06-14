import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";
import "../styles/Resume.css";
import resumeFile from "../assets/Raj_Singh_Resume.pdf";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">Resume</p>

        <h2>Download My Resume</h2>

        <p>
          View or download my latest Java Full Stack Developer resume including
          skills, education and projects.
        </p>

        <div className="resume-actions">
          <a href={resumeFile} target="_blank" rel="noreferrer" className="resume-btn outline">
            <FaEye /> View Resume
          </a>

          <a href={resumeFile} download="Raj_Singh_Resume.pdf" className="resume-btn primary">
            <FaDownload /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Resume;
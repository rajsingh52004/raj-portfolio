import { motion } from "framer-motion";
import { FaDownload, FaEye, FaShareAlt } from "react-icons/fa";
import "../styles/Resume.css";
import resumeFile from "../assets/Raj_Singh_Resume.pdf";

function Resume() {
  const handleShareResume = async () => {
    try {
      const response = await fetch(resumeFile);
      const blob = await response.blob();

      const file = new File([blob], "Raj_Singh_Resume.pdf", {
        type: "application/pdf",
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Raj Singh Resume",
          text: "Raj Singh - Java Full Stack Developer Resume",
          files: [file],
        });
      } else if (navigator.share) {
        await navigator.share({
          title: "Raj Singh Resume",
          text: "Raj Singh - Java Full Stack Developer Resume",
          url: window.location.origin + resumeFile,
        });
      } else {
        window.open(resumeFile, "_blank");
      }
    } catch (error) {
      window.open(resumeFile, "_blank");
    }
  };

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
          View, download or share my latest Java Full Stack Developer resume.
        </p>

        <div className="resume-actions">
          <a
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
            className="resume-btn outline"
          >
            <FaEye /> View Resume
          </a>

          <a
            href={resumeFile}
            download="Raj_Singh_Resume.pdf"
            className="resume-btn primary"
          >
            <FaDownload /> Download PDF
          </a>

          <button className="resume-btn share" onClick={handleShareResume}>
            <FaShareAlt /> Share Resume
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Resume;
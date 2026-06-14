import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <p className="section-tag">Contact</p>
        <h2>Let&apos;s Connect</h2>
      </div>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <a href="mailto:rajsingh2781979@gmail.com">
          <FaEnvelope /> rajsingh2781979@gmail.com
        </a>

        <a href="tel:+918358849865">
          <FaPhoneAlt /> +91 8358849865
        </a>

        <p>
          <FaMapMarkerAlt /> Bengaluru, India
        </p>

        <a href="https://github.com/rajsingh52004" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub Profile
        </a>

        <a href="https://www.linkedin.com/in/rajsingh0105" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn Profile
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
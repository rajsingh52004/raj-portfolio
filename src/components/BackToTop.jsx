import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/BackToTop.css";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleShow);
    handleShow();

    return () => window.removeEventListener("scroll", handleShow);
  }, []);

  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top ${show ? "show" : ""}`}
      onClick={moveTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;
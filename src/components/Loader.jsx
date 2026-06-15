import { useEffect, useState } from "react";
import "../styles/Loader.css";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <h1>RAJ SINGH</h1>

        <h2>JAVA FULL STACK DEVELOPER</h2>

        <div className="loader-bar">
          <div className="loader-fill"></div>
        </div>

        <p>Loading Portfolio...</p>
      </div>
    </div>
  );
}

export default Loader;
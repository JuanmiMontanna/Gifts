import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="not-found-container">
      <h2>⚠️ Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <div className="not-found-emoji">🛸</div>
      <p className="redirect-text">
        Serás redirigido al inicio en <strong>{countdown}</strong>{" "}
        {countdown === 1 ? "segundo" : "segundos"}...
      </p>
      <button className="back-button" onClick={() => navigate("/")}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default NotFoundPage;

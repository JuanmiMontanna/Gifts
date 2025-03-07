import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a la App de Regalos 🎁</h1>
      <p className="home-text">
        Administra y organiza los regalos de manera sencilla y sin
        complicaciones.
      </p>
      <div className="homeButtons">
        <button className="homeButton" onClick={() => navigate("/list")}>
          🎁 Ver Lista de Regalos
        </button>
        <button className="homeButton" onClick={() => navigate("/form")}>
          ➕ Añadir Regalo
        </button>
      </div>
    </div>
  );
};

export default Home;

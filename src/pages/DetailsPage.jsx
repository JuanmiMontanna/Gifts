import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GiftContext } from "../App";

const DetailsPage = () => {
  const { id } = useParams();
  const { gifts } = useContext(GiftContext);
  const navigate = useNavigate();

  const gift = gifts[parseInt(id)];

  if (!gift) {
    return (
      <div className="details-container">
        <h2>Regalo no encontrado</h2>
        <button className="back-button" onClick={() => navigate("/list")}>
          Volver a la Lista
        </button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <h2>Detalles del Regalo</h2>
      <p>
        <strong>Nombre:</strong> {gift.name}
      </p>
      <p>
        <strong>Descripción:</strong> {gift.description}
      </p>
      <button className="back-button" onClick={() => navigate("/list")}>
        Volver a la Lista
      </button>
    </div>
  );
};

export default DetailsPage;

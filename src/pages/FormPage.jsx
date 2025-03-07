import { useState, useContext } from "react";
import { GiftContext } from "../App";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const { gifts, setGifts } = useContext(GiftContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const addGift = (name, description) => {
    setGifts([...gifts, { name, description }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      setError("⚠️ Ambos campos son obligatorios.");
      setSuccess(false);
      return;
    }

    addGift(name, description);
    setName("");
    setDescription("");
    setError("");
    setSuccess(true);

    setTimeout(() => {
      navigate("/list");
    }, 1000);
  };

  return (
    <div className="form-container">
      <h2>Agregar un Regalo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la persona:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Juan Pérez"
          />
        </div>
        <div>
          <label>Descripción del regalo:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ej: Libro, Reloj, Chocolates..."
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && (
          <p className="success-message">✅ Regalo agregado correctamente</p>
        )}
        <button className="botonForm" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormPage;

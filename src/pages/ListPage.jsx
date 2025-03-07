import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GiftContext } from "../App";

const ListPage = () => {
  const context = useContext(GiftContext);

  const { gifts } = context;

  return (
    <div className="list-container">
      <h2>Lista de Regalos</h2>
      {gifts.length === 0 ? (
        <ul>
          <li className="empty-list">No hay regalos pendientes</li>
        </ul>
      ) : (
        <ul>
          {gifts.map((gift, index) => (
            <li key={index}>
              <Link
                to={`/details/${index}`}
                style={{ display: "block", width: "100%", height: "100%" }}
              >
                <div>{gift.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPage;

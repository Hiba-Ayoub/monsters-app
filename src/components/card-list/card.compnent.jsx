import React from "react";
import "./card-list.styles.css";

const Card = ({ monster1 }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${monster1.id}?set=set2&size=128x128`}
        alt={monster1.name}
      />
      <h3>{monster1.name}</h3>
      <p>{monster1.email}</p>
    </div>
  );
};

export default Card;

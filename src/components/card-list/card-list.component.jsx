import React from "react";
import "./card-list.styles.css";
import Card from "./card.compnent";

const CardList = ({ monsters }) => {
  //   console.log(props, "prooo");

  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster1={monster} />
      ))}
    </div>
  );
};

export default CardList;

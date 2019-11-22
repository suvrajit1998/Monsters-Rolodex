import React from "react";
import "./Card-list.style.css";
import { Cardcomponents } from "../card-componenets/card.component";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monstars.map(monstar => (
        <Cardcomponents key={monstar.id} monstar={monstar} />
      ))}
    </div>
  );
};

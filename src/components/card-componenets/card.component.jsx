import React from "react";
import "./Card.component.style.css";

export const Cardcomponents = props => (
  <div className="card-component">
    <img
      alt="monsters"
      src={`https://robohash.org/${props.monstar.id}?set=set&size=180x180`}
    />
    <h2>{props.monstar.name}</h2>
    <p>{props.monstar.email}</p>
  </div>
);

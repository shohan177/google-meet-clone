import React from "react";
import "./Card.css";

const Card = (props) => {
  return <div className="card-live-chat">{props.children}</div>;
};

export default Card;

import React from "react";
import "./card.css";
import Button from "../button/button";

const Card = ({ course, onAddItem, onRemoveItem }) => {
  return (
    <div className="card">
      <span className="card__badge">{course.id}</span>

      <div className="image__container">
        <img
          src={course.image}
          alt={course.title}
          width="100%"
          height="230px"
        />
      </div>

      <div className="card__body">
        <h2 className="card__title">{course.title}</h2>
        <div className="card__price">
          {Number(course.price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>

      <div className="btn_container">
        <Button title={"+"} type={"add"} onClick={() => onAddItem(course)} />
        <Button title={"-"} type={"remove"} onClick={() => onRemoveItem(course)} />
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./button.css";

const Button = (props) => {
  const { type, title, onClick} = props;
  return (
    <div>
      <div
        className={`btn ${
          (type == "add" && "add") ||
          (type == "remove" && "remove") ||
          (type == "checkout" && "checkout")
        }`}
        onClick={onClick}
      >
        {title}
      </div>
    </div>
  );
};

export default Button;

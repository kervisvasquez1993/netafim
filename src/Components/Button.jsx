import React from "react";

const Button = ({ text, onClick, variant }) => {
  let className = "px-4 py-2 rounded-md font-medium ";
  switch (variant) {
    case "primary":
      className += " bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "secondary":
      className += " bg-white-300 text-gray-700 hover:bg-gray-400";
      break;
    default:
      break;
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
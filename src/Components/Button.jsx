import React from "react";

const Button = ({ text, onClick, variant, pt = 5, pb = 5 }) => {
    let className = "px-4 py-2 rounded-md font-medium ";
    switch (variant) {
        case "primary":
            className += " border bg-blue-500 text-white hover:bg-blue-600";
            break;
        case "secondary":
            className +=
                "border bg-white-300  hover:bg-blue-500 hover:text-white";
            break;
        default:
            break;
    }

    return (
        <div className={`flex justify-center pt-${pt} pb-${pb}`}>
            <button className={className} onClick={onClick}>
                {text}
            </button>
        </div>
    );
};

export default Button;

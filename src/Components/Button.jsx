import React from "react";

const Button = ({ text, onClick, variant, pt = 5, pb = 5 }) => {
    let className = "px-4 py-2 rounded-md font-medium ";
    switch (variant) {
        case "primary":
            className += "button-style";
            break;
        case "secondary":
            className +=
                "button-style-white";
            break;
        default:
            break;
    }

    return (
        <div className={`flex justify-center pt-${pt} pb-${pb}`}>
            <button
                className={className}
                style={{ minWidth: "200px", height: "50px" }}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;

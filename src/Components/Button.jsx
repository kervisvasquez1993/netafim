import React from "react";

const Button = ({ text, onClick, variant, pt = 5, pb = 5 }) => {
    let className = "px-4 py-2 rounded-md font-medium ";
    switch (variant) {
        case "primary":
            className += " border bg-blue-500 text-white hover:bg-blue-600";
            break;
        case "secondary":
            className +=
                "border border-blue-500 bg-white text-blue-500 rounded px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-500 hover:text-white focus:outline-none focus:shadow-outline";
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

import React from "react";
import { Link } from "react-router-dom";

const Card = ({ icon, buttonText, ruta }) => {
    return (
        <div
            className="bg-white white:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl "
            style={{
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
            }}
        >
            <div className="p-4 flex items-center justify-center"><img src={icon} /></div>

            <Link
                className="bg-blue-500 text-white text-center text-xl py-2 px-4 rounded-lg"
                to={ruta}
            >
                {buttonText}
            </Link>
        </div>
    );
};

export default Card;

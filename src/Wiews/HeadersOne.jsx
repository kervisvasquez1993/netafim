import React from "react";
import imagen from "../assets/svg/logonetafim.svg";
import { Link } from "react-router-dom";

export const HeadersOne = () => {
    return (
        <header
            className="flex justify-center items-center"
            style={{
                height: "15vh",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Link to={"/home"} className="w-full flex items-center justify-center">
                <img src={imagen} alt="Imagen de cabecera" className="w-1/2" />
            </Link>
        </header>
    );
};

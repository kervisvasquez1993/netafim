import React from "react";
import imagen from "../assets/logo.png";

export const HeadersOne = () => {
    return (
        <header className="flex justify-center items-center h-24 bg-gray-100">
            <img
                src={imagen}
                alt="Imagen de cabecera"
                className="w-1/2"
            />
        </header>
    );
};

import React from "react";
import imagen from "../assets/svg/logonetafimmasorbia.svg";

export const HeadersTwo = () => {
    return (
        <header className="flex justify-center items-center h-24 bg-gray-100">
            <img
                src={imagen}
                alt="Imagen de cabecera"
                className="w-full py-10 my-10"
            />
        </header>
    );
};

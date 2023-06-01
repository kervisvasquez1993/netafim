import React from "react";
import imagen from "../assets/svg/logonetafim.svg";

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
            <img src={imagen} alt="Imagen de cabecera" className="w-1/2" />
        </header>
    );
};

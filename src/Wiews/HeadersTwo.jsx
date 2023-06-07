import React from "react";
import imagen from "../assets/svg/logonetafimmasorbia.svg";
import { Link } from "react-router-dom";

export const HeadersTwo = () => {
    return (
        <header className="flex justify-center items-center h-24 bg-gray-100">
            <Link to={"/home"} className="w-full">
                <img
                    src={imagen}
                    alt="Imagen de cabecera"
                    className="w-full py-10 my-10"
                />
            </Link>
        </header>
    );
};

import React from "react";
import { HeadersOne } from "../../Wiews/HeadersOne";
import { TitleHeaders } from "../../Components/TitleHeaders";
import Button from "../../Components/Button";
import ImageUploader from "../../Components/ImageUpload";

const CreateBusinessCard = () => {
    const saludar = () => {
        console.log("hola");
    };
    return (
        <>
            <HeadersOne />
            <TitleHeaders
                title={
                    "Subir Tarjeta "
                }
            />
            {/* <TitleHeaders
                title={
                    "Puede tomar foto de una Tarjeta de Presentación y luego transcribir los datos "
                }
            /> */}

            <ImageUploader />
        </>
    );
};

export default CreateBusinessCard;

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
                    "Puede tomar foto de una Tarjeta de Presentación y luego transcribir los datos "
                }
            />
            <div class="flex flex-col justify-center items-center space-y-4 my-4">
                <Button
                    text={"tomar una foto"}
                    onClick={saludar}
                    variant={"primary"}
                />
                <Button
                    text={"Cargar una Foto"}
                    onClick={saludar}
                    variant={"secondary"}
                />
            </div>
            <ImageUploader />
        </>
    );
};

export default CreateBusinessCard;

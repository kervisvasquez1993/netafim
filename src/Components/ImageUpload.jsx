import React, { useState } from "react";
import imagenUpload from "../assets/sin-img.png";
import { useParams } from "react-router-dom";
import useCustomers from "../Hooks/useCustomers";
import useCard from "../Hooks/useCard";

function ImageUploader() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(imagenUpload);
    const {submitNewTaerjeta} = useCard();
    const params = useParams();
    const handleSubmit =  (event) => {
        event.preventDefault();

        if (!selectedFile) {
            console.log("No se ha seleccionado ningún archivo");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("src_img", selectedFile);
             submitNewTaerjeta(formData, params.id);
        } catch (error) {
            console.error("Error al enviar la imagen:", error);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setSelectedFile(event.dataTransfer.files[0]);
    };

    const handleImageClick = () => {
        document.getElementById("file-input").click();
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setImageSrc(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="bg-white rounded-lg border border-gray-400 p-6">
            <form onSubmit={handleSubmit}>
                <label htmlFor="file-input" className="block mb-4">
                    <div className="border-dashed border-2 border-gray-400 rounded-lg p-4">
                        <img
                            src={imageSrc}
                            alt="Selecciona una imagen"
                            className="block mx-auto cursor-pointer object-contain w-full h-full"
                            onClick={handleImageClick}
                        />
                    </div>
                </label>
                <input
                    id="file-input"
                    type="file"
                    className="hidden"
                    name="src_img"
                    onChange={handleFileChange}
                />

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    type="submit"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default ImageUploader;

import React, { useState, useRef } from "react";
import imagenUpload from "../assets/sin-img.png";
import { useParams } from "react-router-dom";
import useCard from "../Hooks/useCard";
import Swal from "sweetalert2";

function ImageUploader() {
    const fileInputRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(imagenUpload);
    const [isLoading, setIsLoading] = useState(false);
    const { submitNewTaerjeta } = useCard();
    const params = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const selectedFile = fileInputRef.current.files[0];

        if (!selectedFile) {
            Swal.fire({
                title: "Error!",
                text: "No se ha seleccionado ningún archivo",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
            return;
        }

        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append("src_img", selectedFile);
            if (params.id) {
                console.log("params.id", params.id);
                await submitNewTaerjeta(formData, params.id);
            } else {
                console.log("params.id sin esto");
                await submitNewTaerjeta(formData);
            }

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            Swal.fire({
                title: "Error!",
                text: "Error al enviar la imagen",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = () => {
        const selectedFile = fileInputRef.current.files[0];
        setImageSrc(URL.createObjectURL(selectedFile));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-lg border border-gray-400 p-6">
                <label htmlFor="file-input" className="block mb-4">
                    <div className="border-dashed border-2 border-gray-400 rounded-lg p-4">
                        {isLoading ? (
                            <p>Cargando archivo...</p>
                        ) : (
                            <img
                                src={imageSrc}
                                alt="Selecciona una imagen"
                                className="block mx-auto cursor-pointer object-contain w-full h-full"
                                onClick={handleImageClick}
                            />
                        )}
                    </div>
                </label>
                <input
                    ref={fileInputRef}
                    id="file-input"
                    type="file"
                    className="hidden"
                    name="src_img"
                    onChange={handleFileChange}
                />
            </div>

            <div className={`flex justify-center pt-10 pb-5`}>
                <button
                    className={
                        "px-4 py-2 rounded-md font-medium border bg-blue-500 text-white hover:bg-blue-600"
                    }
                    style={{ minWidth: "200px", height: "50px" }}
                    type="submit"
                >
                    Subir Archivo
                </button>
            </div>
        </form>
    );
}

export default ImageUploader;

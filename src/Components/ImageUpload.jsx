import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import useCard from "../Hooks/useCard";
import Swal from "sweetalert2";
import Webcam from "react-webcam";
import Loading from "../Wiews/Loading";

function ImageUploader() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { submitNewTaerjeta } = useCard();
    const params = useParams();
    const webcamRef = useRef(null);
    const [facingMode, setFacingMode] = useState("environment");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            Swal.fire({
                title: "Error!",
                text: "No se ha seleccionado ninguna imagen",
                icon: "error",
                confirmButtonText: "Aceptar",
                confirmButtonColor : "#0a7dd6",
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
                confirmButtonColor : "#0a7dd6",
            });
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleCancelImage = () => {
        setSelectedFile(null);
        document.getElementById("file-input").value = "";
    };

    const handleImageUploadClick = () => {
        document.getElementById("file-input").click();
    };

    const handleCameraButtonClick = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            const capturedImage = dataURLtoFile(imageSrc, "capturedImage.jpeg");
            setSelectedFile(capturedImage);
        }
    };

    const handleGalleryButtonClick = () => {
        document.getElementById("gallery-input").click();
    };

    const handleGalleryFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSwitchCamera = () => {
        setFacingMode(facingMode === "user" ? "environment" : "user");
    };

    const dataURLtoFile = (dataURL, filename) => {
        const arr = dataURL.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                {isLoading ? (
                    <p>
                        <Loading />
                    </p>
                ) : (
                    <>
                        <div className="flex flex-col items-center justify-center">
                            <button
                                type="button"
                                className="button-style-2 text-center mb-5"
                                onClick={handleCameraButtonClick}
                            >
                                Tomar una foto
                            </button>
                            <button
                                type="button"
                                className="button-style-white text-center mb-5"
                                onClick={handleGalleryButtonClick}
                            >
                                Cargar una foto
                            </button>
                            {selectedFile && (
                                <button
                                    type="button"
                                    className="button-style-red text-center "
                                    onClick={handleCancelImage}
                                >
                                    Cancelar
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
            <div className="bg-white rounded-lg shadow-md pr-10 pl-10 mt-10 mb-10 min-height-200px">
                {selectedFile ? (
                    <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Imagen seleccionada"
                        className="block mx-auto cursor-pointer object-contain w-full h-full min-height-200px"
                        onClick={handleImageUploadClick}
                    />
                ) : (
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{ facingMode }}
                        className="block mx-auto cursor-pointer object-contain w-full h-full min-height-200px"
                        onClick={handleImageUploadClick}
                    />
                )}
                <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    name="src_img"
                    onChange={handleFileChange}
                />
                <input
                    id="gallery-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    name="src_img"
                    onChange={handleGalleryFileChange}
                />
            </div>

            <div className="flex justify-center pt-10 pb-5">
                <button
                    className="button-style"
                    style={{ minWidth: "200px", height: "50px" }}
                    type="submit"
                    disabled={isLoading || !selectedFile}
                >
                    {isLoading ? "Cargando..." : "Subir Archivo"}
                </button>
            </div>
        </form>
    );
}

export default ImageUploader;

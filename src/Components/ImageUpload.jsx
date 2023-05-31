import { useState } from "react";
import imagenUpload from "../assets/sin-img.png";
import { useParams, Link, useNavigate } from "react-router-dom";
import useCustomers from "../Hooks/useCustomers";
import { configHeaderToken } from "../Helpers";

function ImageUploader() {
    const config = configHeaderToken();
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(imagenUpload);
    const { submitNewTaerjeta } = useCustomers();
    const params = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectedFile) {
            

            try {
                await submitNewTaerjeta(selectedFile, params.id);
                console.log("Imagen enviada:", imageSrc);
            } catch (error) {
                console.error(error);
            }
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

    const handleTakePhoto = () => {
        const video = document.createElement("video");
        const constraints = {
            video: {
                facingMode: "environment",
                width: { ideal: 640 },
                height: { ideal: 480 },
            },
        };

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                const img = document.createElement("img");
                img.srcObject = stream;
                img.onload = () => {
                    URL.revokeObjectURL(img.src);
                    video.srcObject = null;
                    setImageSrc(img.src);
                    setSelectedFile(dataURItoFile(img.src));
                };
                video.srcObject = stream;
                video.play();
            })
            .catch((error) => {
                console.error(error);
            });

        function dataURItoFile(dataURI) {
            const byteString = atob(dataURI.split(",")[1]);
            const mimeString = dataURI
                .split(",")[0]
                .split(":")[1]
                .split(";")[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([ab], { type: mimeString });
            const file = new File([blob], "photo.jpg", { type: mimeString });
            return file;
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center space-y-4 my-4">
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
                    onClick={handleTakePhoto}
                >
                    Tomar foto
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg border border-gray-400 p-6">
                    <label htmlFor="file-input" className="block mb-4">
                        <div className="border-dashed border-2 border-gray-400 rounded-lg p-4">
                            <img
                                src={imageSrc}
                                alt="Selecciona una imagen"
                                className="block mx-auto cursor-pointer object-contain w-full h-full"
                                onClick={handleImageClick}
                            />
                        </div>
                        <input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            name="file"
                            onChange={handleFileChange}
                        />
                    </label>
                </div>
                <div class="flex flex-col justify-center items-center space-y-4 my-4">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Subir imagen
                    </button>
                </div>
            </form>
        </>
    );
}

export default ImageUploader;

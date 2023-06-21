import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCard from "../Hooks/useCard";
import Swal from "sweetalert2";
import Webcam from "react-webcam";
import Loading from "../Wiews/Loading";

function ImageUploader() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { submitNewTaerjeta } = useCard();
  const params = useParams();
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState("environment");
  const [isWebcamReady, setIsWebcamReady] = useState(false);

  useEffect(() => {
    setIsWebcamReady(true);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFiles.length === 0) {
      Swal.fire({
        title: "Error!",
        text: "No se ha seleccionado ninguna imagen",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      selectedFiles.forEach((file, index) => {
        formData.append(`src_img${index}`, file);
      });

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

  const handleFileChange = (event) => {
    const files = event.target.files;
    const updatedSelectedFiles = [...selectedFiles];

    for (let i = 0; i < files.length; i++) {
      updatedSelectedFiles.push(files[i]);
    }

    setSelectedFiles(updatedSelectedFiles);
  };

  const handleCancelImage = (index) => {
    const updatedSelectedFiles = [...selectedFiles];
    updatedSelectedFiles.splice(index, 1);
    setSelectedFiles(updatedSelectedFiles);
  };

  const handleAddMorePhotos = () => {
    handleCameraButtonClick();
  };

  const handleImageUploadClick = () => {
    document.getElementById("file-input").click();
  };

  const handleCameraButtonClick = () => {
    if (isWebcamReady) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const capturedImage = dataURLtoFile(imageSrc, "capturedImage.jpeg");
        const updatedSelectedFiles = [...selectedFiles, capturedImage];
        setSelectedFiles(updatedSelectedFiles);
      }
    }
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
          <Loading />
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <button
                type="button"
                className="button-style-2 text-center m-5"
                onClick={handleCameraButtonClick}
              >
                Tomar una foto
              </button>
              {selectedFiles.length > 0 && (
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

      {/* Tarjeta de la cámara */}
      {isWebcamReady && (
        <div className="bg-white rounded-lg shadow-md pr-10 pl-10 mt-10 mb-10 min-height-200px">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode }}
            className="block mx-auto cursor-pointer object-contain w-full h-full min-height-200px"
            onClick={handleImageUploadClick}
          />
        </div>
      )}
      {/* Fin de la tarjeta de la cámara */}

      {/* Lista de tarjetas */}
      <div className="flex flex-wrap justify-center">
        {selectedFiles.map((file, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md pr-10 pl-10 mt-10 mb-10 min-height-200px">
            <img
              src={URL.createObjectURL(file)}
              alt={`Imagen ${index + 1}`}
              className="block mx-auto cursor-pointer object-contain w-full h-full min-height-200px"
              onClick={handleImageUploadClick}
            />
            <button
              type="button"
              className="button-style-red text-center mt-2"
              onClick={() => handleCancelImage(index)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      {/* Fin de lista de tarjetas */}

      <input
        id="file-input"
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        name="src_img"
        multiple
        onChange={handleFileChange}
      />

      <div className="flex justify-center pt-10 pb-5">
        <button
          className="button-style"
          style={{ minWidth: "200px", height: "50px" }}
          type="submit"
          disabled={isLoading || selectedFiles.length === 0}
        >
          {isLoading ? "Cargando..." : "Subir Archivo"}
        </button>
      </div>
    </form>
  );
}

export default ImageUploader;

import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

const ImageUploader = () => {
  const cameraRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      // Mostrar mensaje de error si no se ha seleccionado ninguna imagen
      return;
    }

    setIsLoading(true);

    try {
      // Procesar y enviar la imagen seleccionada
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // Mostrar mensaje de error en caso de falla en el envío de la imagen
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
    setCameraVisible(!cameraVisible);
  };

  const handleTakePhoto = () => {
    const photo = cameraRef.current.takePhoto();

    if (photo) {
      const objectUrl = URL.createObjectURL(photo);
      setSelectedFile(objectUrl);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-lg shadow-md pr-10 pl-10 mt-10 mb-10 min-height-200px relative">
        {selectedFile ? (
          <img
            src={selectedFile}
            alt="Imagen seleccionada"
            className="block mx-auto cursor-pointer object-contain w-full h-full min-height-200px"
            onClick={handleImageUploadClick}
          />
        ) : (
          <>
            {cameraVisible && (
              <div className="camera-container absolute inset-0 flex items-center justify-center">
                <Camera ref={cameraRef} />
              </div>
            )}
            {!cameraVisible && (
              <button
                className="camera-toggle-button absolute inset-0 w-full h-full bg-transparent text-center"
                onClick={handleCameraButtonClick}
              >
                Mostrar cámara
              </button>
            )}
          </>
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
      </div>
      <div className="">
        {isLoading ? (
          <p>Cargando archivo...</p>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <label
                htmlFor="file-input"
                className="button-style-2 text-center m-5"
              >
                {selectedFile ? "Cambiar imagen" : "Seleccionar imagen"}
              </label>
              {cameraVisible && (
                <button
                  type="button"
                  className="button-style-2 text-center m-5"
                  onClick={handleTakePhoto}
                >
                  Tomar foto
                </button>
              )}
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
};

export default ImageUploader;

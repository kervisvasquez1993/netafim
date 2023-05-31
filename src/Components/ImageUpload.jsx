import { useState } from "react";
import imagenUpload from "../assets/sin-img.png";

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(imagenUpload);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar la imagen a través de una petición a un servidor
    console.log("Imagen enviada:", selectedFile);
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
    <div
      className="border rounded p-4"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-input">
          <div className="border-dashed border-2 border-gray-400 p-4">
            <img
              src={imageSrc}
              alt="Selecciona una imagen"
              className="mx-auto cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
        </label>
        <input
          id="file-input"
          type="file"
          className="hidden"
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
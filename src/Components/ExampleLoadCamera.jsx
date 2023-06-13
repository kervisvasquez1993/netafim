import React, { useState, useRef } from 'react';

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.log('Error accessing camera:', error);
      });
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      setSelectedFile(blob);
    }, 'image/jpeg');

    stopCamera();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCancelImage = () => {
    setSelectedFile(null);
    document.getElementById('file-input').value = '';
  };

  const handleCameraButtonClick = () => {
    if (selectedFile) {
      setSelectedFile(null);
    } else {
      startCamera();
    }
  };

  return (
    <div>
      {selectedFile ? (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Imagen seleccionada"
          className="block mx-auto cursor-pointer object-contain w-full h-full min-height-200px"
          onClick={handleCameraButtonClick}
        />
      ) : (
        <video
          ref={videoRef}
          className="block mx-auto cursor-pointer object-contain w-full h-full min-height-200px"
          onClick={handleCameraButtonClick}
        />
      )}
      <input
        id="file-input"
        type="file"
        accept="image/*"
        className="hidden"
        name="src_img"
        onChange={handleFileChange}
      />
      <div>
        {isLoading ? (
          <p>Cargando archivo...</p>
        ) : (
          <>
            <div>
              <label htmlFor="file-input" className="button-style-2 text-center m-5">
                {selectedFile ? 'Cambiar imagen' : 'Seleccionar imagen'}
              </label>
              {selectedFile && (
                <button
                  type="button"
                  className="button-style-red text-center"
                  onClick={handleCancelImage}
                >
                  Cancelar
                </button>
              )}
              {!selectedFile && (
                <button
                  type="button"
                  className="button-style-2 text-center"
                  onClick={handleCameraButtonClick}
                >
                  Tomar foto
                </button>
              )}
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center pt-10 pb-5">
        <button
          className="button-style"
          style={{ minWidth: '200px', height: '50px' }}
          type="submit"
          disabled={isLoading || !selectedFile}
        >
          {isLoading ? 'Cargando...' : 'Subir Archivo'}
        </button>
      </div>
    </div>
  );
}

export default ImageUploader;

import React, { useState } from "react";

const Alert = ({ msj = "", type }) => {
  const [showAlert, setShowAlert] = useState(true);

  let alertClass =
    "fixed inset-0 flex items-center justify-center z-50 bg-blue-500 bg-opacity-50";
  let alertContentClass =
    "bg-white border border-black rounded-md p-4 min-h-150px text-black shadow-md text-ce";

  if (type === "error") {
    alertContentClass += " bg-red border-red-700 text-red-700";
  } else if (type === "success") {
    alertContentClass += " border-green-700 text-green-700";
  } else if (type === "alert") {
    alertContentClass += " border-yellow-700 text-yellow-700";
  }

  const closeAlert = () => {
    setShowAlert(false);
  };

  if (!showAlert) {
    return null;
  }

  return (
    <div className={alertClass}>
      <div className={alertContentClass}>
        <span>{msj}</span>
        <button
          className="text-black hover:text-gray-500 absolute top-2 right-2"
          onClick={closeAlert}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

Alert.defaultProps = {
  type: "default",
};

export default Alert;

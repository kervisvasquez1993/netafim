import React, { createContext, useState } from "react";
import Alert from "../Wiews/Alert";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [showAlertState, setShowAlertState] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const showAlert = (message, type) => {
    setShowAlertState(true);
    setAlertMessage(message);
    setAlertType(type);

    setTimeout(() => {
      setShowAlertState(false);
      setAlertMessage("");
      setAlertType("");
    }, 5000);
  };

  const alertContextValue = {
    showAlert: showAlert,
  };

  return (
    <AlertContext.Provider value={alertContextValue}>
      {children}
      {showAlertState && <Alert message={alertMessage} type={alertType} />}
    </AlertContext.Provider>
  );
};

export default AlertContext;

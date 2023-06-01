import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import backgroundImage from "./assets/PNG/mallafondo.png";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "250%",
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <App />
        </div>
    </React.StrictMode>
);

import React from "react";

function HeaderWithButton({ title, buttonText, onButtonClick={} }) {
    return (
        <div className="flex flex-col items-center py-4 px-6">
            <h1 className="text-xl font-semibold mb-4">{title}</h1>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
                onClick={onButtonClick}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default HeaderWithButton;

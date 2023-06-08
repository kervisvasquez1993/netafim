import React from "react";

function HeaderWithButton({ title, buttonText, onButtonClick={} }) {
    return (
        <div className="flex flex-col items-center py-4 px-6">
            <h1 className="text-xl font-semibold mb-4">{title}</h1>
            <button
                className="button-style"
                onClick={onButtonClick}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default HeaderWithButton;

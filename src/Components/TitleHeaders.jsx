import React from "react";

export const TitleHeaders = ({title}) => {
    return (
        <div className="flex flex-col items-center py-4 px-6">
            <h1 className="text-xl font-semibold mb-4 text-center">{title}</h1>
        </div>
    );
};

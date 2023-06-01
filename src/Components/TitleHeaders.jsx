import React from "react";

export const TitleHeaders = ({ title }) => {
    return (
        <div className="flex justify-center">
            <div className="py-4 m-10 px-6">
                <h1 className="text-4xl font-thin mb-4 text-center">{title}</h1>
            </div>
        </div>
    );
};

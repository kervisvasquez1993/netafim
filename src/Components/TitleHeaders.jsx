import React from "react";
import Back from "../Wiews/Back";
export const TitleHeaders = ({ title, sizeTilte = 4, isBack = false }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            {isBack && (
                <div className="flex">
                    <div className="mr-auto">
                        <Back />
                    </div>
                </div>
            )}
            <div className="flex justify-center">
                <div className="py-4 m-5 px-6">
                    <h1
                        className={`text-${sizeTilte}xltext-center`}
                        style={{fontWeit : "450", fontSize : "1.5rem"}}
                    >
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

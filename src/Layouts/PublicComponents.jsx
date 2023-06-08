import React from "react";
import { HeadersTwo } from "../Wiews/HeadersTwo";

export const PublicComponents = ({ children, title }) => {
    return (
        <div>
            <HeadersTwo />
            <div
                className="flex justify-center items-center pt-10 pb-10"
                style={{
                    minHeight: "80vh",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <div className="w-full max-w-xs">
                    <h2 className="text-2xl text-center font-bold mb-4" style={{fontWeight : 200}}>
                        {title}
                    </h2>

                    {children}

                    <div className="flex justify-center mt-4"></div>
                </div>
            </div>
        </div>
    );
};

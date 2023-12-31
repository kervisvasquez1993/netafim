import React from "react";
import backSrc from "../assets/svg/Back.svg";
import { useNavigate } from "react-router-dom";

const HeaderBack = ({ back = true, titulo="", titulo2=false }) => {
    const navigate = useNavigate();

    return (
        <div className="conBack">
            {back && (
                <div className="elIzquierdo">
                    <img src={backSrc} onClick={() => navigate(-1)} />
                </div>
            )}
            <div className="elCentro text-2xl" style={titulo2 ? { fontWeight: 200, fontSize: "26px" } : {}}>{titulo}</div>
        </div>
    );
};

export default HeaderBack;

import React from "react";
import back from "../assets/svg/Back.svg";
import { useNavigate } from "react-router-dom";

const Back = () => {
    const navigate = useNavigate();
    return <img src={back} onClick={() => navigate(-1)} />;
};

export default Back;

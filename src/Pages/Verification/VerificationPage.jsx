import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { PublicComponents } from "../../Layouts/PublicComponents";
import useAuth from "../../Hooks/useAuth";

const VerificationPage = () => {
    const navigate = useNavigate();
    const [messageVerify, setMessageVerify] = useState("");
    const { validarToken, errors, mensaje } = useAuth();
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const message = await validarToken(params.token);
                setMessageVerify(message);
            } catch (error) {
                console.log(error.message);
                // Manejar el error de alguna manera (por ejemplo, mostrar un mensaje de error)
            }
        };

        fetchData();
    }, []);

    return (
        <PublicComponents title={"Validación de Correo"}>
            <div className="container"></div>
            <div className="flex justify-center py-10">
                <button
                    onClick={() => {
                        navigate("/login");
                    }}
                    className="button-style"
                >
                    Ir al login
                </button>
            </div>
        </PublicComponents>
    );
};

export default VerificationPage;

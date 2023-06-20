import React, { useState } from "react";
import styles from "./style.module.css";
import { PublicComponents } from "../../Layouts/PublicComponents";
import HeaderBack from "../../Components/HeaderBack";
import { HeadersTwo } from "../../Wiews/HeadersTwo";
import { ApiBackend } from "../../apis/ApiBackend";
import Swal from "sweetalert2";

export const PasswordRecovery = () => {
    const [email, setEmail] = useState("");
    const handleSutmit = async (e) => {
        e.preventDefault();
        console.log(email);
        try {
            // Mostrar mensaje de carga
            Swal.fire({
                title: "Cargando",
                text: "Espere por favor...",
                allowOutsideClick: false,
                showConfirmButton: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const { data } = await ApiBackend.post("password/reset", {
                email,
            });
            Swal.fire({
                icon: "success",
                title: data.message,
                showConfirmButton: true,
            });
            setEmail("");
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: error.response.data.error,
                showConfirmButton: true,
            });
            // setAlerta({ message: error.response.data.error, error: true });
        }
    };
    return (
        <>
            <HeadersTwo />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "50vh",
                }}
            >
                <HeaderBack titulo={"Recuperar contraseña"} titulo2={true} />
                <form onSubmit={(e) => handleSutmit(e)}>
                    <div className="mb-4 form-container">
                        <label
                            htmlFor="email"
                            className="label-position label-style"
                        >
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="ejemplo@netafim.com"
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-style"
                            required
                        />
                    </div>
                    <div className="flex justify-center flex-col items-center pt-10">
                        <input
                            type="submit"
                            value="Enviar solicitud"
                            className="button-style pt-10 mb-10"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

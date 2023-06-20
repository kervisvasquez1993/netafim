import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PublicComponents } from "../../Layouts/PublicComponents";
import { ApiBackend } from "../../apis/ApiBackend";

const NewPassword = () => {
    const { token } = useParams();
    // console.log("New Password", token);
    const [formData, setFormData] = useState({
        token: token,
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: null });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        // Validar campos requeridos
        const requiredFields = ["password", "password_confirmation"];
        const formErrors = {};
        requiredFields.forEach((field) => {
            if (!formData[field]) {
                formErrors[field] = "Este campo es requerido";
            }
        });

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Enviar datos al backend
        try {
            const { data } = await ApiBackend.post(`password/reset/${token}`, formData);
            console.log(data);
            Swal.fire(data.message, "", "success");
            // navigate("/login");
        } catch (error) {
            console.log(error)
            if (error.response) {
                const errorList = Object.values(
                    error.response.data.error
                ).flatMap((errorArray) =>
                    errorArray.map(
                        (errorMessage) =>
                            `<li className="text-red-500 py-5">${errorMessage}</li>`
                    )
                );
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    html: `<ol>${errorList.join("")}</ol> <br/>`,
                });

                console.log(error, "error");
            }
        }
    };

    return (
        <PublicComponents title={"Inicia sesión para registrar clientes"}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="password"
                        className="label-position label-style"
                    >
                        Contraseña
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`input-style ${
                            errors.password ? "border-red-500" : ""
                        }`}
                    />
                    {errors.password && (
                        <span className="text-red-500">{errors.password}</span>
                    )}
                </div>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="password_confirmation"
                        className="label-position label-style"
                    >
                        Confirmar Contraseña
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        className={`input-style ${
                            errors.password_confirmation ? "border-red-500" : ""
                        }`}
                    />
                </div>

                <div className="flex justify-center flex-col items-center">
                    <input
                        type="submit"
                        value="Actualizar contraseña"
                        className="button-style mb-5"
                    />

                    <Link to="/login" className="button-style-white">
                        Login
                    </Link>
                </div>
            </form>
        </PublicComponents>
    );
};

export default NewPassword;

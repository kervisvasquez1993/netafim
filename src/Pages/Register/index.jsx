import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PublicComponents } from "../../Layouts/PublicComponents";
import Swal from "sweetalert2";
import { ApiBackend } from "../../apis/ApiBackend";
import HeaderBack from "../../Components/HeaderBack";

export const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validar campos requeridos
        const requiredFields = [
            "name",
            "last_name",
            "email",
            "password",
            "password_confirmation",
        ];
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
            const { data } = await ApiBackend.post("register", formData);
            console.log(data);
            Swal.fire(data.message, "", "success");
            navigate("/login");
        } catch (error) {
            if (error.response.data.error) {
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

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: null });
    };

    return (
        <PublicComponents>
            <HeaderBack titulo={"Registro"} titulo2={true}/>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="name"
                        className="label-position label-style"
                    >
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input-style ${
                            errors.name ? "border-red-500" : ""
                        }`}
                    />
                    {errors.name && (
                        <span className="text-red-500">{errors.name}</span>
                    )}
                </div>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="last_name"
                        className="label-position label-style"
                    >
                        Apellidos
                    </label>
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className={`input-style ${
                            errors.last_name ? "border-red-500" : ""
                        }`}
                    />
                    {errors.last_name && (
                        <span className="text-red-500">{errors.last_name}</span>
                    )}
                </div>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="email"
                        className="label-position label-style"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={` input-style ${
                            errors.email ? "border-red-500" : ""
                        }`}
                    />
                    {errors.email && (
                        <span className="text-red-500">{errors.email}</span>
                    )}
                </div>
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
                    {errors.password_confirmation && (
                        <span className="text-red-500">
                            {errors.password_confirmation}
                        </span>
                    )}
                </div>
                <div className="flex justify-center py-10">
                    <button
                        type="submit"
                        className="button-style"
                    >
                        Registrarse
                    </button>
                </div>
            </form>
        </PublicComponents>
    );
};

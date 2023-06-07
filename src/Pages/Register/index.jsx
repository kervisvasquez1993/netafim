import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PublicComponents } from "../../Layouts/PublicComponents";
import Swal from "sweetalert2";
import { ApiBackend } from "../../apis/ApiBackend";

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
                    html: `<ol>${errorList.join("")}</ol>`,
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
        <PublicComponents title={"Registro"}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40 ${
                            errors.name ? "border-red-500" : ""
                        }`}
                    />
                    {errors.name && (
                        <span className="text-red-500">{errors.name}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="last_name">Apellido</label>
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className={`border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40 ${
                            errors.last_name ? "border-red-500" : ""
                        }`}
                    />
                    {errors.last_name && (
                        <span className="text-red-500">{errors.last_name}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40 ${
                            errors.email ? "border-red-500" : ""
                        }`}
                    />
                    {errors.email && (
                        <span className="text-red-500">{errors.email}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40 ${
                            errors.password ? "border-red-500" : ""
                        }`}
                    />
                    {errors.password && (
                        <span className="text-red-500">{errors.password}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="password_confirmation">
                        Confirmar Contraseña
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        className={`border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40 ${
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
                        className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
                    >
                        Registrarse
                    </button>
                </div>
            </form>
        </PublicComponents>
    );
};

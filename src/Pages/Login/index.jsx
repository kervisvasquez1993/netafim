import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ApiBackend } from "../../apis/ApiBackend";
import { HeadersTwo } from "../../Wiews/HeadersTwo";
import { PublicComponents } from "../../Layouts/PublicComponents";
import Swal from "sweetalert2";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alerta, setAlerta] = useState("");
    const [errors, setErrors] = useState({});
    const { auth, setAuth, loading } = useAuth();
    const navigate = useNavigate();

    const handleSutmit = async (e) => {
        e.preventDefault();
        if ([email, password].includes("")) {
            setAlerta({
                message: "Todos los campos son obligatorios",
                error: true,
            });
            return;
        }

        try {
            const { data } = await ApiBackend.post("login", {
                email,
                password,
            });
            localStorage.setItem("token", data.access_token);
            setAuth(data.data);
            console.log(auth, "auth");
            navigate("/home");
            setAlerta({});
        } catch (error) {
            setErrors(error.response.data.error);
            // setAlerta({ message: error.response.data.error, error: true });
        }
    };
    const { message } = alerta;
    // useEffect(() => {
    //     console.log(errors);

    // }, [errors]);
    if (errors.length > 0) {
        Swal.fire({
            title: "Error!",
            text: errors,
            icon: "error",
            confirmButtonText: "Aceptar",
        });

        setErrors({});
    }
    return (
        <PublicComponents title={"Inicia sesión para registrar clientes"}>
            <form onSubmit={(e) => handleSutmit(e)}>
                <div className="mb-4 form-container">
                    <label htmlFor="email" className="label-position label-style">
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

                <div className="mb-4 form-container">
                    <label
                        htmlFor="password"
                        className="label-position label-style"
                    >
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="*********"
                        className="input-style"
                        required
                    />
                </div>
                {/* <div className="flex justify-center pt-10 pb-10">
                    <Link
                        to="password-recovery"
                        className="block text-sm text-blue-500 mb-4"
                    >
                        Olvidé mi Contraseña
                    </Link>
                </div> */}

                <div className="flex justify-center flex-col items-center">
                    <input
                        type="submit"
                        value="Iniciar sesión"
                        className="inline-block rounded border mb-7 border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    />

                    <Link
                        to="/singup"
                        className="inline-block rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500"
                    >
                        Registro
                    </Link>
                </div>
            </form>
        </PublicComponents>
    );
};

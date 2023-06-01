import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ApiBackend } from "../../apis/ApiBackend";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alerta, setAlerta] = useState("");
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
            console.log(error.response.data.error);
            setAlerta({ message: error.response.data.error, error: true });
        }
    };
    const { message } = alerta;

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <h2 className="text-2xl text-center font-bold mb-4">
                    Inicia sesión para registrar clientes
                </h2>

                {/* <form onSubmit={(e) => handleSutmit(e)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="ejemplo@netafim.com"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-1">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="*********"
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <input
                            type="submit"
                            value="Iniciar sesión"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                        />
                    </div>
                </form> */}
                <form onSubmit={(e) => handleSutmit(e)}>
                    <div className="mb-4">
                        <label htmlFor="email" class="block mb-1 text-blue-500">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="ejemplo@netafim.com"
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40 hover:opacity-100"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="relative mb-1 text-blue-500"
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
                            className="border-blue-500 border-2 rounded-lg px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40 hover:opacity-100"
                            required
                        />
                    </div>
                    <div className="flex justify-center pt-10 pb-10">
                        <Link
                            to="password-recovery"
                            className="block text-sm text-blue-500 mb-4"
                        >
                            Olvidé mi Contraseña
                        </Link>
                    </div>

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

                <div className="flex justify-center mt-4"></div>
            </div>
        </div>
    );
};

import { useState } from "react";
import { TitleHeaders } from "../Components/TitleHeaders";
import useAuth from "../Hooks/useAuth";
import { HeadersOne } from "../Wiews/HeadersOne";
import Swal from "sweetalert2";

const Me = () => {
    const { auth, onUpdatePassword } = useAuth();
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length < 6){
            Swal.fire({
                title: "¿Estás seguro?",
                text: "La contraseña debe tener al menos 6 caracteres",
            })
            return
        }
        onUpdatePassword(password);
    };
    return (
        <>
            <HeadersOne />
            <TitleHeaders title={"perfil"} sizeTilte={5} isBack={false} />

            <form onSubmit={handleSubmit}>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="nombre"
                        className="label-position label-style"
                    >
                        Nombre
                    </label>
                    <input
                        className="input-style"
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={auth.name} // Reemplazar con el valor correcto del objeto 'auth'
                        readOnly
                    />
                </div>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="apellido"
                        className="label-position label-style"
                    >
                        Apellido
                    </label>
                    <input
                        className="input-style"
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={auth.last_name} // Reemplazar con el valor correcto del objeto 'auth'
                        readOnly
                    />
                </div>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="correo"
                        className="label-position label-style"
                    >
                        Correo
                    </label>
                    <input
                        className="input-style"
                        type="email"
                        id="correo"
                        name="correo"
                        value={auth.email} // Reemplazar con el valor correcto del objeto 'auth'
                        readOnly
                    />
                </div>
                <div className="mb-4 form-container input-container">
                    <label
                        htmlFor="password"
                        className="label-position label-style "
                    >
                        Password
                    </label>
                    <input
                        className="input-style input-field"
                        placeholder="*********"
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} // Reemplazar con el valor correcto del objeto 'auth'
                    />
                    <svg
                        className="icon h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                    </svg>
                </div>
                <div className="mb-4 form-container flex justify-center">
                    <input
                        type="submit"
                        value="Editar clave"
                        className="button-style mb-5"
                    />
                </div>
            </form>
        </>
    );
};

export default Me;

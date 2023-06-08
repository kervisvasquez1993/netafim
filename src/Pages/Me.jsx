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
                <div className="mb-4 form-container">
                    <label
                        htmlFor="password"
                        className="label-position label-style"
                    >
                        Password
                    </label>
                    <input
                        className="input-style"
                        placeholder="*********"
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} // Reemplazar con el valor correcto del objeto 'auth'
                    />
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

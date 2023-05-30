import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import useAuth from "../../Hooks/useAuth";
import { ApiBackend } from "../../apis/ApiBackend";
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alerta, setAlerta] = useState("");
    const { auth, setAuth, loading } = useAuth();
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
            const {data}  = await ApiBackend.post("login", {
                email,
                 password,
            });
            localStorage.setItem("token", data.access_token);
            setAuth(data);
            console.log(data);
            setAlerta({});
        } catch (error) {
            console.log(error.response.data.error);
            setAlerta({ message: error.response.data.error, error: true });
        }
    };
    const { message } = alerta;
    console.log(auth, "auth");
    console.log(loading, "loading");
    return (
        <div
            className={`${styles["register-container"]} ${styles["container"]}`}
        >
            <div className={styles["register-header"]}></div>
            <div className={styles["register-form"]}>
                <h2 className={styles["form-title"]}>
                    Inicia sesión para registrar clientes
                </h2>

                <div className={styles["form-container"]}>
                    <form onSubmit={(e) => handleSutmit(e)}>
                        <fieldset className={styles["input"]}>
                            <legend>Correo electrónico</legend>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="ejemplo@netafim.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </fieldset>

                        <fieldset className={styles["input"]}>
                            <legend>Contraseña</legend>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="*********"
                                required
                            />
                        </fieldset>

                        <Link
                            className={styles["forgot-password"]}
                            to={"password-recovery"}
                        >
                            Olvidé mi Contraseña
                        </Link>
                        <div className={styles["btn"]}>
                            <input
                                className={styles["login-input"]}
                                type="submit"
                                value="Iniciar sesión"
                            />
                        </div>
                        <div className={styles["btn"]}>
                            <Link
                                className={styles["register-link"]}
                                to={"singup"}
                            >
                                Registro
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

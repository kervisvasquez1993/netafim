import styles from "./style.module.css";
import { Link } from "react-router-dom";

export const Login = () => {
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
                    <form>
                        <fieldset className={styles["input"]}>
                            <legend>Correo electrónico</legend>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="ejemplo@netafim.com"
                                required
                            />
                        </fieldset>

                        <fieldset className={styles["input"]}>
                            <legend>Contraseña</legend>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="*********"
                                required
                            />
                        </fieldset>

                        <Link className={styles["forgot-password"]} to={"password-recovery"}>
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

import React from "react";
import styles from "./style.module.css";

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

                        <a className={styles["forgot-password"]} href="#">
                            Olvidé mi Contraseña
                        </a>
                        <div className={styles["btn"]}>
                            <input
                                className={styles["login-input"]}
                                type="submit"
                                value="Iniciar sesión"
                            />
                        </div>
                        <div className={styles["btn"]}>
                            <a className={styles["register-link"]} href="#">
                                Registro
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

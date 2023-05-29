import React from "react";
import styles from "./style.module.css";

export const PasswordRecovery = () => {
    return (
        <div
            className={`${styles["register-container"]} ${styles["container"]}`}
        >
            <div className={styles["register-header"]}></div>

            <div className={styles["register-form"]}>
                <div className={styles["title"]}>
                    <div className={styles["arrow"]}></div>
                    <h2 className={styles["form-title"]}>
                        Recuperar contraseña
                    </h2>
                </div>

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

                        <div className={styles["btn"]}>
                            <a
                                className={styles["reset-password-request"]}
                                href="#"
                            >
                                Enviar solicitud
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

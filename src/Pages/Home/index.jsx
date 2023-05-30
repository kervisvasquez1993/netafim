import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import useCustomers from "../../Hooks/useCustomers.jsx";

export const Home = () => {
   console.log(useCustomers());
    
    return (
        <div className={`${styles["home-container"]} `}>
            <div className={styles["header-container"]}>
                <div className={styles["home-logo"]}></div>
                <div className={styles["home-bell"]}></div>
            </div>

            <div
                className={`${styles["main-container"]} ${styles["container"]}`}
            >
                <h2 className={styles["form-title"]}>Bienvenidos</h2>

                <div className={styles["form-container"]}>
                    <div className={styles["log-in-container"]}>
                        <div className={styles["log-in"]}>
                            <div
                                className={`${styles["img-one"]} ${styles["img"]}`}
                            ></div>
                            <div
                                className={`${styles["btn-log-in"]} ${styles["btn"]}`}
                            >
                                <a className={styles["register"]} href="#">
                                    Añadir cliente
                                </a>
                            </div>
                        </div>

                        <div className={styles["log-in"]}>
                            <div
                                className={`${styles["img-two"]} ${styles["img"]}`}
                            ></div>
                            <div
                                className={`${styles["btn-log-in"]} ${styles["btn"]}`}
                            >
                                <Link
                                    className={styles["register"]}
                                    to={"customers"}
                                >
                                    Ver Cliente
                                </Link>
                            </div>
                        </div>

                        <div className={styles["log-in"]}>
                            <div
                                className={`${styles["img-three"]} ${styles["img"]}`}
                            ></div>
                            <div
                                className={`${styles["btn-log-in"]} ${styles["btn"]}`}
                            >
                                <a className={styles["register"]} href="#">
                                    Ir a perfil
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles["btn"]} ${styles["btn-link"]}`}>
                        <a className={styles["register-link"]} href="#">
                            Cerrar sesión
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

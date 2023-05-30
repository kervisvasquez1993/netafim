import styles from "./style.module.css";
import useCustomers from "../../Hooks/useCustomers";
import { Link } from "react-router-dom";

export const ListCustomers = () => {
    const { customers, loadingCustomers } = useCustomers();
    const { data, message } = customers;
    if (loadingCustomers) return <div>loading...</div>;
    return (
        <div
            className={`${styles["register-container"]} ${styles["container"]}`}
        >
            <div className={styles["register-header"]}></div>

            <div className={styles["main"]}>
                <div className={styles["title"]}>
                    <div className={styles["arrow"]}></div>
                    <h2 className={styles["form-title"]}>
                        Tarjetas de clientes
                    </h2>
                </div>

                <div className={styles["section-tarjetas"]}>
                    {data &&
                        data.map((customers) => (
                            
                                <Link
                                    key={customers.id}
                                    className={styles["trj"]}
                                    to={`${customers.id}`}
                                >
                                    <div className={styles["trj-img"]}></div>
                                    <h2>{customers.nombre}</h2>
                                </Link>
                            
                        ))}
                    {message && <div className={styles["trj"]}>{message}</div>}
                </div>
            </div>
        </div>
    );
};

import { useEffect, useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { configHeaderToken } from "../Helpers";
import { ApiBackend } from "../apis/ApiBackend";

const CustomersContext = createContext();
export const CustomersProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [loadingCustomers, setLoadingCustomers] = useState(false);
    const config = configHeaderToken();
    useEffect(() => {
        const getCustomers = async () => {
            setLoadingCustomers(true);
            try {
                console.log("kervis");
                if (!config) {
                    console.log("no tienes permiso");
                    mostrarAlerta({
                        message: "No tienes permiso",
                        error: true,
                    });
                    return;
                }
                const { data } = await ApiBackend.get(
                    "/clientes?activos=1",
                    config
                );
                setCustomers(data);
                setLoadingCustomers(false);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingCustomers(false);
            }
        };
        getCustomers();
    }, [customer]);
    return (
        <CustomersContext.Provider
            value={{ customers, customer, loadingCustomers }}
        >
            {children}
        </CustomersContext.Provider>
    );
};
export default CustomersContext;

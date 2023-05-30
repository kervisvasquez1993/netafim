import { useEffect, useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { configHeaderToken } from "../Helpers";
import { ApiBackend } from "../apis/ApiBackend";

const CustomersContext = createContext();
export const CustomersProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [loadingProject, setLoadingProject] = useState(false);
    const [test, setTest] = useState("test");
    useEffect(() => {
        const getCustomers = async () => {
            setLoadingProject(true);
            try {
                if (!config) {
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
                console.log(data);
                // setProyectos(data.projects);
                // setLoadingProject(false);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingProject(false);
            }
        };
        getCustomers();
    }, [customer]);
    return (
        <CustomersContext.Provider value={{ customers, customer, test }}>
            {children}
        </CustomersContext.Provider>
    );
};
export default CustomersContext;

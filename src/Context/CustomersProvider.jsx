import { useEffect, useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { configHeaderToken } from "../Helpers";
import { ApiBackend } from "../apis/ApiBackend";

const CustomersContext = createContext();
export const CustomersProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);
    const [customersInactivo, setCustomersInactivo] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [loadingCustomers, setLoadingCustomers] = useState(false);
    const config = configHeaderToken();

    // const submitProyecto = async (proyecto) => {
    //     const { id } = proyecto;
    //     if (id) {
    //         await editProyecto(proyecto);
    //     } else {
    //         await newProject(proyecto);
    //     }

    //     return;
    // };
    const submitChangeStatus = async (customer) => {
        await activarDesactivarCliente(customer);
        return;
    };
    useEffect(() => {
        const fetchData = async () => {
            setLoadingCustomers(true);
            try {
                if (!config) {
                    console.log("no tienes permiso");
                    mostrarAlerta({
                        message: "No tienes permiso",
                        error: true,
                    });
                    return;
                }

                const [activeData, inactiveData] = await Promise.all([
                    ApiBackend.get("/clientes?activos=1", config),
                    ApiBackend.get("/clientes?activos=0", config),
                ]);

                setCustomers(activeData.data);
                setCustomersInactivo(inactiveData.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingCustomers(false);
            }
        };

        fetchData();
    }, []);

    const getCustomer = async (id) => {
        setLoadingCustomers(true);
        try {
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }

            const { data } = await ApiBackend.get(`/clientes/${id}`, config);

            setCustomer(data.data);

            return;
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingCustomers(false);
        }
    };

    const activarDesactivarCliente = async (customer) => {
        let updateValue;
        const { id, activo } = customer;

        if (activo == 1) {
            updateValue = 0;
        } else if (activo == 0) {
            updateValue = 1;
        }
        // console.log(updateValue);
        const dataSubmit = {
            activo: updateValue,
        };

        try {
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }

            const { data } = await ApiBackend.put(
                `/clientes/${id}`,
                dataSubmit,
                config
            );
            console.log(data);
            // console.log(data)
            // sincronizar el state
            // console.log(customers.data)
            // const test = customers.data.map( obj => obj)
            // console.log(test)

            const customerUpdate = customers.data((customerState) => {
                // console.log(customerState)

                if (customerState.id === data.data.id) {
                    setCustomer(data.data);
                } else {
                    return customerState;
                }
            });
            // console.log(customerUpdate)
            setProyectos(customerUpdate);
            // mostrarAlerta({ message: "Proyecto Editado", error: false });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <CustomersContext.Provider
            value={{
                customers,
                customer,
                loadingCustomers,
                getCustomer,
                activarDesactivarCliente,
                submitChangeStatus,
                customersInactivo,
            }}
        >
            {children}
        </CustomersContext.Provider>
    );
};
export default CustomersContext;

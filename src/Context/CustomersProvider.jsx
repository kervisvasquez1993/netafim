import { useEffect, useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { configHeaderToken } from "../Helpers";
import { ApiBackend } from "../apis/ApiBackend";
import { data } from "autoprefixer";

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
    const submitNewCliente = async (customer) => {
        console.log(customer, "customer desde submitNewCliente");
        await newCliente(customer);
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
            console.log(data.data);
            setCustomer(data.data);
            console.log(customers.data, "cuatomers");
            console.log(customersInactivo.data, "customersInactivo");
            return;

            // sincronizar el state
            // const test = customers.data.map( obj => obj)
            // console.log(test)

            const customerUpdate = customers.data.map((customerState) => {
                // console.log(customerState)
                // if (customerState.id === data.data.id) {
                //     setCustomer(data.data);
                // } else {
                //     return customerState;
                // }
            });
            // console.log(customerUpdate)
            setProyectos(customerUpdate);
            // mostrarAlerta({ message: "Proyecto Editado", error: false });
        } catch (error) {
            console.log(error);
        }
    };

    const newCliente = async (cliente) => {
        // const dataSubmit = bodySubmit(cliente);
        console.log(cliente, "dataSubmit desde formulario");
        // console.log(dataSubmit, "dataSubmit desde formulario");
        try {
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }

            const respuesta = await ApiBackend.post("/clientes", cliente, config);
            // mostrarAlerta({ message: "cliente Creado", error: false });
            console.log("cliente Creado");
            console.log(respuesta);

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
                submitNewCliente
            }}
        >
            {children}
        </CustomersContext.Provider>
    );
};
export default CustomersContext;

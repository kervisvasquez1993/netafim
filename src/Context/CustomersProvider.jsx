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
    const navigate = useNavigate();
    const config = configHeaderToken();

    const submitChangeStatus = async (customer) => {
        await activarDesactivarCliente(customer);
        return;
    };
    const submitNewCliente = async (customer) => {
        await newCliente(customer);
        return;
    };
    const descarga = async () => {
        await descargarArchivo();
    };
    const descargarArchivo = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log("No Tiene Permiso");
            return false;
        }

        try {
            const response = await ApiBackend.get("/generartxt", {
                responseType: "blob",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = "informacion.txt";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            // Manejo de errores
            console.log(error);
        }
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
                const { data } = await ApiBackend.get("/clientes", config);
                console.log(data.data, "data de provider");
                // Filtrar los clientes activos
                const clientesActivos = data.data.filter(
                    (cliente) => cliente.activo === 1
                );

                // Filtrar los clientes inactivos
                const clientesInactivos = data.data.filter(
                    (cliente) => cliente.activo === 0
                );

                // Establecer los clientes activos en el estado 'customers'
                setCustomers(clientesActivos);

                // Establecer los clientes inactivos en el estado 'customersInactivo'
                setCustomersInactivo(clientesInactivos);
                // const [activeData, inactiveData] = await Promise.all([
                //     ApiBackend.get("/clientes?activos=1", config),
                //     ApiBackend.get("/clientes?activos=0", config),
                // ]);
                console.log(customers, "customers");
                console.log(customersInactivo, "customersInactivo");
                // setCustomers(activeData.data.data);
                // setCustomersInactivo(inactiveData.data.data);
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
        const { id, activo } = customer;
        const updateValue = activo === 1 ? 0 : 1;

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

            if (updateValue === 0) {
                setCustomers(customers.filter((c) => c.id !== data.data.id));
                setCustomersInactivo([...customersInactivo, data.data]);
                console.log("ejecuto el inactivo");
            } else {
                setCustomersInactivo(
                    customersInactivo.filter((c) => c.id !== data.data.id)
                );
                setCustomers([...customers, data.data]);
                console.log("ejecuto el activo");
            }
            setCustomer(data.data);
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

            const respuesta = await ApiBackend.post(
                "/clientes",
                cliente,
                config
            );
            // mostrarAlerta({ message: "cliente Creado", error: false });
            console.log("cliente Creado");

            console.log(respuesta.data.data, "respuesta");
            setCustomers([...customers, respuesta.data.data]);
            console.log(customers, "cliente");
            navigate(-1);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CustomersContext.Provider
            value={{
                customers,
                setCustomers,
                customer,
                loadingCustomers,
                getCustomer,
                activarDesactivarCliente,
                submitChangeStatus,
                customersInactivo,
                submitNewCliente,
                descarga,
            }}
        >
            {children}
        </CustomersContext.Provider>
    );
};
export default CustomersContext;

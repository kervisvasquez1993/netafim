import { useEffect, useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { configHeaderToken } from "../Helpers";
import { ApiBackend } from "../apis/ApiBackend";
import { data } from "autoprefixer";
import useAlert from "../Hooks/useAlert";

const CustomersContext = createContext();
export const CustomersProvider = ({ children }) => {
    const { showAlert } = useAlert();
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState({});
    const [customersInactivo, setCustomersInactivo] = useState([]);
    const [loadingCustomers, setLoadingCustomers] = useState(false);
    const navigate = useNavigate();
    const config = configHeaderToken();

    const submitChangeStatus = async (customer) => {
        await activarDesactivarCliente(customer);
        return;
    };
    const submitNewCliente = async (customer) => {
        await newCliente(customer);
        navigate(-1);
        return;
    };
    const descarga = async () => {
        await descargarArchivo();
        // showAlert("Este es un mensaje de alerta", "success");
        console.log(useAlert);
        return;
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
            // showAlert("Este es un mensaje de alerta", "success");
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
                    // console.log("no tienes permiso");
                    // showAlert(
                    //     "No tienes permiso",
                    //     "error"
                    // );
                    return;
                }
                const { data } = await ApiBackend.get("/clientes", config);
                console.log(data.data, "data de provider");

                setCustomers(data.data);
                console.log(customers, "customers para separar");
                // Filtrar los clientes activos
                // const clientesActivos = data.data.filter(
                //     (cliente) => cliente.activo == 1
                // );

                // // Filtrar los clientes inactivos
                // const clientesInactivos = data.data.filter(
                //     (cliente) => cliente.activo == 0
                // );

                // // Establecer los clientes activos en el estado 'customers'
                // setCustomers(clientesActivos);

                // // Establecer los clientes inactivos en el estado 'customersInactivo'
                // setCustomersInactivo(clientesInactivos);
                // // const [activeData, inactiveData] = await Promise.all([
                // //     ApiBackend.get("/clientes?activos=1", config),
                // //     ApiBackend.get("/clientes?activos=0", config),
                // // ]);
                // console.log(customers, "customers");
                // console.log(customersInactivo, "customersInactivo");
                // // setCustomers(activeData.data.data);
                // // setCustomersInactivo(inactiveData.data.data);
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
                // showAlert("No tienes permiso", "error");
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
        const { id } = customer;
        try {
            if (!config) {
                // showAlert("No tienes permiso", "error");
                return;
            }

            const { data } = await ApiBackend.get(
                `/clientes/${id}/cambiar-estado`,
                config
            );
            console.log(data.data, "data de provider cambiar estado");
            const clienteActualizado = data.data;

            // Actualizar el estado 'customer' con el cliente actualizado
            setCustomer(clienteActualizado);

            // Actualizar el estado 'customers' con el cliente actualizado
            setCustomers((prevCustomers) => {
                return prevCustomers.map((cliente) => {
                    if (cliente.id === clienteActualizado.id) {
                        return clienteActualizado;
                    }
                    return cliente;
                });
            });

            console.log(customer, "customer actualizado");
            console.log(customers, "customers actualizado");

            console.log(customersInactivo, "customersInactivo actualizado");
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
                // showAlert("No tienes permiso", "error");
                return;
            }

            const respuesta = await ApiBackend.post(
                "/clientes",
                cliente,
                config
            );

            console.log(respuesta.data.data, "respuesta");
            setCustomer(respuesta.data.data);
            setCustomers([...customers, respuesta.data.data]);
            console.log(customers, "clientes UPDATE");
            showAlert("Cliente Agregado de forma Correcta", "success");
        } catch (error) {
            showAlert(
                "Error en el Formulario, Todos los Campos son Obligatorios y el correo debe ser único",
                "error"
            );
            console.log(error);
        }
    };

    return (
        <CustomersContext.Provider
            value={{
                customers,
                setCustomers,
                customersInactivo,
                setCustomersInactivo,
                customer,
                loadingCustomers,
                getCustomer,
                activarDesactivarCliente,
                submitChangeStatus,
                submitNewCliente,
                descarga,
            }}
        >
            {children}
        </CustomersContext.Provider>
    );
};
export default CustomersContext;

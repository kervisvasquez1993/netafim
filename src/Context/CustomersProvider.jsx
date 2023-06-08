import { useEffect, useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { configHeaderToken } from "../Helpers";
import { ApiBackend } from "../apis/ApiBackend";
import { data } from "autoprefixer";
import useAlert from "../Hooks/useAlert";
import Swal from "sweetalert2";

const CustomersContext = createContext();
export const CustomersProvider = ({ children }) => {
    const { showAlert } = useAlert();
    const [errors, setErrors] = useState(null);
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
        return;
    };
    const onDeleteCustomer = async (customer) => {
        await deleteClustomer(customer);
        return;
    };
    const onGetDataCustomers = async () => {
        await getData();
        return
    }

    const deleteClustomer = async (customer) => {
        setLoadingCustomers(true);
        const { id } = customer;
        try {
            if (!config) {
                // showAlert("No tienes permiso", "error");
                return;
            }

            const { data } = await ApiBackend.delete(`/clientes/${id}`, config);
            console.log(data);
            setCustomers(customers.filter((customer) => customer.id !== id));
            Swal.fire(data.message, "", "success");
            navigate(-1);
            return;
        } catch (error) {
            S(error);
        } finally {
            setLoadingCustomers(false);
        }
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
            Swal.fire({
                title: "Generando archivo",
                text: "Por favor, espere...",
                allowOutsideClick: false,
                allowEscapeKey: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });

            const response = await ApiBackend.get("/generartxt", {
                responseType: "blob",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));

            const a = document.createElement("a");
            a.href = url;
            a.download = "informacion.xlsx";

            document.body.appendChild(a);

            a.click();

            document.body.removeChild(a);

            // Cerrar el modal después de la descarga
            Swal.close();
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
                    return;
                }
                const { data } = await ApiBackend.get("/clientes", config);
                console.log(data.data, "data de provider");
                setCustomers(data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingCustomers(false);
            }
        };

        fetchData();
    }, [customer]);


    const getData = async () => {
        setLoadingCustomers(true);
        try {
            if (!config) {
                return;
            }
            const { data } = await ApiBackend.get("/clientes", config);
            console.log(data.data, "data de provider");
            setCustomers(data.data);
            console.log(customers, "data de provider llamda");
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingCustomers(false);
        }
    };

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
            Swal.fire("Cliente Agregado de forma Correcta", "", "success");

            navigate(-1);
        } catch (error) {
            console.log(error);
            // setErrors(error.response.data.error);
            if (error.response.data.error) {
                const errorList = Object.values(
                    error.response.data.error
                ).flatMap((errorArray) =>
                    errorArray.map(
                        (errorMessage) =>
                            `<li className="text-red-500 py-5">${errorMessage}</li>`
                    )
                );
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    html: `<ol>${errorList.join("")}</ol>`,
                });

                console.log(error, "error");
            }
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
                onDeleteCustomer,
                onGetDataCustomers
            }}
        >
            {children}
        </CustomersContext.Provider>
    );
};
export default CustomersContext;

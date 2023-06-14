import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiBackend } from "../apis/ApiBackend";
import { configHeaderToken } from "../Helpers";
import useCustomers from "../Hooks/useCustomers";
import useAlert from "../Hooks/useAlert";
import Swal from "sweetalert2";

export const tokenForFile = (params = {}) => {
    const token = localStorage.getItem("token");
    if (!token) {
        // console.log("No Tiene Permiso");
        return false;
    }

    return {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
        params: params,
    };
};
const CardContext = createContext();
export const CardProvider = ({ children }) => {
    const { setCustomers, customers } = useCustomers();
    const [cardsBusiness, setCardsBusiness] = useState([]);
    const [cardBusiness, setCardBuiness] = useState([]);
    const [loadingCustomers, setLoadingCustomers] = useState(false);
    const { showAlert } = useAlert();
    const navigate = useNavigate();
    const configFile = tokenForFile();
    const config = configHeaderToken();
    const onDeleteCard = async (card) => {
        await deleteCard(card);
        return;
    };
    const submitNewTaerjeta = async (card, id = {}) => {
        if (id) {
            console.log("sin id");
            await newTarjeta(card);
        } else {
            console.log("con id");
            await newTarjetaWithCustomer(card, id);
        }

        // await new Promise((resolve) => setTimeout(resolve, 2000)); // Esperar 3 segundos

        return;
    };

    const submitNewClienteCard = async (customer, id) => {
        await newClienteCard(customer, id);
        return;
    };

    // get all card bussines

    useEffect(() => {
        const getCardBusiness = async () => {
            setLoadingCustomers(true);
            try {
                if (!config) {
                    // showAlert({
                    //     message: "No tienes permiso",
                    //     error: true,
                    // });
                    return;
                }
                const { data } = await ApiBackend.get("/tarjetas", config);
                // setProyectos(data.projects);
                // setLoadingCustomers(false);
                setCardsBusiness(data.data, "data de rpovider");
                console.log(data.data, "data. decard businness");
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingCustomers(false);
            }
        };
        getCardBusiness();
    }, [cardBusiness]);

    const deleteCard = async (card) => {
        setLoadingCustomers(true);
        const { id } = card;
        try {
            if (!config) {
                // showAlert("No tienes permiso", "error");
                return;
            }

            const { data } = await ApiBackend.delete(`/tarjetas/${id}`, config);
            console.log(data);
            setCardsBusiness(cardsBusiness.filter((card) => card.id !== id));
            Swal.fire(data.message, "", "success");
            navigate(-1);
            return;
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingCustomers(false);
        }
    };

    const newTarjeta = async (tarjeta) => {
        try {
            if (!configFile) {
                // showAlert( "No tienes permiso", "error");
                return;
            }
            const respuesta = await ApiBackend.post(
                `/tarjetas`,
                tarjeta,
                configFile
            );
            console.log(respuesta, "cliente Creado");

            // TODO: ACTUALIZAR EL STATE DE CARD
            console.log(respuesta.data.message, "respuesta");
            // agregar a la lista de tarjetas
            setCardsBusiness([...cardsBusiness, respuesta.data.data]);
            // setCustomers([...customers, respuesta.data.data]);
            navigate(-1);
            Swal.fire({
                title: "Tarjeta Cargada",
                text: respuesta.data.message,
                icon: "success",
                confirmButtonText: "Aceptar",
            });
        } catch (error) {
            console.log(error.response.data);
            Swal.fire({
                title: "Error!",
                text: `${error.response.data.message}`,
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };
    const newTarjetaWithCustomer = async (tarjeta, id) => {
        try {
            if (!configFile) {
                // showAlert( "No tienes permiso", "error");
                return;
            }
            const respuesta = await ApiBackend.post(
                `cliente/${id}/tarjeta`,
                tarjeta,
                configFile
            );
            console.log(respuesta, "cliente Creado");

            // TODO: ACTUALIZAR EL STATE DE CARD
            console.log(respuesta.data.data, "respuesta");
            // agregar a la lista de tarjetas
            setCardsBusiness([...cardsBusiness, respuesta.data.data]);
            // setCustomers([...customers, respuesta.data.data]);
            navigate(-1);
            Swal.fire({
                title: "Tarjeta Cargada",
                text: "Se Cargo la Tarjeta de forma correcta",
                icon: "success",
                confirmButtonText: "Aceptar",
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Error!",
                text: `${error}`,
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    const newClienteCard = async (cliente, id) => {
        // const dataSubmit = bodySubmit(cliente);

        console.log(cliente, "dataSubmit desde formulario");

        // console.log(dataSubmit, "dataSubmit desde formulario");
        try {
            if (!config) {
                showAlert("No tienes permiso", "error");
                return;
            }

            const respuesta = await ApiBackend.post(
                `tarjetas/${id}/cliente`,
                cliente,
                config
            );
            // showAlert("cliente Creado", "error");
            console.log("cliente Creado");
            console.log(respuesta.data.data, "respuesta");
            setCustomers([...customers, respuesta.data.data]);
            setCardBuiness(respuesta.data.data);
            console.log(cardBusiness, "tarjeta creada");
            Swal.fire("Cliente Agregado de forma Correcta", "", "success");
            // await showAlert("Cliente Agregado");
            navigate(-1);
        } catch (error) {
            await showAlert(
                "Todos los campos son Obligatorios y el correo debe ser valido y no debe estar registrado"
            );
            console.log(error);
        }
    };

    const getCard = async (id) => {
        setLoadingCustomers(true);
        try {
            if (!config) {
                // showAlert({ message: "No tienes permiso", error: true });
                return;
            }

            const { data } = await ApiBackend.get(`/tarjetas/${id}`, config);

            setCardBuiness(data.data);

            return;
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingCustomers(false);
        }
    };
    return (
        <CardContext.Provider
            value={{
                submitNewTaerjeta,
                cardsBusiness,
                getCard,
                cardBusiness,
                loadingCustomers,
                submitNewClienteCard,
                onDeleteCard,
            }}
        >
            {children}
        </CardContext.Provider>
    );
};

export default CardContext;

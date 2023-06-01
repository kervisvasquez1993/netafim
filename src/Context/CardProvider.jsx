import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiBackend } from "../apis/ApiBackend";
import { configHeaderToken } from "../Helpers";
import useCustomers from "../hooks/useCustomers";

export const tokenForFile = (params = {}) => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.log("No Tiene Permiso");
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
    const navigate = useNavigate();
    const configFile = tokenForFile();
    const config = configHeaderToken();
    const submitNewTaerjeta = async (card, id) => {
        await newTarjetaWithCustomer(card, id);
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
                    mostrarAlerta({
                        message: "No tienes permiso",
                        error: true,
                    });
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
    }, []);
    const newTarjetaWithCustomer = async (tarjeta, id) => {
        try {
            if (!configFile) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }
            const { respuesta } = await ApiBackend.post(
                `cliente/${id}/tarjeta`,
                tarjeta,
                configFile
            );
            console.log(respuesta, "cliente Creado");

            // TODO: ACTUALIZAR EL STATE DE CARD
            console.log(respuesta.data.data, "respuesta");
            setCustomers([...customers, respuesta.data.data]);
            console.log(customers, "cliente");
        } catch (error) {
            console.log(error);
        }
    };

    const newClienteCard = async (cliente, id) => {
        // const dataSubmit = bodySubmit(cliente);

        console.log(cliente, "dataSubmit desde formulario");

        // console.log(dataSubmit, "dataSubmit desde formulario");
        try {
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
                return;
            }

            const respuesta = await ApiBackend.post(
                `tarjetas/${id}/cliente`,
                cliente,
                config
            );
            // mostrarAlerta({ message: "cliente Creado", error: false });
            console.log("cliente Creado");
            console.log(respuesta.data.data, "respuesta");
            setCustomers([...customers, respuesta.data.data]);
            console.log(customers, "cliente");
            navigate(-1)
        } catch (error) {
            console.log(error);
        }
    };

    const getCard = async (id) => {
        setLoadingCustomers(true);
        try {
            if (!config) {
                mostrarAlerta({ message: "No tienes permiso", error: true });
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
            }}
        >
            {children}
        </CardContext.Provider>
    );
};

export default CardContext;

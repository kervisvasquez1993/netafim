import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiBackend } from "../apis/ApiBackend";
import { configHeaderToken } from "../Helpers";

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
    const [cardsBusiness, setCardsBusiness] = useState([]);
    const [cardBusiness, setCardBuiness] = useState([]);
    const [loadingCustomers, setLoadingCustomers] = useState(false);
    const configFile = tokenForFile();
    const submitNewTaerjeta = async (card, id) => {
        await newTarjetaWithCustomer(card, id);
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
                console.log(data, "data. decard businness")
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
            return;
            // TODO: ACTUALIZAR EL STATE DE CARD
            console.log(respuesta.data.data, "respuesta");
            setCustomers([...customers, respuesta.data.data]);
            console.log(customers, "cliente");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <CardContext.Provider value={{ submitNewTaerjeta }}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContext;

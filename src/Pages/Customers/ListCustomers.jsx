import { useState } from "react";
import CardCustomer from "../../Components/Cardcustomer";
import useCustomers from "../../Hooks/useCustomers";
import { Link, useNavigate } from "react-router-dom";
import HeaderWithButton from "../../Components/HeaderWithButton";
import ToggleCard from "../../Components/ToggleCard";
import { HeadersTwo } from "../../Wiews/HeadersTwo";
import { TitleHeaders } from "../../Components/TitleHeaders";
import Button from "../../Components/Button";
const CardList = () => {
    return (
        <div className="mt-4">
            <CardCustomer
                cardTitle="Título de la tarjeta 1"
                cardSubtitle="Subtítulo de la tarjeta 1"
            />
            <CardCustomer
                cardTitle="Título de la tarjeta 2"
                cardSubtitle="Subtítulo de la tarjeta 2"
            />
        </div>
    );
};

export const ListCustomers = () => {
    const { customers, loadingCustomers, customersInactivo } = useCustomers();
    const [dato, setDatos] = useState(customers);
    const navigate = useNavigate();
    if (loadingCustomers) return <div>loading...</div>;
    const handlessCustomers = () => {
        setDatos(customers);
    };
    const handlessCustomersInactivo = () => {
        setDatos(customersInactivo);
    };

    return (
        <>
            <HeadersTwo />
            <TitleHeaders title={"Lista de Clientes"} />
            <Button
                text={"Ver las Tarjetas de clientes"}
                variant={"primary"}
                onClick={() => navigate("/home/card-business")}
            />
            <ToggleCard
                handleLeftClick={handlessCustomers}
                handleRightClick={handlessCustomersInactivo}
                data={dato}
            />
        </>
    );
};

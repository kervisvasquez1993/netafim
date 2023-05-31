import { useState } from "react";
import CardCustomer from "../../Components/Cardcustomer";
import useCustomers from "../../Hooks/useCustomers";
import { Link } from "react-router-dom";
import HeaderWithButton from "../../Components/HeaderWithButton";
import ToggleCard from "../../Components/ToggleCard";
import { HeadersTwo } from "../../Wiews/HeadersTwo";
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
    if (loadingCustomers) return <div>loading...</div>;
    const handlessCustomers = () => {
        setDatos(customers);
    };
    const handlessCustomersInactivo = () => {
        setDatos(customersInactivo);
    };

    return (
        <>
        <HeadersTwo/>
            <ToggleCard
                handleLeftClick={handlessCustomers}
                handleRightClick={handlessCustomersInactivo}
                data={dato}
            />
        </>
    );
};

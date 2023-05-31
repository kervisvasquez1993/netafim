import { useState } from "react";
import CardCustomer from "../../Components/Cardcustomer";
import useCustomers from "../../Hooks/useCustomers";
import { Link } from "react-router-dom";
import HeaderWithButton from "../../Components/HeaderWithButton";
import ToggleCard from "../../Components/ToggleCard";
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
    console.log(customers);
    console.log(customersInactivo);
    let datosClientes;
    if (loadingCustomers) return <div>loading...</div>;
    // return (

    //     <CardCustomer cardTitle={"ejemplo"} cardSubtitle={"ejemplo2"}/>
    // );
    const test = () => {
        setDatos(customers);
    };
    const test2 = () => {
        setDatos(customersInactivo);
    };

    return (
        <ToggleCard
            handleLeftClick={test}
            handleRightClick={test2}
            data={dato}
        />
    );
};

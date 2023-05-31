import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useCustomers from "../../Hooks/useCustomers";
import Form from "../../Components/Form";
import HeaderWithButton from "../../Components/HeaderWithButton";
import TwoButtons from "../../Components/TwoButtons";

export const ShowCustomers = () => {
    const params = useParams();

    const { getCustomer, customer, loadingCustomers, submitChangeStatus } =
        useCustomers();
    useEffect(() => {
        getCustomer(params.id);
    }, [params.id]);

    const onSaludar = () => {
        console.log("saludar");
    };
    function handleArchiveClientClick() {
        console.log("Archivar cliente");
    }

    function handleDeleteClientClick() {
        console.log("Eliminar cliente");
    }
    if (loadingCustomers) return <div>loading...</div>;
    return (
        <>
            <HeaderWithButton
                title={"Datos del cliente"}
                buttonText={"Añadir tarjeta"}
                onButtonClick={onSaludar}
            />
            <Form data={customer} />
            <TwoButtons
                firstButtonName="Archivar cliente"
                secondButtonName="Eliminar cliente"
                onFirstButtonClick={handleArchiveClientClick}
                onSecondButtonClick={handleDeleteClientClick}
            />
        </>
    );
};

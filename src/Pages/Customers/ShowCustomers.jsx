import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useCustomers from "../../Hooks/useCustomers";
import Form from "../../Components/Form";
import HeaderWithButton from "../../Components/HeaderWithButton";
import TwoButtons from "../../Components/TwoButtons";
import Button from "../../Components/Button";
import { HeadersOne } from "../../Wiews/HeadersOne";

export const ShowCustomers = () => {
    const params = useParams();
    const [txtStatus, setTxtStatus] = useState("");
    const navigate = useNavigate();
    const { getCustomer, customer, loadingCustomers, submitChangeStatus } =
        useCustomers();
    useEffect(() => {
        getCustomer(params.id);
    }, [params.id]);
    useEffect(() => {
        if (customer.activo === 1) {
            setTxtStatus("Archivar Cliente");
        } else {
            setTxtStatus("Activar Cliente");
        }
    }, [customer]);
    const onSaludar = () => {
        navigate(`/home/customers-card-business/${params.id}`);
    };
    function handleArchiveClientClick() {
        submitChangeStatus(customer);
        console.log("Cambio de status ");
    }

    function handleDeleteClientClick() {
        console.log("Eliminar cliente");
    }
    if (loadingCustomers) return <div>loading...</div>;
    return (
        <>
            <HeadersOne />
            <HeaderWithButton
                title={"Datos del cliente"}
                buttonText={"Añadir tarjeta"}
                onButtonClick={onSaludar}
            />
            <Form data={customer} />
            <TwoButtons
                firstButtonName={txtStatus}
                secondButtonName="Eliminar cliente"
                onFirstButtonClick={handleArchiveClientClick}
                onSecondButtonClick={handleDeleteClientClick}
            />
        </>
    );
};

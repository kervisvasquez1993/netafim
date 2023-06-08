import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useCustomers from "../../Hooks/useCustomers";
import Form from "../../Components/Form";
import HeaderWithButton from "../../Components/HeaderWithButton";
import TwoButtons from "../../Components/TwoButtons";
import Button from "../../Components/Button";
import { HeadersOne } from "../../Wiews/HeadersOne";
import Loading from "../../Wiews/Loading";
import useAlert from "../../Hooks/useAlert";
import Swal from "sweetalert2";

export const ShowCustomers = () => {
    const params = useParams();
    const { showAlert } = useAlert();
    const [txtStatus, setTxtStatus] = useState("");
    const navigate = useNavigate();
    const {
        getCustomer,
        customer,
        customers,
        customersInactivo,
        loadingCustomers,
        submitChangeStatus,
        setCustomers,
        setCustomersInactivo,
        onDeleteCustomer
    } = useCustomers();
    useEffect(() => {
        getCustomer(params.id);
    }, [params.id]);
    useEffect(() => {
        if (customer.activo == true) {
            setTxtStatus("Archivar Cliente");
        } else {
            setTxtStatus("Activar Cliente");
        }

        // Actualizar el estado 'customers' con los clientes actualizados
        const clientesActualizados = customers.map((cliente) => {
            if (cliente.id === customer.id) {
                return customer;
            }
            return cliente;
        });
        setCustomers(clientesActualizados);
        // Actualizar el estado 'customersInactivo' con los clientes actualizados
        const clientesInactivosActualizados = customersInactivo.map(
            (cliente) => {
                if (cliente.id === customer.id) {
                    return customer;
                }
                return cliente;
            }
        );
        setCustomersInactivo(clientesInactivosActualizados);
    }, [customer]);
    const onSaludar = () => {
        navigate(`/home/customers-card-business/${params.id}`);
    };
    function handleArchiveClientClick() {
        submitChangeStatus(customer);
        Swal.fire({
            title: "Cliente Actualizado!",
            text: "Cliente Actualizado de Forma Correcta",
            icon: "success",
            confirmButtonText: "Aceptar",
        });
        console.log("Cambio de status ");
    }

    function handleDeleteClientClick() {
        console.log("Eliminar cliente");
        onDeleteCustomer(customer);

    }
    if (loadingCustomers) return <Loading />;
    return (
        <>
            <HeadersOne />
            <HeaderWithButton
                title={"Datos del cliente"}
                buttonText={"Tarjeta de cliente"}
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

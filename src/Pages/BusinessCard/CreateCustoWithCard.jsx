import React, { useState } from "react";
import { HeadersOne } from "../../Wiews/HeadersOne";
import { TitleHeaders } from "../../Components/TitleHeaders";
import useCard from "../../Hooks/useCard";
import { useParams } from "react-router-dom";
import FormSubmit from "../../Components/FormSubmit";
import HeaderBack from "../../Components/HeaderBack";
const cultivos = [
    "Caña de Azúcar",
    "Banano",
    "Plátano",
    "Aguacate",
    "Café",
    "Ornamentales",
    "Hortalizas",
    "Palma de Aceite",
    "Melon",
    "Sandia",
    "Otro",
];
const sizes = ["ha", "mz", "m²"];
const opcionesCultivo = sizes.map((size) => (
    <option key={size} value={size}>
        {size}
    </option>
));
const opciones = cultivos.map((cultivo) => (
    <option key={cultivo} value={cultivo}>
        {cultivo}
    </option>
));
const CreateCustoWithCard = () => {
    const { submitNewClienteCard } = useCard();
    const params = useParams();
    const [customer, setCustomer] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        cultivo: "",
        numero_telefono: "",
        pais: "",
        tamano_de_cultivo: "",
        ubicacion_zona: "",
        empresa: "",
    });
    const handleInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        submitNewClienteCard(customer, params.id);
        setCustomer({
            nombre: "",
            apellido: "",
            correo: "",
            cultivo: "",
            numero_telefono: "",
            pais: "",
            tamano_de_cultivo: "",
            ubicacion_zona: "",
            empresa: "",
        });
    };
    return (
        <>
            <HeadersOne />
            <HeaderBack titulo={"Añadir Cliente"} />
            <FormSubmit />

        </>
    );
};

export default CreateCustoWithCard;

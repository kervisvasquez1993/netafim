import React, { useState } from "react";
import useCustomers from "../Hooks/useCustomers";
import useAlert from "../Hooks/useAlert";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useCard from "../Hooks/useCard";

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

const paises = [
    "Costa Rica",
    "Guatemala",
    "Honduras",
    "Panamá",
    "El Salvador",
    "Nicaragua",
    "República Dominicana",
    "Caribe",
];
const optPaises = paises.map((pais) => (
    <option key={pais} value={pais}>
        {pais}
    </option>
));

const opciones = cultivos.map((cultivo) => {
    if (cultivo == "Melon") {
        return (
            <option key={cultivo} value={cultivo}>
                Melón
            </option>
        );
    } else if (cultivo == "Sandia") {
        return (
            <option key={cultivo} value={cultivo}>
                Sandía
            </option>
        );
    }
    return (
        <option key={cultivo} value={cultivo}>
            {cultivo}
        </option>
    );
});

const unidadesDeMedida = ["ha", "mz", "m²"];
const unidadesMedida = unidadesDeMedida.map((size) => (
    <option key={size} value={size}>
        {size}
    </option>
));

const FormSubmit = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const { submitNewCliente, errors } = useCustomers();
    const { submitNewClienteCard } = useCard();
    const [customer, setCustomer] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        cultivo: "",
        otro_cultivo: "",
        numero_telefono: "",
        pais: "",
        tamano_de_cultivo: "",
        unidad_medida: "",
        ubicacion_zona: "",
        empresa: "",
    });
    const handleInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(params.id, "params");
        if (params.id) {
            submitNewClienteCard(customer, params.id);
        } else {
            submitNewCliente(customer);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="max-w-md mx-auto">
                <div className="mb-4 form-container">
                    <label
                        htmlFor="nombre"
                        className="label-position label-style"
                    >
                        Nombre
                    </label>
                    <input
                        className=" input-style"
                        type="text"
                        id="nombre"
                        name="nombre"
                        onChange={(e) => handleInputChange(e)}
                        value={customer.nombre}
                    />
                </div>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="apellido"
                        className="label-position label-style "
                    >
                        Apellido
                    </label>
                    <input
                        className=" input-style"
                        type="text"
                        id="apellido"
                        name="apellido"
                        onChange={handleInputChange}
                        value={customer.apellido}
                    />
                </div>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="empresa"
                        className="label-position label-style"
                    >
                        Empresa
                    </label>
                    <input
                        className=" input-style"
                        type="text"
                        id="empresa"
                        name="empresa"
                        onChange={handleInputChange}
                        value={customer.empresa}
                    />
                </div>

                <div className="mb-4 form-container">
                    <label
                        htmlFor="numero_telefono"
                        className="label-position label-style"
                    >
                        Número de teléfono
                    </label>
                    <input
                        className=" input-style"
                        type="text"
                        id="numero_telefono"
                        name="numero_telefono"
                        onChange={handleInputChange}
                        value={customer.numero_telefono}
                    />
                </div>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="correo"
                        onChange={handleInputChange}
                        className="label-position label-style"
                    >
                        Correo electrónico
                    </label>
                    <input
                        className="  input-style text-blue-500 opacity-40"
                        type="text"
                        id="correo"
                        name="correo"
                        onChange={handleInputChange}
                        value={customer.correo}
                    />
                </div>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="cultivo"
                        className="label-position label-style"
                    >
                        Cultivo
                    </label>
                    <select
                        className="input-style"
                        id="cultivo"
                        name="cultivo"
                        onChange={handleInputChange}
                        value={customer.cultivo}
                    >
                        <option>Seleccione una opción</option>
                        {opciones}
                    </select>
                </div>
                {customer.cultivo === "Otro" && (
                    <div className="mb-4 form-container">
                        <label
                            htmlFor="otro_cultivo"
                            className="label-position label-style"
                        >
                            Otros Cultivos
                        </label>
                        <input
                            className="input-style"
                            type="text"
                            id="otro_cultivo"
                            name="otro_cultivo"
                            onChange={handleInputChange}
                            value={customer.otro_cultivo}
                        />
                    </div>
                )}
                <div className="mb-4 form-container">
                    <label
                        htmlFor="tamano_de_cultivo"
                        className="label-position label-style"
                    >
                        Tamaño de cultivo
                    </label>
                    <input
                        className=" input-style"
                        type="text"
                        id="tamano_de_cultivo"
                        name="tamano_de_cultivo"
                        onChange={handleInputChange}
                        value={customer.tamano_de_cultivo}
                    />
                </div>
                <div className="mb-4 form-container">
                    <label
                        htmlFor="unidad_medida"
                        className="label-position label-style"
                    >
                        Unidad de medida
                    </label>
                    <select
                        className="input-style"
                        id="unidad_medida"
                        name="unidad_medida"
                        onChange={handleInputChange}
                        value={customer.unidad_medida}
                    >
                        <option>Seleccione una opción</option>
                        {unidadesMedida}
                    </select>
                </div>

                <div className="mb-4 form-container">
                    <label
                        htmlFor="pais"
                        className="label-position label-style"
                    >
                        País
                    </label>
                    <select
                        className="input-style"
                        id="pais"
                        name="pais"
                        onChange={handleInputChange}
                        value={customer.pais}
                    >
                        <option>Seleccione una opción</option>
                        {optPaises}
                    </select>
                </div>

                <div className="mb-4 form-container">
                    <label
                        htmlFor="ubicacion_zona"
                        className="label-position label-style"
                    >
                        Ubicación / Zona:
                    </label>
                    <input
                        className=" input-style"
                        type="text"
                        id="ubicacion_zona"
                        name="ubicacion_zona"
                        onChange={handleInputChange}
                        value={customer.ubicacion_zona}
                    />
                </div>

                <div className="flex flex-col items-center justify-center py-10 ">
                    <input
                        // style={{ minWidth: "250px" }}
                        type="submit"
                        className="button-style mb-5"
                        value="Guardar cliente"
                    />
                    <Link onClick={() => navigate(-1)} className="button-style-white">
                        Cancelar
                    </Link >
                </div>
            </div>
        </form>
    );
};
export default FormSubmit;

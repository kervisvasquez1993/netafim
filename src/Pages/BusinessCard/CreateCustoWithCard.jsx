import React, { useState } from "react";
import { HeadersOne } from "../../Wiews/HeadersOne";
import { TitleHeaders } from "../../Components/TitleHeaders";
import useCard from "../../Hooks/useCard" 
import { useParams } from "react-router-dom";
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
    const {submitNewClienteCard} = useCard()
    const params = useParams()
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
        submitNewClienteCard(customer,params.id);
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
            <TitleHeaders title={"Añadir Cliente"}/>
            <form onSubmit={handleSubmit}>
                <div className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label
                            htmlFor="nombre"
                            className="block font-normal mb-2 text-blue-500 "
                        >
                            Nombre:
                        </label>
                        <input
                            className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                            type="text"
                            id="nombre"
                            name="nombre"
                            onChange={(e) => handleInputChange(e)}
                            value={customer.nombre}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="apellido"
                            className="block font-normal mb-2 text-blue-500  "
                        >
                            Apellido:
                        </label>
                        <input
                            className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                            type="text"
                            id="apellido"
                            name="apellido"
                            onChange={handleInputChange}
                            value={customer.apellido}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="correo"
                            onChange={handleInputChange}
                            className="block font-normal mb-2 text-blue-500 "
                        >
                            Correo:
                        </label>
                        <input
                            className="  border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40 text-blue-500 opacity-40"
                            type="text"
                            id="correo"
                            name="correo"
                            onChange={handleInputChange}
                            value={customer.correo}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="cultivo"
                            className="block font-normal mb-2 text-blue-500 "
                        >
                            Cultivo:
                        </label>
                        {/* <input
                        className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                        type="text"
                        id="cultivo"
                        name="cultivo"
                        onChange={handleInputChange}
                        value={customer.cultivo}
                    /> */}

                        <select
                            className="block  border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                            id="cultivo"
                            name="cultivo"
                            onChange={handleInputChange}
                            value={customer.cultivo}
                        >
                            {opciones}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="numero_telefono"
                            className="block font-normal mb-2 text-blue-500 "
                        >
                            Número de teléfono:
                        </label>
                        <input
                            className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                            type="text"
                            id="numero_telefono"
                            name="numero_telefono"
                            onChange={handleInputChange}
                            value={customer.numero_telefono}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="pais"
                            className="block font-normal mb-2 text-blue-500 "
                        >
                            País:
                        </label>
                        <input
                            className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                            type="text"
                            onChange={handleInputChange}
                            value={customer.pais}
                            id="pais"
                            name="pais"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="tamano_de_cultivo"
                            className="block font-normal mb-2 text-blue-500 "
                        >
                            Tamaño de cultivo:
                        </label>
                        {/* <input
                        className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                        type="text"
                        id="tamano_de_cultivo"
                        name="tamano_de_cultivo"
                        onChange={handleInputChange}
                        value={customer.tamano_de_cultivo}
                    /> */}
                        <select
                            className="border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                            id="tamano_de_cultivo"
                            name="tamano_de_cultivo"
                            onChange={handleInputChange}
                            value={customer.tamano_de_cultivo}
                        >
                            {opcionesCultivo}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="ubicacion_zona"
                            className="block font-normal mb-2 text-blue-500 "
                        >
                            Ubicación / Zona:
                        </label>
                        <input
                            className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                            type="text"
                            id="ubicacion_zona"
                            name="ubicacion_zona"
                            onChange={handleInputChange}
                            value={customer.ubicacion_zona}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="empresa"
                            className="block font-normal mb-2 text-blue-500 "
                        >
                            Empresa:
                        </label>
                        <input
                            className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                            type="text"
                            id="empresa"
                            name="empresa"
                            onChange={handleInputChange}
                            value={customer.empresa}
                        />
                    </div>
                    <input
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        value="enviar"
                    />
                </div>
            </form>
        </>
    );
};

export default CreateCustoWithCard;
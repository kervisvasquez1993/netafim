import React, { useState } from "react";
import useCustomers from "../Hooks/useCustomers";
import useAlert from "../Hooks/useAlert";


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
const FormSubmit = () => {
    const {showAlert} = useAlert();
    const { submitNewCliente, errors } = useCustomers();
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
        submitNewCliente(customer);        
    };
    return (
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
                        className="border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
                        id="cultivo"
                        name="cultivo"
                        onChange={handleInputChange}
                        value={customer.cultivo}
                    >
                        <option>Seleccione una opción</option>
                        {opciones}
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
                        <option>Seleccione una opción</option>
                        {opcionesCultivo}
                    </select>
                </div>
                
                
                <div className="flex flex-col items-center justify-center py-10 ">
                    <input
                        style={{ minWidth: "250px" }}
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded border-2 border-blue-500 mb-4"
                        value="enviar"
                    />
                </div>
            </div>
        </form>
    );
};

export default FormSubmit;

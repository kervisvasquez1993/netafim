import React from "react";

function Form({ data }) {
    const defaultValueTamanoCultivo = "Mediano";
    const {
        nombre,
        apellido,
        correo,
        cultivo,
        numero_telefono,
        pais,
        tamano_de_cultivo,
        ubicacion_zona,
        empresa,
        unidad_medida,
    } = data;
    console.log(ubicacion_zona);
    return (
        <div className="max-w-md mx-auto">
            <div className="mb-4 form-container">
                <label htmlFor="nombre" className="label-position label-style">
                    Nombre
                </label>
                <input
                    className=" input-style"
                    type="text"
                    id="nombre"
                    readOnly
                    defaultValue={nombre}
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
                    value={apellido}
                    readOnly
                />
            </div>
            <div className="mb-4 form-container">
                <label htmlFor="empresa" className="label-position label-style">
                    Empresa
                </label>
                <input
                    className=" input-style"
                    type="text"
                    id="empresa"
                    readOnly
                    value={empresa}
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
                    readOnly
                    value={numero_telefono}
                />
            </div>
            <div className="mb-4 form-container">
                <label htmlFor="correo" className="label-position label-style">
                    Correo
                </label>
                <input
                    className="  input-style text-blue-500 opacity-40"
                    type="text"
                    id="correo"
                    value={correo}
                    readOnly
                />
            </div>
            <div className="mb-4 form-container">
                <label htmlFor="cultivo" className="label-position label-style">
                    Cultivo
                </label>
                <input
                    className=" input-style"
                    type="text"
                    id="cultivo"
                    value={cultivo}
                    readOnly
                />
            </div>{" "}
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
                    readOnly
                    defaultValue={tamano_de_cultivo}
                />
            </div>
            <div className="mb-4 form-container">
                <label
                    htmlFor="unidad_medida"
                    className="label-position label-style"
                >
                    Unidad de medida
                </label>
                <input
                    className=" input-style"
                    type="text"
                    id="unidad_medida"
                    readOnly
                    defaultValue={unidad_medida}
                />
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
                    readOnly
                    value={ubicacion_zona}
                />
            </div>
            <div className="mb-4 form-container">
                <label htmlFor="pais" className="label-position label-style">
                    País
                </label>
                <input
                    className=" input-style"
                    type="text"
                    defaultValue={pais}
                    id="pais"
                    readOnly
                />
            </div>
        </div>
    );
}

export default Form;

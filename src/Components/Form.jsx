import React from "react";

function Form({data}) {
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
} = data;
console.log(ubicacion_zona)
  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="nombre" className="block font-normal mb-2 text-blue-500 ">
          Nombre:
        </label>
        <input
          className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-70"
          type="text"
          id="nombre"
          readOnly
          defaultValue={nombre}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="apellido" className="block font-normal mb-2 text-blue-500  ">
          Apellido:
        </label>
        <input
          className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-70"
          type="text"
          id="apellido"
          value={apellido}
          readOnly
       
        />
      </div>
      <div className="mb-4">
        <label htmlFor="correo" className="block font-normal mb-2 text-blue-500 ">
          Correo:
        </label>
        <input
          className="  border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-70 text-blue-500 opacity-70"
          type="text"
          id="correo"
          value={correo}
          readOnly
          
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cultivo" className="block font-normal mb-2 text-blue-500 ">
          Cultivo:
        </label>
        <input
          className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-70"
          type="text"
          id="cultivo"
          value={cultivo}
          readOnly
          
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numero_telefono" className="block font-normal mb-2 text-blue-500 ">
          Número de teléfono:
        </label>
        <input
          className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-70"
          type="text"
          id="numero_telefono"
          readOnly
          value={numero_telefono}
          
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pais" className="block font-normal mb-2 text-blue-500 ">
          País:
        </label>
        <input
          className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-70"
          type="text"
          defaultValue={pais}
          id="pais"
          readOnly
          
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tamano_de_cultivo" className="block font-normal mb-2 text-blue-500 ">
          Tamaño de cultivo:
        </label>
        <input
          className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-70"
          type="text"
          
          id="tamano_de_cultivo"
          readOnly
          defaultValue={tamano_de_cultivo}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ubicacion_zona" className="block font-normal mb-2 text-blue-500 ">
          Ubicación / Zona:
        </label>
        <input
          className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-70"
          type="text"
          id="ubicacion_zona"
          readOnly
          value={ubicacion_zona}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="empresa" className="block font-normal mb-2 text-blue-500 ">
          Empresa:
        </label>
        <input
          className=" border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-70"
          type="text"
          id="empresa"
          readOnly
          value={empresa}
        />
      </div>
    </div>
  );
}

export default Form
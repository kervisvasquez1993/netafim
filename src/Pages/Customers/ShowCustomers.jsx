import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import useCustomers from "../../Hooks/useCustomers";
import { Form } from "../../Components/Form";
import "./style.css";
export const ShowCustomers = () => {
    const params = useParams();

    const { getCustomer, customer, loadingCustomers, submitChangeStatus } =
        useCustomers();
    useEffect(() => {
        getCustomer(params.id);
    }, [params.id]);
    const {
        nombre,
        activo,
        apellido,
        correo,
        cultivo,
        numero_telefono,
        pais,
        tamano_de_cultivo,
        ubicacion_zona,
        empresa,
    } = customer;
    console.log(customer, "ombre");
    if (loadingCustomers) return <div>loading...</div>;
    return (
        <div className="register-container container">
            <div className="register-header"></div>

            <div className="register-form">
                <div className="title">
                    <div className="arrow"></div>
                    <h2 className="form-title">Añadir cliente</h2>
                </div>

                <div className="btn-header">
                    <a className="añadir-clientes" href="#">
                        Añadir tarjetas de clientes
                    </a>
                </div>

                <div className="form-container">
                    <form>
                        <fieldset className="input">
                            <legend>Nombre</legend>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                defaultValue={nombre}
                                readOnly
                                placeholder="Juan"
                                
                            />
                        </fieldset>

                        <fieldset className="input">
                            <legend>Apellidos</legend>
                            <input
                                type="text"
                                id="apellidos"
                                name="apellidos"
                                defaultValue={apellido}
                                 readOnly
                                placeholder="Hernández Perez"
                                
                            />
                        </fieldset>

                        <fieldset className="input">
                            <legend>Empresa</legend>
                            <input
                                type="text"
                                id="Empresa"
                                name="Empresa"
                                defauldValue={empresa}
                                 readOnly
                                placeholder="Nombre de empresa"
                                
                            />
                        </fieldset>

                        <fieldset className="input">
                            <legend>Número de teléfono</legend>
                            <input
                                type="tel"
                                id="tlf"
                                name="tlf"
                                defaultValue={numero_telefono}
                                readOnly
                                placeholder="+506 8832 8823"
                                
                            />
                        </fieldset>

                        <fieldset className="input">
                            <legend>Correo electrónico</legend>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                defaultValue={correo}
                                readOnly
                                placeholder="ejemplo@netafim.com"
                                
                            />
                        </fieldset>

                        <fieldset className="input">
                            <legend>Cultivo</legend>
                            <input
                                type="cultivo"
                                id="cultivo"
                                name="cultivo"
                                dafualdValue={cultivo}
                                 readOnly
                                
                            />
                        </fieldset>

                        <fieldset className="input">
                            <legend>Ubicación/zona</legend>
                            <input
                                type="text"
                                id="ubicacion"
                                name="ubicacion"
                                dafualdValue={ubicacion_zona}
                                readOnly
                                placeholder="Zona del cultivo"
                                
                            />
                        </fieldset>

                        <fieldset className="input">
                            <legend>País</legend>
                            <input
                                type="text"
                                id="pais"
                                name="pais"
                                placeholder="País"
                                defauldValue={pais}
                                readOnly
                                
                            />
                        </fieldset>

                        <fieldset className="input tamaño-cult">
                            <legend>Tamaño del cultivo</legend>
                            <input
                                type="text"
                                id="tamaño-cultivo"
                                name="tamaño-cultivo"
                                placeholder="9999"
                                defaulValue={tamano_de_cultivo}
                                readOnly
                                
                            />
                        </fieldset>

                        <label className="extra">
                            <input type="checkbox" id="extra" name="extra" />{" "}
                            ¿Desea recibir información por correo?
                        </label>

                        <div className="btn">
                            <span
                                className="register-link"
                                href="#"
                                onClick={() => submitChangeStatus(customer)}
                            >
                                {activo == 1
                                    ? "Desactivar Cliente"
                                    : "Activar Cliente"}
                            </span>
                        </div>
                        <div className="btn btn-dos">
                            <button className="register-link white" href="#">
                                Eliminar cliente
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

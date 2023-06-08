import { useState } from "react";
import ShowCard from "./ShowCard";
import { Link } from "react-router-dom";
import Button from "./Button";
import persona from "../assets/svg/perfil.svg";
import useCustomers from "../Hooks/useCustomers";
import useAlert from "../Hooks/useAlert";

const ToggleCard = ({ handleLeftClick, handleRightClick, data }) => {
    const { descarga } = useCustomers();
    

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    console.log(data, "data");

    const filteredData =
        activeTab == 1
            ? data?.filter((cliente) => cliente.activo)
            : data?.filter((cliente) => !cliente.activo);
    const titulo = (<span className="flex justify-between items-center">Descargar Datos <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
  </span>)
    return (
        <>
            <div className="border rounded-xl overflow-hidden shadow-sm min-h-3000">
                <div className="flex">
                    <div
                        className={`w-1/2 p-1 flex justify-center items-center cursor-pointer flex items-center ${
                            activeTab == 1
                                ? "bg-main  text-white"
                                : " bg-main  opacity-50 text-white"
                        }`}
                        onClick={() => {
                            handleLeftClick();
                            handleTabClick(1);
                        }}
                        style={{
                            borderRadius: "0.5rem 0 0 0",
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <h3 className="text-center text-16 font-semibold">
                            Clientes Activos
                        </h3>
                    </div>
                    <div
                        className={` flex justify-center items-center w-1/2 p-1 cursor-pointer ${
                            activeTab === 2
                            ? "bg-main  text-white"
                            : " bg-main  opacity-50 text-white"
                        }`}
                        onClick={() => {
                            handleRightClick();
                            handleTabClick(2);
                        }}
                        style={{
                            borderRadius: "0 0.5rem 0 0",
                            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <h3 className="text-center  font-semibold">
                            Clientes Archivados
                        </h3>
                    </div>
                </div>

                <div className="border-t border-b p-4 text-center">
                    <Button
                        text={titulo}
                        onClick={descarga}
                        variant={"primary"}
                    />
                    {!filteredData?.length && <div>Sin Clientes</div>}
                    {filteredData?.map((ele) => (
                        <Link to={`${ele.id}`} key={ele.id}>
                            <ShowCard
                                cardTitle={ele.nombre}
                                tarjeta={persona}
                                cardSubtitle={ele.empresa}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ToggleCard;

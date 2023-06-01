import { useState } from "react";
import ShowCard from "./ShowCard";
import { Link } from "react-router-dom";
import Button from "./Button";
import persona from "../assets/svg/perfil.svg";
import useCustomers from "../Hooks/useCustomers";
const ToggleCard = ({ handleLeftClick, handleRightClick, data }) => {
    const { descarga } = useCustomers();
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    const test = () => {
        console.log("test");
    };
    console.log(data, "data");
    return (
        <>
            <div className="border rounded-xl overflow-hidden shadow-sm min-h-3000">
                <div className="flex">
                    <div
                        className={`w-1/2 p-1 flex justify-center items-center cursor-pointer flex items-center ${
                            activeTab === 1
                                ? "bg-blue-500 text-white"
                                : "bg-blue-500 opacity-50 text-white"
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
                                ? "bg-blue-500 text-white"
                                : "bg-blue-500 opacity-50 text-white"
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
                        text={"Descargar Datos"}
                        onClick={descarga}
                        variant={"primary"}
                    />
                    {!data && <div>Sin Clientes</div>}
                    {data &&
                        data.map((ele) => {
                            return (
                                <Link to={`${ele.id}`} key={ele.id}>
                                    <ShowCard
                                        cardTitle={ele.nombre}
                                        tarjeta={persona}
                                        cardSubtitle={ele.empresa}
                                    />{" "}
                                </Link>
                            );
                        })}
                    {data &&
                        data.map((ele) => {
                            return (
                                <Link to={`${ele.id}`} key={ele.id}>
                                    <ShowCard
                                        cardTitle={ele.nombre}
                                        cardSubtitle={ele.empresa}
                                    />{" "}
                                </Link>
                            );
                        })}
                </div>
            </div>
        </>
    );
};
export default ToggleCard;

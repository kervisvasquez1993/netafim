import { useState } from "react";
import CardCustomer from "./Cardcustomer";
import { Link } from "react-router-dom";
import Button from "./Button";

const ToggleCard = ({ handleLeftClick, handleRightClick, data }) => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    const test =() =>{
    console.log("test");
    }
    return (
        <>
            <div className="border rounded-xl overflow-hidden shadow-sm min-h-3000">
                <div className="flex">
                    <div
                        className={`w-1/2 p-4 cursor-pointer ${
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
                        <h3 className="text-lg font-semibold">
                            Título de la tarjeta 1
                        </h3>
                    </div>
                    <div
                        className={`w-1/2 p-4 cursor-pointer ${
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
                        <h3 className="text-lg font-semibold">
                            Título de la tarjeta 2
                        </h3>
                    </div>
                </div>

                <div className="border-t border-b p-4 text-center">
                    <Button text={"Descargar Datos"} onClick={test} variant={"primary"}/>
                    {data &&
                        data.data.map((ele) => {
                            return (
                                <Link to={`${ele.id}`}>
                                    <CardCustomer
                                        key={ele.id}
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

import { Link } from "react-router-dom";
import useCustomers from "../../Hooks/useCustomers.jsx";
import Card from "../../Wiews/Card.jsx";
import { HeadersOne } from "../../Wiews/HeadersOne.jsx";
import addCliente from "../../assets/svg/addcliente.svg";
import listCliente from "../../assets/svg/clientes.svg";
import perfil from "../../assets/svg/perfil.svg";
import { TitleHeaders } from "../../Components/TitleHeaders.jsx";
import Button from "../../Components/Button.jsx";
import useAuth from "../../Hooks/useAuth.jsx";
import { useEffect } from "react";

export const Home = () => {
    const { salir } = useAuth();
    const { getCustomerData } = useCustomers();
    const handleLogout = () => {
        console.log("hola");
        salir();
        console.log("logout");
        return;
    };
    useEffect(() => {
        console.log("useEffect");
        getCustomerData();
    }, []);
    return (
        <>
            <HeadersOne />
            <TitleHeaders title="Bienvenido" isBack={false} />
            <div
                className="flex flex-wrap justify-center md:justify-start md:flex items-center"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "60vh",
                }}
            >
                <div className="w-full md:w-1/3 lg:w-1/3 p-4">
                    <Card
                        icon={addCliente}
                        buttonText={"Agregar Cliente"}
                        ruta={"add-customers"}
                    />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/3 p-4">
                    <Card
                        icon={listCliente}
                        buttonText={"Ver Clientes"}
                        ruta={"customers"}
                    />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/3 p-4">
                    <Card icon={perfil} buttonText={"Perfil"} ruta={"me"} />
                </div>
            </div>
            <Button
                text="Cerrar Sesión"
                variant="secondary"
                onClick={handleLogout}
            />
        </>
    );
};

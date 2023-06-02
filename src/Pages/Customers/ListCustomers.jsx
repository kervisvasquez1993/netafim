import { useEffect, useState } from "react";
import ShowCard from "../../Components/ShowCard";
import useCustomers from "../../Hooks/useCustomers";
import { Link, useNavigate } from "react-router-dom";
import HeaderWithButton from "../../Components/HeaderWithButton";
import ToggleCard from "../../Components/ToggleCard";
import { HeadersTwo } from "../../Wiews/HeadersTwo";
import { TitleHeaders } from "../../Components/TitleHeaders";
import Button from "../../Components/Button";

export const ListCustomers = () => {
    const navigate = useNavigate();
    const { customers, loadingCustomers } = useCustomers();
    const [dato, setDatos] = useState(customers);
    
    
    if (loadingCustomers) return <div>loading...</div>;

    return (
        <>
            <HeadersTwo />
            <TitleHeaders title={"Lista de Clientes"} />
            <Button
                text={"Ver las Tarjetas de clientes"}
                variant={"primary"}
                onClick={() => navigate("/home/card-business")}
                pt={5}
                pb={10}
            />
            <ToggleCard
                handleLeftClick={() => console.log("click left")}
                handleRightClick={() => console.log("click right")}
                data={customers}
            />
        </>
    );
};

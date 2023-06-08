import { useEffect, useState } from "react";
import ShowCard from "../../Components/ShowCard";
import useCustomers from "../../Hooks/useCustomers";
import { Link, useNavigate } from "react-router-dom";
import HeaderWithButton from "../../Components/HeaderWithButton";
import ToggleCard from "../../Components/ToggleCard";
import { HeadersTwo } from "../../Wiews/HeadersTwo";
import { TitleHeaders } from "../../Components/TitleHeaders";
import Button from "../../Components/Button";
import Loading from "../../Wiews/Loading";
import HeaderBack from "../../Components/HeaderBack";


const boton = () => {
   return  <div className={`flex justify-center pt-10 pb-10`}>
    <button
        className={className}
        style={{ minWidth: "200px", height: "50px" }}
        onClick={()=>{console.log("hola")}}
    >
        
    </button>
</div>
}
export const ListCustomers = () => {
    const navigate = useNavigate();
    const { customers, loadingCustomers,onGetDataCustomers } = useCustomers();
    const [dato, setDatos] = useState(customers);
    useEffect(() => {}, [customers]);
    useEffect(() => {
        onGetDataCustomers();
    }, []);
    if (loadingCustomers) return <Loading />;

    return (
        <>
            <HeadersTwo />
            <HeaderBack titulo={"Lista de clietes"}/>
            <Button
                text={"Ver tarjetas de clientes"}
                variant={"primary"}
                onClick={() => navigate("/home/card-business")}
                pt={10}
                pb={10}
            />
            <ToggleCard
                handleLeftClick={() => console.log("click left")}
                handleRightClick={() => console.log("click right")}
                data={dato}
            />
        </>
    );
};

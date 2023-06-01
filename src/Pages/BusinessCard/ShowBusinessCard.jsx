import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { HeadersOne } from "../../Wiews/HeadersOne";
import useCard from "../../Hooks/useCard";
import { baseUrlaws } from "../../Helpers";
import Button from "../../Components/Button";
export const ShowBusinessCard = () => {
    const { getCard, cardBusiness, loadingCustomers } = useCard();
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getCard(params.id);
    }, [params.id]);
    console.log(cardBusiness, "cardBusiness");
    if (loadingCustomers) return <div>loading...</div>;
    // console.log(baseUrlaws, "baseUrlaws");
    return (
        <>
            <HeadersOne />

            <div className="bg-white rounded-lg shadow-md p-4">
                <img
                    src={`${baseUrlaws}/${cardBusiness.src_img}`}
                    alt="Imagen de la cardBusiness"
                    className="w-full h-auto object-cover"
                />
            </div>
            <Button text={"Agregar Cliente"} onClick={()=> navigate(`/home/card-business-customers/${params.id}`)} />
        </>
    );
};

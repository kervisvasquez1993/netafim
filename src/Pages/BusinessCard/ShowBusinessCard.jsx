import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { HeadersOne } from "../../Wiews/HeadersOne";
import useCard from "../../Hooks/useCard";
import { baseUrlaws } from "../../Helpers";
import Button from "../../Components/Button";
// import { TitleHeaders } from "../Components/TitleHeaders";
// TitleHeaders
import Loading from "../../Wiews/Loading";
import { TitleHeaders } from "../../Components/TitleHeaders";
// import Loading from "../../Components/Loading";

export const ShowBusinessCard = () => {
    const { getCard, cardBusiness, loadingCustomers, onDeleteCard } = useCard();
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getCard(params.id);
    }, [params.id]);
    console.log(cardBusiness, "cardBusiness");
    if (loadingCustomers) return <Loading />;
    // console.log(baseUrlaws, "baseUrlaws");
    return (
        <>
            <HeadersOne />
            <TitleHeaders title={`Titulo ${cardBusiness.id}`} isBack={false} />
            <div className="bg-white rounded-lg shadow-md p-4">
                <img
                    src={`${baseUrlaws}/${cardBusiness.src_img}`}
                    alt="Imagen de la cardBusiness"
                    className="w-full h-auto object-cover"
                />
            </div>
            <Button
                text={"Agregar Cliente"}
                variant={"primary"}
                onClick={() =>
                    navigate(`/home/card-business-customers/${params.id}`)
                }
                pt={5}
                pb={2}
            />

            <Button
                text={"Eliminar"}
                variant={"secondary"}
                onClick={() => onDeleteCard(cardBusiness)}
                pt={5}
                pb={5}
            />
        </>
    );
};

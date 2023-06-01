import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { HeadersOne } from "../../Wiews/HeadersOne";
import useCard from "../../Hooks/useCard";
import { baseUrlaws } from "../../Helpers";
import Button from "../../Components/Button";
import { TitleHeaders } from "../../Components/TitleHeaders";
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
            <TitleHeaders title={`Titulo ${cardBusiness.id}`} isBack={true} />
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
                onClick={() =>
                   console.log("eliminado")
                }
                pt={5}
                pb={5}
            />
        </>
    );
};

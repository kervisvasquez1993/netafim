import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { HeadersOne } from "../../Wiews/HeadersOne";
import useCard from "../../Hooks/useCard";
import { baseUrlaws } from "../../Helpers";
import Button from "../../Components/Button";
import Loading from "../../Wiews/Loading";
import { TitleHeaders } from "../../Components/TitleHeaders";
import HeaderBack from "../../Components/HeaderBack";

export const ShowBusinessCard = () => {
  const { getCard, cardBusiness, loadingCustomers, onDeleteCard } = useCard();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCard(params.id);
  }, [params.id]);

  if (loadingCustomers) return <Loading />;

  const isCardBusinessArray = Array.isArray(cardBusiness);

  return (
    <>
      <HeadersOne />
      <HeaderBack titulo={`Titulo ${cardBusiness[0]?.id}`} />

      {isCardBusinessArray ? (
        cardBusiness.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md pr-10 pl-10 mt-10 mb-10"
          >
            <img
              src={`${baseUrlaws}/${card.src_img}`}
              alt="Imagen de la cardBusiness"
              className="w-full h-auto object-cover"
            />
          </div>
        ))
      ) : (
        <div className="bg-white rounded-lg shadow-md pr-10 pl-10 mt-10 mb-10">
          <img
            src={`${baseUrlaws}/${cardBusiness?.src_img}`}
            alt="Imagen de la cardBusiness"
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <Button
        text={"Agregar Cliente"}
        variant={"primary"}
        onClick={() =>
          navigate(`/home/card-business-customers/${params.id}`)
        }
        pt={10}
        pb={10}
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
// test
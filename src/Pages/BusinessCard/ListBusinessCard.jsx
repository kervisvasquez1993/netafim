import React from "react";
import useCard from "../../Hooks/useCard";
import ShowCard from "../../Components/ShowCard";
import { Link } from "react-router-dom";
import tarjetaicono from "../../assets/svg/tarjeta.svg";
import { HeadersOne } from "../../Wiews/HeadersOne";
import HeaderBack from "../../Components/HeaderBack";

const ListBusinessCard = () => {
    const { cardsBusiness } = useCard();
    console.log(cardsBusiness, "cardsBusiness");
    return (
        <>
            <HeadersOne />
            <HeaderBack titulo={"Tarjetas de clientes"} />
            <div className="border rounded-xl bg-white overflow-hidden mt-10 shadow-sm min-h-3000">
                <div className="border-t border-b p-4 text-center">
                    {!cardsBusiness && <div>Sin Tarjeta</div>}
                    {cardsBusiness &&
                        cardsBusiness.map((ele) => {
                            return (
                                <Link to={`${ele.id}`} key={ele.id}>
                                    <ShowCard
                                        tarjeta={tarjetaicono}
                                        cardTitle={`Tarjeta ${ele.id}`}
                                        // cardSubtitle={ele.empresa}
                                    />{" "}
                                </Link>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default ListBusinessCard;

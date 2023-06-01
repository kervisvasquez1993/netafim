import React from "react";
import useCard from "../../Hooks/useCard";
import CardCustomer from "../../Components/Cardcustomer";
import { Link } from "react-router-dom";
import { HeadersOne } from "../../Wiews/HeadersOne";

const ListBusinessCard = () => {
    const { cardsBusiness } = useCard();
    console.log(cardsBusiness, "cardsBusiness");
    return (
        <>
            <HeadersOne />
            <h1 className="text-center text-2xl font-bold py-10">Tarjeta de Clientes</h1>
            <div className="border rounded-xl bg-white overflow-hidden shadow-sm min-h-3000">
                <div className="border-t border-b p-4 text-center">
                    {!cardsBusiness && <div>Sin Clientes</div>}
                    {cardsBusiness &&
                        cardsBusiness.map((ele) => {
                            return (
                                <Link to={`${ele.id}`}>
                                    <CardCustomer
                                        key={ele.id}
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

import { useContext } from "react";
import CardProvider from "../Context/CardProvider";

export const useCard = () => {
    return useContext(CardProvider);
};
export default useCard;

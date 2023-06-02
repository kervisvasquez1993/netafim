import { useContext } from "react";
import AlertContext from "../Context/AlertProvider";

export const useAlert = () => {
    return useContext(AlertContext);
};
export default useAlert;

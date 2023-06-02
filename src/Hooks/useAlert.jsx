import { useContext } from "react";
import AlertContext from "../Context/AuthProvider";

export const useAlert = () => {
    return useContext(AlertContext);
};
export default useAlert;

import { useContext } from "react";
import CustomersContext from "../Context/CustomersProvider";
const useCustomers = () => {
    return useContext(CustomersContext);
};

export default useCustomers;

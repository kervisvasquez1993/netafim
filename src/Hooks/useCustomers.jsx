import { useContext } from "react";
import CustomersProvider from "../Context/CustomersProvider";
const useCustomers = () => {
    return useContext(CustomersProvider);
};

export default useCustomers;

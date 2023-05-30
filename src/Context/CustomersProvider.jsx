import { useEffect, useState, createContext } from "react";

const CustomersContext = createContext();
const CustomersProvider = ({ children }) => {
    return <CustomersContext.Provider>{children}</CustomersContext.Provider>;
};
export default CustomersProvider;

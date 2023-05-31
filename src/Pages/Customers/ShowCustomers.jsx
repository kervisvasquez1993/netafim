import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useCustomers from "../../Hooks/useCustomers";
import Form from "../../Components/Form";

export const ShowCustomers = () => {
    const params = useParams();

    const { getCustomer, customer, loadingCustomers, submitChangeStatus } =
        useCustomers();
    useEffect(() => {
        getCustomer(params.id);
    }, [params.id]);
    
    console.log(customer, "ombre");
    if (loadingCustomers) return <div>loading...</div>;
    return (
        <Form data={customer}/>
    );
};

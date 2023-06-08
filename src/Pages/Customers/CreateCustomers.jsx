import FormSubmit from "../../Components/FormSubmit";
import { TitleHeaders } from "../../Components/TitleHeaders";
import { HeadersOne } from "../../Wiews/HeadersOne";
import HeaderWithButton from "../../Components/HeaderWithButton";
import { useNavigate } from "react-router-dom";
import HeaderBack from "../../Components/HeaderBack";
import Button from "../../Components/Button";

export const CreateCustomers = () => {
    const navigate = useNavigate();
    return (
        <>
            <HeadersOne />
            <HeaderBack titulo={"Añadir cliente"} />
            <Button
                text={"Añadir tarjeta de cliente"}
                onClick={() => navigate(`/home/add-card-business`)}
                variant={"primary"}
                pt={10}
                pb={10}
            />
            <FormSubmit />
        </>
    );
};

import FormSubmit from "../../Components/FormSubmit";
import { TitleHeaders } from "../../Components/TitleHeaders";
import { HeadersOne } from "../../Wiews/HeadersOne";
import HeaderWithButton from "../../Components/HeaderWithButton";
import { useNavigate } from "react-router-dom";


export const CreateCustomers = () => {
    const navigate = useNavigate();
    return (
        <>
            <HeadersOne/>
            <HeaderWithButton
                title={"Añadir cliente"}
                buttonText={"Añadir tarjeta de cliente"}
                onButtonClick={() => navigate(`/home/add-card-business`)}
            />
            <FormSubmit />
        </>
    );
};

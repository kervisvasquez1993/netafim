import FormSubmit from "../../Components/FormSubmit";
import { TitleHeaders } from "../../Components/TitleHeaders";
import { HeadersOne } from "../../Wiews/HeadersOne";

export const CreateCustomers = () => {
    return (
        <>
            <HeadersOne/>
            <TitleHeaders title={"Datos del Cliente"} sizeTilte={2}/>
            <FormSubmit />
        </>
    );
};

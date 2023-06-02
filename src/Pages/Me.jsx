import { TitleHeaders } from "../Components/TitleHeaders";
import useAuth from "../Hooks/useAuth";
import { HeadersOne } from "../Wiews/HeadersOne";

const Me = () => {
  const { auth } = useAuth();
    console.log(auth, "auth")
  return (
    <>
      <HeadersOne />
      <TitleHeaders title={"perfil"} sizeTilte={5} isBack={false}/>

      <form>
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-normal mb-2 text-blue-500">
            Nombre:
          </label>
          <input
            className="border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
            type="text"
            id="nombre"
            name="nombre"
            value={auth.name} // Reemplazar con el valor correcto del objeto 'auth'
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block font-normal mb-2 text-blue-500">
            Apellido:
          </label>
          <input
            className="border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
            type="text"
            id="apellido"
            name="apellido"
            value={auth.last_name} // Reemplazar con el valor correcto del objeto 'auth'
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="correo" className="block font-normal mb-2 text-blue-500">
            Correo:
          </label>
          <input
            className="border-blue-500 border-2 rounded-md px-4 py-2 focus:outline-none w-full text-blue-500 opacity-40"
            type="email"
            id="correo"
            name="correo"
            value={auth.email} // Reemplazar con el valor correcto del objeto 'auth'
            readOnly
          />
        </div>
      </form>
    </>
  );
};

export default Me;

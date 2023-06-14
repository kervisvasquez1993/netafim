import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiBackend } from "../apis/ApiBackend";
import { configHeaderToken } from "../Helpers/index";
import Swal from "sweetalert2";
// configHeaderToken

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const config = configHeaderToken();
    const navigate = useNavigate();
    const salir = async () => {
        await logout();
        return;
    };
    const onUpdatePassword = async (data) => {
        await updatePassword(data);
    };

    const updatePassword = async (password) => {
        try {
            if (!config) {
                return;
            }
            const { data } = await ApiBackend.put(
                `user/update-password`,
                password,
                config
            );
            console.log(data, "data");
            Swal.fire({
                customClass:{
                    confirmButton : "bg-main"
                },
                icon: "success",
                title: data.message,
                confirmButtonColor : "#0a7dd6",
            });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("token");
            if (!token) return setLoading(false);
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const { data } = await ApiBackend("me", config);
                console.log(data, "data para el login");
                setAuth(data);
                navigate("/home");
            } catch (error) {
                setAuth({});
                console.log(error);
            }
            setLoading(false);
        })();
    }, []);
    const logout = async () => {
        try {
            console.log(config, "config");
            if (!config) {
                // showAlert( "No tienes permiso", "error");
                return;
            }
            const respuesta = await ApiBackend.post(`logout`, {}, config);
            localStorage.removeItem("token");
            navigate("/login");

            console.log(respuesta, "cliente salir");
            console.log(respuesta.data.data, "respuesta");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AuthContext.Provider
            value={{ auth, setAuth, loading, salir, onUpdatePassword }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

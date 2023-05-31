import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../Components";
import useAuth from "../Hooks/useAuth";
export const RutaProtegida = () => {
    const { auth, loading } = useAuth();
    if (loading) return "Cargando....";
    return (
        <>
            {auth.id ? (
                <div
                    className="mx-auto p-5"
                    style={{ maxWidth: "60vw", width: "100vw" }}
                >
                    <Outlet />{" "}
                </div>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};

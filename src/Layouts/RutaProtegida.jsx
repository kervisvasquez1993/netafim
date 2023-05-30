import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../Components";
import useAuth from "../Hooks/useAuth";
export const RutaProtegida = () => {
    const { auth, loading } = useAuth();
    if (loading) return "Cargando....";
    return <>{auth.id ? <Outlet /> : <Navigate to="/" />}</>;
};

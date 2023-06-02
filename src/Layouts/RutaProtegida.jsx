import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../Components";
import useAuth from "../Hooks/useAuth";
import Loading from "../Wiews/Loading";
export const RutaProtegida = () => {
    const { auth, loading } = useAuth();
    if (loading) return <Loading />;
    return (
        <>
            {auth.id ? (
                <div
                    className="mx-auto p-5"
                    style={{ maxWidth: "100vw", width: "100vw" }}
                >
                    <Outlet />{" "}
                </div>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};

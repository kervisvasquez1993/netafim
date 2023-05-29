import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header, Sidebar } from "../Components";
import useAuth from "../Hooks/useAuth";
export const RutaProtegida = () => {
    const { auth, loading } = useAuth();
    console.log(auth);
    if (loading) return "Cargando....";
    return (
        <>
            {auth.id ? (
                <div className="">
                    <Header />
                    <div className="">
                        <Sidebar />
                        <main className="p-10 flex-1 ">
                            <Outlet />
                        </main>
                    </div>
                </div>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};

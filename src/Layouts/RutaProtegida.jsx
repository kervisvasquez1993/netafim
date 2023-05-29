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
                <div className="bg-gray-100">
                    <Header />
                    <div className="md:flex md:min-h-screen">
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

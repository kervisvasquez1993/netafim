
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
    return (
        <main className="">
            <div className="">
                <Outlet />
            </div>
        </main>
    );
};

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { AuthLayout, RutaProtegida } from "./Layouts/";
import { PasswordRecovery } from "./Pages/PasswordRecovery";
import { AuthProvider } from "./Context/AuthProvider";
import { Home } from "./Pages/Home";
import { ListCustomers, ShowCustomers } from "./Pages/Customers/index";
import {CustomersProvider} from "./Context/CustomersProvider";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CustomersProvider>
                    <Routes>
                        <Route path="/" element={<AuthLayout />}>
                            <Route index element={<Login />} />
                            <Route path="login" element={<Login />} />
                            <Route path="singup" element={<Register />} />
                            <Route
                                path="password-recovery"
                                element={<PasswordRecovery />}
                            />
                        </Route>
                        <Route path="/home" element={<RutaProtegida />}>
                            <Route index element={<Home />} />
                            <Route path="customers" element={<ListCustomers />} />
                            <Route path="customers/:id" element={<ShowCustomers />} />
                        </Route>
                    </Routes>
                </CustomersProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;

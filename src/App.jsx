import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { AuthLayout, RutaProtegida } from "./Layouts/";
import { PasswordRecovery } from "./Pages/PasswordRecovery";
import { AuthProvider } from "./Context/AuthProvider";
import { Home } from "./Pages/Home";
import { ListCustomers, ShowCustomers } from "./Pages/Customers/index";
import { CustomersProvider } from "./Context/CustomersProvider";
import { CardProvider } from "./Context/CardProvider";
import { CreateCustomers } from "./Pages/Customers/CreateCustomers";
import CreateBusinessCard from "./Pages/BusinessCard/CreateBusinessCard";
import CreateCard from "./Pages/BusinessCard/CreateCard";
import ListBusinessCard from "./Pages/BusinessCard/ListBusinessCard";
import { ShowBusinessCard } from "./Pages/BusinessCard/ShowBusinessCard";
import CreateCustoWithCard from "./Pages/BusinessCard/CreateCustoWithCard";
import { AlertProvider } from "./Context/AlertProvider";
import Me from "./Pages/Me";

const App = () => {
    return (
        <BrowserRouter>
            <AlertProvider>
                <AuthProvider>
                    <CustomersProvider>
                        <CardProvider>
                            <Routes>
                                <Route path="/" element={<AuthLayout />}>
                                    <Route index element={<Login />} />
                                    <Route path="login" element={<Login />} />
                                    <Route
                                        path="singup"
                                        element={<Register />}
                                    />
                                    {/* <Route
                                    path="password-recovery"
                                    element={<PasswordRecovery />}
                                /> */}
                                </Route>
                                <Route path="/home" element={<RutaProtegida />}>
                                    <Route index element={<Home />} />
                                    <Route
                                        path="customers"
                                        element={<ListCustomers />}
                                    />

                                    <Route path="me" element={<Me/>}/>
                                    <Route
                                        path="add-customers"
                                        element={<CreateCustomers />}
                                    />
                                    <Route
                                        path="add-card-business"
                                        element={<CreateBusinessCard />}
                                    />
                                    <Route
                                        path="customers/:id"
                                        element={<ShowCustomers />}
                                    />
                                    <Route
                                        path="customers-card-business/:id"
                                        element={<CreateBusinessCard />}
                                    />
                                    <Route
                                        path="card-business"
                                        element={<ListBusinessCard />}
                                    />
                                    <Route
                                        path="card-business/:id"
                                        element={<ShowBusinessCard />}
                                    />
                                    <Route
                                        path="card-business-customers/:id"
                                        element={<CreateCustoWithCard />}
                                    />
                                </Route>
                            </Routes>
                        </CardProvider>
                    </CustomersProvider>
                </AuthProvider>
            </AlertProvider>
        </BrowserRouter>
    );
};

export default App;

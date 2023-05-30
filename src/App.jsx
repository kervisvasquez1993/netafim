import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { AuthLayout, RutaProtegida } from "./Layouts/";
import { PasswordRecovery } from "./Pages/PasswordRecovery";
import { AuthProvider } from "./Context/AuthProvider";
import { Home } from "./Pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<AuthLayout />}>
                        <Route index element={<Login />} />
                        <Route path="login" element={<Login />} />
                        <Route path="singup" element={<Register />} />
                        <Route
                            path="password-recovery"
                            element={<PasswordRecovery />}
                        />
                        {/*  <Route path="registrar" element={<RegisterPage />} />
                    <Route
                        path="olvidar-password"
                        element={<OlvidarPassword />}
                    />
                    <Route
                        path="olvidar-password/:token"
                        element={<NuevaPassword />}
                    />
                    <Route path="confirmar/:id" element={<ConfirmarCuenta />} /> */}
                    </Route>
                    <Route path="/home" element={<RutaProtegida />}>
                       <Route index element={<Home/>} />
                    {/*  <Route path="crear-proyecto" element={} />
                    <Route path=":id" element={} />
                    <Route path="edit/:id" element={} /> */}
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;

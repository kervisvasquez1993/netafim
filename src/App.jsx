import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<LoginPage />} />
                    <Route path="registrar" element={<RegisterPage />} />
                    <Route
                        path="olvidar-password"
                        element={<OlvidarPassword />}
                    />
                    <Route
                        path="olvidar-password/:token"
                        element={<NuevaPassword />}
                    />
                    <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                </Route>
                <Route path="/proyectos" element={<RutaProtegida />}>
                    <Route index element={} />
                    <Route path="crear-proyecto" element={} />
                    <Route path=":id" element={} />
                    <Route path="edit/:id" element={} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

// import  LoginForm  from "./components/Inputs/inputIngresar";
// import {Button} from "./components/Botones/button"
// import { Nav } from './components/Nav/BarraNav';
import { CajaCambios } from "./components/Caja/cajaCambios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Inputs/inputIngresar";
import Registrar from "./components/Inputs/inputRegistrar";
import EmpleadoVista from "./components/empleado/empleadovista";
import "./App.css";
import { Nav } from "./components/Nav/BarraNav";
import Empresas from "./components/Empresas/Empresas";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/inputRegistrar/:name" element={<Registrar />} />
          <Route path="/cajaCambios" element={<CajaCambios />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/Empresas" element={<Empresas />} />
          <Route path="/Empleado/:name" element={<EmpleadoVista />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

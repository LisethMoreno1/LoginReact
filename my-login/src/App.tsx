// import  LoginForm  from "./components/Inputs/inputIngresar";
// import {Button} from "./components/Botones/button"
// import { Nav } from './components/Nav/BarraNav';
import  {CajaCambios} from "./components/Caja/cajaCambios"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginForm from "./components/Inputs/inputIngresar"
import Registrar from "./components/Inputs/inputRegistrar";


import "./App.css";



function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/inputIngresar" element={<LoginForm />} />
          <Route path="/inputRegistrar" element={<Registrar />} />
          <Route path="/cajaCambios" element={<CajaCambios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;



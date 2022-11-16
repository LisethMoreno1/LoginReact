import { useParams } from "react-router-dom";



export default function Empresas() {
   const { name } = useParams();
  return (
    <>
      <div>
        <header className="Navigation">
          <a href="/cajaCambios" className="navLi">
            Caja de Cambios
          </a>
          
        </header>
        <h1>Bienvenido {name}</h1>
        <hr />
        <p>Empresas Vinculadas</p>
      </div>
    </>
  );
}

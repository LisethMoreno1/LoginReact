import "../Inputs/inputregistrar.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { MdExitToApp } from "react-icons/md";

export const RegistrarFrom = () => {
  // EN ESTA CONDICION TOMA LOS DATOS QUE SE INCRESAAN EN LOS INPUT Y SE GUARDAN EN EL LOCAL STORAGE
  const [values, setValues] = useState<any>([]);
  const Select = (params: any) => {
    setValues([...values, { Permiso: params.target.value }]);
  };
  console.log(values);

  const handleOnSubmit = (params: any) => {
    const datas = JSON.parse(localStorage.getItem("user") || "[]");
    params.preventDefault();
    let data = [
      ...datas,
      {
        name: params.target.name.value,
        LastName: params.target.LastName.value,
        Rol: params.target.Rol.value,
        password: params.target.password.value,
        Permiso: [...values],
      },
    ];
    console.log(datas);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const { name } = useParams();
  return (
    <div>
      <header className="Navigation">
        <a href="/Empresas" className="navLi">
          Empresas
        </a>
        <br />
        <a href="/" className="navLi">
          <MdExitToApp />
        </a>
      </header>

      <form className="container" onSubmit={handleOnSubmit}>
        <h1>Hola {name}</h1>
        <hr />
        <h4>Crear Usuario</h4>
        <div className="Container">
          <input
            className="inputInfo"
            type="text"
            name="name"
            placeholder="Nombre"
            id="name"
          />

          <input
            className="inputInfo"
            type="text"
            placeholder="Apellido"
            name="LastName"
            id="LastName"
          />
          <input
            className="inputInfo "
            type="text"
            placeholder="Rol de Usuario"
            name="Rol"
            id="Rol"
          />

          <input
            className="inputInfo"
            type="password"
            name="password"
            placeholder="Contraseña"
            id="password"
          />
          <select onChange={Select}>
            <option>Empresa 1</option>
            <option>Empresa 2</option>
            <option>Empresa 3</option>
          </select>
          <button
            name="Crear"
            type="submit"
            onSubmit={RegistrarFrom}
            className="ButonRegistro"
          >
            Crear Usuario
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrarFrom;

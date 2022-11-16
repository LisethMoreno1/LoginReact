import "../empleado/empleado.css";
import { useParams } from "react-router-dom";
import Select from "react-select";

interface Data {
  name: string;
  LastName: string;
  password: string;
  Rol: string;
  Permiso: string[];
}

export default function EmpleadoVista() {
  const { name } = useParams();

  const datas = JSON.parse(localStorage.getItem("user") || "[]");
  localStorage.setItem("user", JSON.stringify(datas));
  const Resultado: Data = datas.find((params: Data) => params.name === name);
  
   console.log(Resultado)

  return (
    <>
      <div className="Empleado">
        <h1>Bienvenido {name}</h1>
        <hr />
        <p>Empresas Vinculadas</p>

        <Select
          // isMulti={true}
          // options={options}
          // onChange={handleChange}
          name="select"
          onChange={(params: any) => {
            console.log(params);
          }}
          options={Resultado.Permiso.map((params: any) => ({
            label: params.Permiso,
            value: params.Permiso,
          }))}
        />
      </div>
    </>
  );
}

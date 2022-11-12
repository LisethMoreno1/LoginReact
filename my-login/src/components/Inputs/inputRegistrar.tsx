import "../Inputs/inputregistrar.css";

import Select, { ActionMeta } from "react-select";

export const RegistrarFrom = () => {
  // EN ESTA CONDICION TOMA LOS DATOS QUE SE INCRESAAN EN LOS INPUT Y SE GUARDAN EN EL LOCAL STORAGE
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
        empresas: params.target.empresas.value,
      },
    ];
    console.log(datas);
    localStorage.setItem("user", JSON.stringify(data));
    /*   window.location.reload(); */
  };
  //  EN ESTA CONDICION SE SELECIONAN LOS EMPRESAS EN EL SELECT
  type Option = typeof options;
  const options: any = [
    { value: 1, label: "Empresa 1" },
    { value: 2, label: "Empresa 2" },
    { value: 3, label: "Empresa 3" },
  ];
  const handleChange = (
    option: readonly Option[],
    actionMeta: ActionMeta<Option>
  ) => {
    console.log("Option", option);
  };

  return (
    <div>
      <form className="container" onSubmit={handleOnSubmit}>
        <h1>Crear Usuario</h1>
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
          <Select
            className="empresasStyle"
            onChange={handleChange}
            options={options}
            placeholder="Elige las Empresa"
            name="empresas"
            isMulti
            isClearable
            classNamePrefix="select"
          />
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

import "../Inputs/inputingresar.css";
// import Swal from "sweetalert2";

export const LoginForm = () => {
  // PARAMETRO PARA COMPARAR LOS DATOS CON EL LOCAL_STORAGE
   const onSubmit = (params: any) => {
    const data = JSON.parse(localStorage.getItem("user") || "[]");
    let confir = false;
    let confirme = false;
    params.preventDefault();
    console.log(data);
    // window.location.reload();

    // Constante que guarda el usuario
    const name: string = params.target.name.value;
    console.log(name);
    // Constante que guarda el contraseña
    const password: string = params.target.password.value;
    console.log(password);

     const Rol: string = params.target.Rol.value;
     console.log(Rol);

    // Constante para compara datos
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === name && data[i].password === password && data[i].Rol === "Admin") {
        confir = true;
      }
      if (confir) {
        window.location.href = `/inputRegistrar/${name}`;

      }if (data[i].name === name && data[i].password === password && data[i].Rol === "Empleado"){
        confirme=true;
      } if (confirme) {
        window.location.href = `/Empleado/${name}`;
      } else {
        // alert("Hola")
      }
    }
};

  return (
    <form className="container" onSubmit={onSubmit}>
      <h1>Login</h1>

      <input
        className="inputInfo"
        name="name"
        id="name"
        placeholder="Usuario"
      />

      <input
        className="inputInfo"
        name="Rol"
        id="Rol"
        placeholder="Rol del Usuario"
      />

      <input
        className="inputInfo"
        type="password"
        name="password"
        id="password"
        placeholder="Contraseña"
      />

      <button type="submit" className="ButonIngreso">
        Ingresar
      </button>
    </form>
  );
};

export default LoginForm;

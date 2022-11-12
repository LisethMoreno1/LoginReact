// import "./CCambion.css";


export function CajaCambios(props:any) {



  return (
    <>
      <h1> Intercambio de Divisas</h1>
      <select name="Selecciona la Divisa" id="Divisas">
        <option value="COP">Peso Colombiano</option>
        <option value="CLP">Peso Chile</option>
        <option value="CAD">Dólar canadiense</option>
        <option value="EUR">Euro</option>
        <option value="KRW">Won surcoreano</option>
        <option value="BRL">Real Brasileño</option>
      </select>
      <button className="Sech">{props.name}</button>
      {/* <input type="text" disabled value=" " oncopy="return false;" /> */}
      <input type="text" disabled value=" " />
      <input type="text" disabled value=" "  />

      <button className="Sech">{props.convertir}</button>
    </>
  );
}


// PcgIbAqglKU7mhFIiQOhIEsa4Y6bVhQE
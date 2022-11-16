import "./CCambio.css";


export function CajaCambios() {
  return (
    <div className="Caja">
      <h1> Intercambio de Divisas</h1>

      <select name="Selecciona la Divisa" id="Divisas" className="divisa">
        <option value="COP">Peso Colombiano</option>
        <option value="CLP">Peso Chile</option>
        <option value="CAD">Dólar canadiense</option>
        <option value="EUR">Euro</option>
        <option value="KRW">Won surcoreano</option>
        <option value="BRL">Real Brasileño</option>
      </select>
      <p>VS</p>
      <select name="Selecciona la Divisa" id="Divisas" className="divisa">
        <option value="COP">Peso Colombiano</option>
        <option value="CLP">Peso Chile</option>
        <option value="CAD">Dólar canadiense</option>
        <option value="EUR">Euro</option>
        <option value="KRW">Won surcoreano</option>
        <option value="BRL">Real Brasileño</option>
      </select>

      <p>
        Elige la Cantidad:
        <input type="search" name="Buscar" placeholder="Elegir Cantidad" />
        <input type="submit" value="Convertir" />
      </p>
      <input type="text" disabled value=" " />
      <input type="text" disabled value=" " />
    </div>
  );
}


// PcgIbAqglKU7mhFIiQOhIEsa4Y6bVhQE
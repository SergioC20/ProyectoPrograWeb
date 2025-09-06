import React from "react";

function DetalleSubasta() {
  const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2018,
    precio: 8000,
    ofertas: [
      { usuario: "Juan", monto: 8200 },
      { usuario: "Ana", monto: 8500 },
      { usuario: "Luis", monto: 9000 }
    ]
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{carro.marca} {carro.modelo} ({carro.año})</h1>
      <p>Precio base: ${carro.precio}</p>
      <h3>Ofertas:</h3>
      <ul>
        {carro.ofertas.map((o, i) => (
          <li key={i}>{o.usuario} ofertó ${o.monto}</li>
        ))}
      </ul>
      <input type="number" placeholder="Ingresa tu oferta" />
      <button>Ofertar</button>
    </div>
  );
}

export default DetalleSubasta;

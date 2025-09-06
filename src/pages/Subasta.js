import React from "react";

function Subasta() {
  const subastas = [
    { id: 1, marca: "Toyota", modelo: "Corolla", año: 2018, precio: 8000, tiempo: "2h 30m" },
    { id: 2, marca: "Honda", modelo: "Civic", año: 2020, precio: 12000, tiempo: "5h 10m" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Subastas Activas</h1>
      {subastas.map((carro) => (
        <div key={carro.id} style={{ border: "1px solid gray", borderRadius: "10px", margin: "10px", padding: "10px" }}>
          <h2>{carro.marca} {carro.modelo} ({carro.año})</h2>
          <p>Precio base: ${carro.precio}</p>
          <p>Tiempo restante: {carro.tiempo}</p>
          <button>Ver detalles</button>
        </div>
      ))}
    </div>
  );
}

export default Subasta;

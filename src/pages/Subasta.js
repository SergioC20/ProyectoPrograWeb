import React from "react";
import "./Subasta.css";

function Subasta() {
  const carros = [
    {
      id: 1,
      marca: "Toyota",
      modelo: "Corolla",
      precio: 12000,
      tiempo: "2h 30m",
      imagen: "https://guatemala-carrocarros.s3.amazonaws.com/uploads/picture/url/58055/big_with_watermark_toyota-corolla-guatemala-guatemala-6839.jpg"
    },
    {
      id: 2,
      marca: "Honda",
      modelo: "Civic",
      precio: 14000,
      tiempo: "3h 15m",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2015_Honda_Civic_Si_Coupe_Orange.JPG/1280px-2015_Honda_Civic_Si_Coupe_Orange.JPG"
    },
    {
      id: 3,
      marca: "Nissan",
      modelo: "GTR",
      precio: 35000,
      tiempo: "1h 10m",
      imagen: "https://cdn.prod.website-files.com/5b4a3b3971d099f78f362505/6552d819f23f3d69c6657e83_683.webp"
    }
  ];

  return (
    <div className="subasta-container">
      {/* Barra roja superior */}
      <div className="barra-roja"></div>

      {/* Buscador y filtro */}
      <div className="subasta-barra">
        <input
          type="text"
          placeholder="Buscar carro ..."
          className="subasta-buscar"
        />
        <button className="subasta-filtrar">Filtrar por ...</button>
      </div>

      {/* Lista de subastas */}
      {carros.map((carro) => (
        <div key={carro.id} className="subasta-card">
          {/* Columna izquierda: cuadro */}
          <div className="subasta-cuadro">
            <button className="flecha izq">←</button>
            <img
              src={carro.imagen}
              alt={`${carro.marca} ${carro.modelo}`}
              className="subasta-imagen"
            />
            <button className="flecha der">→</button>

            <p className="precio">${carro.precio}</p>
            <p className="tiempo">Tiempo restante: {carro.tiempo}</p>
          </div>

          {/* Columna derecha: info */}
          <div className="subasta-info">
            <h2 className="marca">{carro.marca}</h2>
            <h4 className="modelo">{carro.modelo}</h4>
            <button className="btn-detalles">Ver Detalles Subasta</button>
          </div>
        </div>
      ))}

      {/* Barra roja inferior */}
      <div className="barra-roja"></div>
    </div>
  );
}

export default Subasta;

import React from "react";
import logo from "../assets/carbid-logo-white.png"; 
import banner from "../assets/banner-carbid2.png";
import "./Home.css"

function Home() {
  const destacados = [
    { id: 1, marca: "Ferrari", modelo: "488 Spider", año: 2021, precio: 250000 },
    { id: 2, marca: "Toyota", modelo: "Corolla", año: 2020, precio: 12000 },
    { id: 3, marca: "Tesla", modelo: "Model 3", año: 2022, precio: 35000 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <header
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${banner})`, // 👈 usamos tu banner
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "480px",
          position: "relative"
        }}
      >
        {/* Overlay oscuro opcional (para contraste) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }}
        ></div>

        {/* Contenido */}
        <div style={{ position: "relative" }}>
            <img
            src={logo}
            alt="CarBid Logo"
            style={{ width: "300px", marginTop: "-160px"}}
          />
            <p className="oleo-script-bold">
                Tu próximo auto, al mejor precio y en el mejor lugar.
            </p>
          <a href="/login" className="btn btn-danger btn-lg mt-3 shadow">
            Explorar Subastas
          </a>
        </div>
      </header>

      {/* Carros Destacados */}
      <div className="container my-5">
        <h2 className="mb-4 text-center">Última oportunidad!</h2>
        <div className="row">
          {destacados.map((carro) => (
            <div key={carro.id} className="col-md-4">
              <div className="card mb-4 shadow-lg border-0">
                <img
                  src={`https://via.placeholder.com/400x200?text=${carro.marca}+${carro.modelo}`}
                  className="card-img-top"
                  alt={`${carro.marca} ${carro.modelo}`}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {carro.marca} {carro.modelo} ({carro.año})
                  </h5>
                  <p className="card-text text-muted">
                    💰 Desde ${carro.precio.toLocaleString()}
                  </p>
                  <a href="/detalle" className="btn btn-outline-dark">
                    Ver Subasta
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Beneficios */}
      <div className="bg-dark text-white py-5">
        <div className="container text-center">
          <h3 className="mb-4">¿Por qué elegir CarBid?</h3>
          <div className="row">
            <div className="col-md-4">
              <h1>🔒</h1>
              <p className="lead">Subastas seguras y transparentes</p>
            </div>
            <div className="col-md-4">
              <h1>⚡</h1>
              <p className="lead">Pujas en tiempo real desde cualquier lugar</p>
            </div>
            <div className="col-md-4">
              <h1>🌎</h1>
              <p className="lead">Accesible en todo el mundo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-3">
        <p className="mb-0">
          © {new Date().getFullYear()} CarBid. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Home;

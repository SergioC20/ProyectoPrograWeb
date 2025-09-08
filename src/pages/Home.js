import React from "react";
import logo from "../assets/carbid-logo-white.png"; 
import "./Home.css";

function Home() {
  const destacados = [
    {
      id: 1,
      marca: "Toyota",
      modelo: "Corolla",
      precio: 12000,
      imagen: "https://guatemala-carrocarros.s3.amazonaws.com/uploads/picture/url/58055/big_with_watermark_toyota-corolla-guatemala-guatemala-6839.jpg"
    },
    {
      id: 2,
      marca: "Honda",
      modelo: "Civic",
      precio: 14000,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2015_Honda_Civic_Si_Coupe_Orange.JPG/1280px-2015_Honda_Civic_Si_Coupe_Orange.JPG"
    },
    {
      id: 3,
      marca: "Nissan",
      modelo: "GTR",
      precio: 35000,
      imagen: "https://cdn.prod.website-files.com/5b4a3b3971d099f78f362505/6552d819f23f3d69c6657e83_683.webp"
    }
  ];

  return (
    <div>
      {/* Barra roja superior */}
      <div className="barra-roja d-flex justify-content-end align-items-center px-4">
        <a href="/login" className="btn-login">
          Login
        </a>
      </div>

      {/* Hero Section */}
      <header className="hero-section text-center">
        <div className="overlay"></div>
        <div className="hero-content">
          <img src={logo} alt="CarBid Logo" className="hero-logo" />
          <p className="hero-text oleo-script-bold">
            Tu próximo auto, al mejor precio y en el mejor lugar.
          </p>
          <a href="/subastas" className="btn-explorar">
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
              <div className="card-carro shadow-lg">
                <img 
                  src={carro.imagen} 
                  alt={`${carro.marca} ${carro.modelo}`} 
                  className="card-carro-img"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {carro.marca} {carro.modelo}
                  </h5>
                  <p className="card-text precio">
                    ${carro.precio.toLocaleString()}
                  </p>
                  <a href="/detalle" className="btn-ver">
                    Ver Subasta
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Barra roja inferior */}
      <div className="barra-roja">
        <p className="footer-text">
          © {new Date().getFullYear()} CarBid. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

export default Home;

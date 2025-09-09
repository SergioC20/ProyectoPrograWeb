import React, { useEffect, useMemo, useState } from "react";
import "./DetalleSubasta.css"; // <-- importa el CSS
// Asegúrate de tener Bootstrap cargado en tu app (p.ej. en main.jsx o index.js):
// import "bootstrap/dist/css/bootstrap.min.css";

function formatTimeLeft(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const mins = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  if (days > 0) {
    return `${days}d ${String(hours).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  }
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(
    2,
    "0"
  )}:${String(secs).padStart(2, "0")}`;
}

export default function DetalleSubasta({
  // Puedes pasar un deadline como prop (Date, string, o timestamp).
  // Por defecto, 45 minutos desde que se carga la página.
  deadline = Date.now() + 45 * 60 * 1000,
  brand = "Marca: Toyota",
  model = "Modelo: Corolla",
}) {
  const target = useMemo(() => new Date(deadline).getTime(), [deadline]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeLeftMs = Math.max(0, target - now);
  const finished = timeLeftMs <= 0;

  return (
    <div className="auction-page">
      {/* Franjas superiores/ inferiores */}
      <div className="band band-top" />
      <main className="container-xxl px-4 px-lg-5 py-4 py-lg-5">
        <div className="row g-4 align-items-start">
          {/* Lado izquierdo */}
          <section className="col-12 col-lg-7">
            <div className="left-panel">
              <div className="image-area d-flex align-items-center justify-content-center">
                <div className="image-placeholder d-flex align-items-center justify-content-center">
                  <img src="https://guatemala-carrocarros.s3.amazonaws.com/uploads/picture/url/58055/big_with_watermark_toyota-corolla-guatemala-guatemala-6839.jpg" alt="Carro" className="car-image" />                  
                </div>
              </div>

              <div className="text-center mt-4">
                <h2 className="price-title mb-2">Precio: $12,000</h2>
                <h5 className="mb-1 fw-semibold">Tiempo restante</h5>
                <div
                  className={`countdown ${finished ? "countdown-finished" : ""}`}
                  aria-live="polite"
                  aria-label="Tiempo restante"
                >
                  {finished ? "Finalizado" : formatTimeLeft(timeLeftMs)}
                </div>
              </div>
            </div>
          </section>

          {/* Lado derecho */}
          <aside className="col-12 col-lg-5">
            <div className="right-panel">
              <h1 className="brand-title">{brand}</h1>
              <h3 className="model-title">{model}</h3>

              <div className="mt-4 characteristics">
                <p className="small-title mb-2">Características:</p>
                <ul className="mb-3">
                  <li>Vendedor</li>
                  <li>Motor</li>
                  <li>Kilometraje</li>
                  <li>Transmisión …</li>
                </ul>

                <p className="small-title mb-2">Ofertas Recientes</p>
                <div className="table-responsive">
                  <table className="table table-sm align-middle offers-table">
                    <thead>
                      <tr>
                        <th scope="col">Postor</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Tiempo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Persona 1</td>
                        <td>Q1,000</td>
                        <td>Hace 8 min</td>
                      </tr>
                      <tr>
                        <td>Persona 2</td>
                        <td>Q2,000</td>
                        <td>Hace 18 min</td>
                      </tr>
                      <tr>
                        <td>Persona 3</td>
                        <td>Q3,000</td>
                        <td>Hace 28 min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Fila inferior: cajas + botón */}
        <div className="row g-3 mt-4 mt-lg-5 align-items-stretch">
          <div className="col-12 col-md-4 col-lg-3">
            <div className="info-box text-center">Precio base: Q1000</div>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <div className="info-box text-center">Puja más alta: Q3000</div>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <div className="info-box info-box-wide text-center">Q4,000</div>
          </div>
          <div className="col-12 col-lg-3 d-grid">
            <button type="button" className="btn btn-bid btn-lg">
              OFERTAR AHORA
            </button>
          </div>
        </div>
      </main>
      <div className="band band-bottom" />
    </div>
  );
}

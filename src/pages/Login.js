import React from "react";
import logo from "../assets/carbid-logo-dark.png"; 
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      {/* Logo */}
      <img src={logo} alt="CarBid Logo" className="login-logo" />

      {/* Caja roja (Bootstrap card con override de CSS) */}
      <div className="card login-box shadow">
        <h2 className="text-center mb-4">Login</h2>

        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input type="text" className="form-control" placeholder="Ingresa tu usuario" />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" placeholder="Ingresa tu contraseña" />
        </div>

        <button className="btn btn-light w-100 mb-3">Ingresar</button>

        <p className="text-center">
          <a href="#" className="text-decoration-none text-white">Crear una cuenta</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

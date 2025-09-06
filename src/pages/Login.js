import React from "react";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">🚗 CarBid - Login</h2>
        
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="Ingresa tu correo" />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" placeholder="Ingresa tu contraseña" />
        </div>

        <button className="btn btn-primary w-100 mb-3">Iniciar Sesión</button>

        <p className="text-center">
          ¿No tienes cuenta?{" "}
          <a href="#" className="text-decoration-none">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

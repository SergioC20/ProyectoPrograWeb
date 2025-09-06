import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Subasta from "./pages/Subasta";
import DetalleSubasta from "./pages/DetalleSubasta";

function App() {
 return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#f4f4f4" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/subastas">Subastas</Link> |{" "}
        <Link to="/detalle">Detalle Subasta</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/subastas" element={<Subasta />} />
        <Route path="/detalle" element={<DetalleSubasta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

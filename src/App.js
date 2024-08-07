// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './views/NavBar/index.js';
import Home from './views/home.js';
import Login from './views/Login/index.js';
import Register from './views/registroUsuarios/index.js';
import ViewCars from './views/verAutos/index.js';
import RegisterCar from './views/registroAuto/index.js';
import Footer from './views/Footer/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const [datosUsuario, setDatosUsuario] = useState(null);

  const handleLogin = (data) => {
    setIsAuthenticated(true);
    setDatosUsuario(data);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setDatosUsuario(null);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavbarComponent isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            {isAuthenticated && (
              <>
                <Route path="/view-cars" element={<ViewCars datosUsuario={datosUsuario}/>} />
                <Route path="/register-car" element={<RegisterCar datosUsuario={datosUsuario}/>} />
              </>
            )}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

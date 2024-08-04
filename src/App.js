// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './views/NavBar/index.js';
import Home from './views/home.js';
import Login from './views/Login/index.js';
import Register from './views/registroUsuarios/index.js';
import ViewCars from './views/verAutos/index.js';
import RegisterCar from './views/registroAuto/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <NavbarComponent isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        {isAuthenticated && (
          <>
            <Route path="/view-cars" element={<ViewCars />} />
            <Route path="/register-car" element={<RegisterCar />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;

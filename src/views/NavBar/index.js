// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import imagen from '../../assets/imagenes/logoHeader.png'; // Asegúrate de que la ruta es correcta
import './navbar.css'; // Asegúrate de importar el archivo CSS

const NavbarComponent = ({ isAuthenticated, onLogout }) => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <img
          src={imagen} // Usa la variable imagen directamente
          alt="Logo"
          style={{ height: '40px' }} // Ajusta el tamaño según tus necesidades
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav">
          {!isAuthenticated ? (
            <>
              <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/view-cars">Ver Autos</Nav.Link>
              <Nav.Link as={NavLink} to="/register-car">Registrar Auto</Nav.Link>
              <Nav.Link onClick={onLogout}>Salir</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

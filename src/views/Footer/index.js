// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imagen from '../../assets/imagenes/logoHeader.png'; // Asegúrate de que la ruta es correcta
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons for contact details

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#D9C49C' }} className="mt-5">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3} className="text-center">
            <div className="single-box mt-3">
              <img
                src={imagen} // Replace with the actual path to your logo
                alt="Logo de MecHelp"
                height="100"
              />
            </div>
          </Col>

          {/* Nosotros Section (hidden on small screens) */}
          <Col xs={12} md={6} lg={3} className="d-none d-md-block" style={{ color: '#2C2F40', fontFamily: 'Arial, sans-serif' }}>
            <h5 className="mt-4" style={{ fontWeight: 'bold', fontSize: '20px' }}>NOSOTROS</h5>
            <p className="text-justify mt-3" style={{ color: '#2C2F40' }}>
              En MecHelp nos especializamos en proporcionar servicios de mecánica confiables y eficientes para satisfacer todas tus necesidades automotrices.
            </p>
          </Col>

          {/* Servicios Section (hidden on small screens) */}
          <Col xs={12} md={6} lg={3} className="d-none d-md-block" style={{ color: '#2C2F40', fontFamily: 'Arial, sans-serif' }}>
            <h5 className="mt-4" style={{ fontWeight: 'bold', fontSize: '20px' }}>SERVICIOS</h5>
            <ul className="list-unstyled mt-3">
              <li>Cambio de aceite</li>
              <li>Alineación y balanceo</li>
              <li>ABC de motor</li>
            </ul>
          </Col>

          {/* Contactos Section */}
          <Col xs={12} md={6} lg={3} style={{ color: '#2C2F40', fontFamily: 'Arial, sans-serif' }}>
            <h5 className="mt-4" style={{ fontWeight: 'bold', fontSize: '20px' }}>CONTACTOS</h5>
            <div className="card-area">
              <p><FaHome className="me-3" /> Quito, La Pradera</p>
              <p><FaEnvelope className="me-3" /> lubricadora@gmail.com</p>
              <p><FaPhone className="me-3" /> +593 987679038</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: '#2C2F40' }}>
        © 2024 SeguriSoft | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;

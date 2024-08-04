import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa'; 

const Home = () => {
  return (
    <div>
      {/* Jumbotron Section */}
      <div className="jumbotron-custom text-center mb-0" style={{ backgroundColor: '#D9C49C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="jumbotron-content" style={{ maxWidth: '800px', width: '100%', padding: '20px' }}>
          <h1 className="display-4 animated-title" style={{ animation: 'slideInDown 1s' }}>MecHelp</h1>
          <p className="lead text-center animated-text" style={{ animation: 'fadeIn 2s' }}>
            En MecHelp nos especializamos en proporcionar servicios de mecánica confiables y eficientes para satisfacer todas tus necesidades automotrices. Con años de experiencia en el campo, nuestro equipo de expertos está comprometido a ofrecerte un servicio de calidad que garantice el rendimiento óptimo de tu vehículo.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4 animated-title" style={{ animation: 'slideInDown 1s' }}>Nuestros Servicios</h2>
        <Row>
          <Col md={4} className="text-center">
            <img
              src="https://www.talleresautomotrices.com/wp-content/uploads/2021/04/La-importancia-del-cambio-de-aceite.jpg"
              className="rounded-circle img-fluid animated-image"
              alt="Cambio de Aceite"
              style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: 'auto', animation: 'fadeIn 2s' }}
            />
            <h3 className="mt-3 animated-subtitle" style={{ animation: 'slideInUp 1s' }}>Cambio de aceite</h3>
            <p className="animated-text" style={{ animation: 'fadeIn 2s' }}>
              Mantén tu motor en óptimas condiciones con nuestro servicio de cambio de aceite, incluyendo filtro y aceite de calidad.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <img
              src="https://static.patiotuerca.com/ghost/uploads/sites/4/2018/01/23161747/Alineacion-y-balanceo.jpg"
              className="rounded-circle img-fluid animated-image"
              alt="Alineación y Balanceo"
              style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: 'auto', animation: 'fadeIn 2s' }}
            />
            <h3 className="mt-3 animated-subtitle" style={{ animation: 'slideInUp 1s' }}>Alineación y Balanceo</h3>
            <p className="animated-text" style={{ animation: 'fadeIn 2s' }}>
              Mejora la estabilidad y durabilidad de tus neumáticos con nuestra alineación y balanceo precisos.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <img
              src="https://i1.wp.com/revistaroadone.com/wp-content/uploads/2018/09/consejos_motul_1.jpg?fit=540%2C360&ssl=1"
              className="rounded-circle img-fluid animated-image"
              alt="ABC de motor"
              style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', margin: 'auto', animation: 'fadeIn 2s' }}
            />
            <h3 className="mt-3 animated-subtitle" style={{ animation: 'slideInUp 1s' }}>ABC de motor</h3>
            <p className="animated-text" style={{ animation: 'fadeIn 2s' }}>
              Afinación, balanceo y calibración para maximizar el rendimiento y eficiencia de tu motor.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Video Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4 animated-title" style={{ animation: 'slideInDown 1s' }}>Video</h2>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <div className="embed-responsive embed-responsive-16by9" style={{ position: 'relative', display: 'block', width: '100%', padding: '0', overflow: 'hidden', paddingTop: '56.25%' }}>
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/EDSTDHU6oFI"
                allowFullScreen
                style={{ position: 'absolute', top: '0', bottom: '0', left: '0', width: '100%', height: '100%', border: '0' }}
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
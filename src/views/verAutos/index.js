// src/components/ViewCars.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import API from "../../services/api-service"


const ViewCars = ({ datosUsuario }) => {
  const [autos, setAutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (datosUsuario) {
      API.verAutos(datosUsuario.usuario_id).then((result) => {
        setAutos(result);
      }).catch((error) => {
        console.error('Error al obtener los autos:', error);
      });
    }
  }, [datosUsuario]);

  const confirmDeletion = (vehiculoId) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        API.eliminarAuto(vehiculoId).then((result) => {
          Swal.fire({
            icon: 'success',
            title: 'Auto eliminado',
            text: 'El auto ha sido eliminado exitosamente.',
          });
        })
      }
    });
  };

  const redirectToServicio = (placa) => {
    navigate(`/ordenarServicio/${placa}/`);
  };

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mx-auto text-center font-weight-bold">Mis Autos</h1>
        <Button
          className="btn-lg"
          onClick={() => navigate('/register-car')}
          style={{ backgroundColor: '#A62D43', borderColor: '#A62D43', color: '#fff' }}
        >
          Registrar vehículo
        </Button>
      </div>
      {autos.map(auto => (
        <Row className="mb-3" key={auto.id} onClick={() => redirectToServicio(auto.placa)}>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <Card className="shadow">
              <Card.Body>
                <h5 className="card-title text-center" style={{ fontSize: '22px' }}>Especificaciones</h5>
                <Row>
                  <Col xs={8}>
                    <Row>
                      <Col xs={6}>
                        <p className="text-center mt-3">Placa:</p>
                        <p className="placa bg-light p-3 mt-3 text-center" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                          {auto.placa}
                        </p>
                      </Col>
                      <Col xs={6} className="mt-3">
                        <p>Año: {auto.anio}</p>
                        <p>Marca: {auto.marca}</p>
                        <p>Modelo: {auto.model}</p>
                      </Col>
                    </Row>
                    <Button className="btn btn-danger mt-4" onClick={(e) => { e.stopPropagation(); confirmDeletion(auto.id); }}>
                      Eliminar
                    </Button>
                  </Col>
                  <Col xs={4} className="d-flex align-items-center">
                    <Card className="bg-light" style={{ backgroundColor: '#FFFACD', width: '100%' }}>
                      <Card.Body className="text-center">
                        <h5 className="card-title" style={{ fontSize: '22px' }}>En progreso</h5>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default ViewCars;

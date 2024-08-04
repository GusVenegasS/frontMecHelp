import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const RegistrarVehiculo = () => {
  const [formData, setFormData] = useState({
    año: '',
    marca: '',
    modelo: '',
    placa: '',
    color: ''
  });
  const [mensajeError, setMensajeError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[A-Z]{3}-\d{3,4}$/;

    if (!regex.test(formData.placa)) {
      setMensajeError('Placa Incorrecta, ingreselo de la forma XXX-123/XXX-1234');
    } else {
      setMensajeError('');

      // Aquí puedes hacer la solicitud POST con axios
      try {
        const response = await axios.post('/url/registrarAuto', formData);
        console.log(response.data);
        // Manejar respuesta
      } catch (error) {
        console.error(error);
        // Manejar error
      }
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Registrar Vehículo</h1>
      <div className="container mt-4 d-flex justify-content-center">
        <Form onSubmit={handleSubmit} className="w-50" id="regiter">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="año">Año</Form.Label>
            <Form.Control
              type="text"
              id="año"
              name="año"
              placeholder="Ingrese el año"
              value={formData.año}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="marca">Marca</Form.Label>
            <Form.Control
              type="text"
              id="marca"
              name="marca"
              placeholder="Ingrese la marca"
              value={formData.marca}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="modelo">Modelo</Form.Label>
            <Form.Control
              type="text"
              id="modelo"
              name="modelo"
              placeholder="Ingrese el modelo"
              value={formData.modelo}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="placa">Placa</Form.Label>
            <Form.Control
              type="text"
              id="placa"
              name="placa"
              placeholder="Ingrese la placa"
              value={formData.placa}
              onChange={handleChange}
              required
            />
            <p id="mensajeError" style={{ color: 'red' }}>{mensajeError}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="color">Color</Form.Label>
            <Form.Control
              type="text"
              id="color"
              name="color"
              placeholder="Ingrese el color"
              value={formData.color}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="text-center mt-4">
            <Button type="submit" size="lg" style={{ backgroundColor: '#A62D43', borderColor: '#A62D43', color: '#fff' }}>
              Registrar
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default RegistrarVehiculo;

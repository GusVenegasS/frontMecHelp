// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import API from "../../services/api-service"
import Auth from "../../services/auth-service"

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    let body = {
      username: usuario,
      password: password
    }

    API.getTokenAPIs("admin", "secret").then((result) => {
      if (result.access_token === undefined) {
        console.log("hubo algún error")
      } else {
        console.log(result)
        Auth.saveJWT(result.access_token)
        if (Auth.getJWT() != null) {
          API.autenticacion(body).then((result) => {
            if (result.token != null) {
              onLogin(result.token)
              API.readUsuarioToken(result.token).then((result) => {
                navigate('/view-cars');
              })
            }
          })
        }
      }
    }
    )
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '50px' }}>
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 rounded shadow">
        <Card.Body>
          <h2 className="text-center mb-4">Ingreso al sistema</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <InputGroup.Text
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer' }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;

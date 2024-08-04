import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({






  
  usuario: yup.string().required('Usuario es requerido'),
  contrasena: yup.string().required('Contraseña es requerida'),
  nombre: yup.string().required('Nombre es requerido'),
  apellido: yup.string().required('Apellido es requerido'),
  telefono: yup.string().required('Teléfono es requerido'),
  cedula: yup.string().required('Cédula es requerida'),
  direccion: yup.string().required('Dirección es requerida'),
  correo: yup.string().email('Correo no válido').required('Correo es requerido'),
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="welcome">
        <h1>¡Bienvenido!</h1>
        <p>Gracias por visitar nuestra página.</p>
      </div>
      <div className="register-form">
        <h1>Registro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Usuario:</label>
            <input type="text" placeholder="Ingrese su usuario" {...register('usuario')} />
            <p>{errors.usuario?.message}</p>
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" placeholder="Ingrese su contraseña" {...register('contrasena')} />
            <p>{errors.contrasena?.message}</p>
          </div>
          <div>
            <label>Nombre:</label>
            <input type="text" placeholder="Ingrese su nombre" {...register('nombre')} />
            <p>{errors.nombre?.message}</p>
          </div>
          <div>
            <label>Apellido:</label>
            <input type="text" placeholder="Ingrese su apellido" {...register('apellido')} />
            <p>{errors.apellido?.message}</p>
          </div>
          <div>
            <label>Teléfono:</label>
            <input type="text" placeholder="Ingrese su teléfono" {...register('telefono')} />
            <p>{errors.telefono?.message}</p>
          </div>
          <div>
            <label>Cédula:</label>
            <input type="text" placeholder="Ingrese su cédula" {...register('cedula')} />
            <p>{errors.cedula?.message}</p>
          </div>
          <div>
            <label>Dirección:</label>
            <input type="text" placeholder="Ingrese su dirección" {...register('direccion')} />
            <p>{errors.direccion?.message}</p>
          </div>
          <div>
            <label>Correo:</label>
            <input type="text" placeholder="Ingrese su correo" {...register('correo')} />
            <p>{errors.correo?.message}</p>
          </div>
          <button type="submit">Registrarse</button>
          <button type="button">Cancelar</button>
        </form>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .welcome {
          width: 50%;
          text: center;
        }

        .register-form {
          width: 50%;
          text-align: left;
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .register-form h2 {
          margin-bottom: 20px;
        }

        .register-form form div {
          margin-bottom: 15px;
        }

        .register-form label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .register-form input {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .register-form input:focus {
          border-color: #007bff;
          outline: none;
        }

        .register-form p {
          color: red;
          font-size: 12px;
          margin-top: 5px;
        }

        .register-form button {
          padding: 10px 15px;
          margin-right: 10px;
          border: none;
          border-radius: 5px;
          background-color: #A62D43;
          color: white;
          cursor: pointer;
        }

        .register-form button[type="button"] {
          background-color: #2F3764;
        }

        .register-form button:hover {
          background-color: #8e2536;
        }

        .register-form button[type="button"]:hover {
          background-color: #2C2F40;
        }
      `}</style>
    </div>
  );
};

export default Register;

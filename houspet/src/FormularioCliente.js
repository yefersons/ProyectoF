import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar el hook
import './FormularioGeneral.css';

const FormularioGeneral = () => {
  const navigate = useNavigate(); // Definir el hook dentro del componente

  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });
  
      if (response.ok) {
        alert('¡Gracias! Tus datos han sido enviados correctamente.');
  
        setDatos({
          nombre: '',
          correo: '',
          telefono: '',
          direccion: '',
          ciudad: '',
          mensaje: '',
        });
  
        navigate('/Adopcion');
      } else {
        alert('Error al enviar los datos.');
      }
    } catch (error) {
      console.error('Error en el envío:', error);
      alert('Error al enviar el formulario.');
    }
  };
  

  return (
    <div className="formulario-container">
      <h2>Formulario de Registro para tu adopción</h2>
      <form onSubmit={handleSubmit} className="formulario-card">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={datos.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={datos.correo}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={datos.telefono}
          onChange={handleChange}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={datos.direccion}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ciudad"
          placeholder="Ciudad"
          value={datos.ciudad}
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          placeholder="Escribe tu motivo para adoptar"
          value={datos.mensaje}
          onChange={handleChange}
          rows="4"
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioGeneral;
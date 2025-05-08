// src/pages/Singles.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '/public/assets/Estilos/Singles.css'; 

function Singles() {
  const regulaciones = [
    { id: 'd', nombre: 'Regulación D', ruta: '/regulacion-d', pokemon: 'charmander.png' },
    { id: 'e', nombre: 'Regulación E', ruta: '/regulacion-e', pokemon: 'gengar.png' },
    { id: 'f', nombre: 'Regulación F', ruta: '/regulacion-f', pokemon: 'pikachu.png' },
    { id: 'g', nombre: 'Regulación G', ruta: '/regulacion-g', pokemon: 'piplo.png' },
    { id: 'h', nombre: 'Regulación H', ruta: '/regulacion-h', pokemon: 'trekko.png' },
    { id: 'i', nombre: 'Regulación I', ruta: '/regulacion-i', pokemon: 'snorlax.png' }, 
  ];

  return (
    <div className="container-singles">
      <h2>Selecciona una Regulación</h2>
      <div className="lista-regulaciones"> {/* Cambiamos el nombre de la clase para estilos específicos */}
        {regulaciones.map((regulacion) => (
          <div key={regulacion.id} className="regulacion-card">
            <img
              src={`/public/assets/img/FondosRegulaciones/${regulacion.pokemon}`}
              alt={regulacion.nombre}
              className="regulacion-pokemon-imagen"
            />
            <h3 className="regulacion-nombre">{regulacion.nombre}</h3>
            <Link to={regulacion.ruta}>
              <button className="regulacion-ver-boton">Ver más</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Singles;
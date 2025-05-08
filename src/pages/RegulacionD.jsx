import React from 'react';
import CardCarta from '../components/CardCarta';
import '/public/assets/Estilos/Singles.css';
import '/public/assets/Estilos/CardCartaLayout.css';

function RegulacionD() {
  const cartasRegulacionD = [
    { id: 1, nombre: 'Charizard', edicion: "Celebrations", imagen: '/public/assets/img/RegulacionD/charizard_celebrations.jpg', precio: 109, cantidad: 1 },
    { id: 2, nombre: 'Pikachu', edicion: "Celebrations", imagen: '/public/assets/img/RegulacionD/pikachu_celebrations.jpg', precio: 2, cantidad: 1 },
    { id: 3, nombre: 'Professor´s Research', edicion: "Celebrations", imagen: '/public/assets/img/RegulacionD/professor´s-celebrations.jpg', precio: 2, cantidad: 1 },
    { id: 4, nombre: 'Professor´s Research AA', edicion: "Celebrations", imagen: '/public/assets/img/Otras Ediciones/professor´s-aa-celebrations.jpg', precio: 3, cantidad: 1 },
    { id: 5, nombre: 'Umbreon', edicion: "Celebrations", imagen: '/public/assets/img/Otras Ediciones/umbreon_celebrations.jpg', precio: 50, cantidad: 1 },
  ];

  return (
    <div className="regulacion-d-page container-singles">
      <h1>Cartas Singles - Regulación D</h1>
      <div className="lista-cartas">
        {cartasRegulacionD.map(carta => (
          <CardCarta key={carta.id} {...carta} stock={carta.cantidad} />
        ))}
      </div>
    </div>
  );
}

export default RegulacionD;
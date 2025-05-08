import React from 'react';
import CardCarta from '../components/CardCarta';
import '/public/assets/Estilos/Singles.css';
import '/public/assets/Estilos/CardCartaLayout.css';

function RegulacionG() {
  const cartasRegulacionG = [
    { id: 1, cantidad: 3, nombre: 'Charizard ex', edicion: "Obsidian Flames", imagen: '/public/assets/img/RegulacionG/Charizard-ex.png', precio: 5000 },
    { id: 2, cantidad: 2, nombre: 'Pidgeot ex', edicion: "Obsidian Flames", imagen: '/public/assets/img/RegulacionG/pidgeot-ex.png', precio: 5000 },
    { id: 3, cantidad: 2, nombre: 'Pidgeot ex', edicion: "Paldean Fates", imagen: '/public/assets/img/RegulacionG/pidgeot-ex-shiny-ultra-rare.png', precio: 5000 },
    { id: 4, cantidad: 1, nombre: 'Miraidon ex - español', edicion: "Scarlet & Violet", imagen: '/public/assets/img/RegulacionG/miraidon-ex.png', precio: 3000 },
    { id: 5, cantidad: 2, nombre: "Magnezone ex - portugues", edicion: "Scarlet & Violet", imagen: '/public/assets/img/RegulacionG/magnezone-ex.png', precio: 2000 },
  ];

  return (
    <div className="regulacion-g-page container-singles">
      <h1>Cartas Singles - Regulación G</h1>
      <div className="lista-cartas">
        {cartasRegulacionG.map(carta => (
          <CardCarta key={carta.id} {...carta} stock={carta.cantidad} />
        ))}
      </div>
    </div>
  );
}

export default RegulacionG;
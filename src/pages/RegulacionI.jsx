import React from 'react';
import CardCarta from '../components/CardCarta';
import '/public/assets/Estilos/Singles.css';
import '/public/assets/Estilos/CardCartaLayout.css';

function RegulacionI() {
  const cartasRegulacionI = [
    { id: 1, cantidad: 1, nombre: 'Iono´s Kilowattrel', edicion: "Journey Together", imagen: '/public/assets/img/RegulacionI/ionos-kilowattrel-arte-rare.png', precio: 15000 },
    { id: 2, cantidad: 2, nombre: 'Iono´s Bellibolt', edicion: "Journey Together", imagen: '/public/assets/img/RegulacionI/ionos-bellibolt-ex-ultra-rare.png', precio: 12000 },
    { id: 3, cantidad: 1, nombre: 'Tapu Koko ex', edicion: "Journey Together", imagen: '/public/assets/img/RegulacionI/tapu-koko-ex.png', precio: 2000 },
    { id: 4, cantidad: 2, nombre: 'Dudunsparce ex', edicion: "Journey Together", imagen: '/public/assets/img/RegulacionI/dudunsparce-ex.png', precio: 3000 },
    { id: 5, cantidad: 1, nombre: 'Hop´s Zacian ex', edicion: "Journey Together", imagen: '/public/assets/img/RegulacionI/hops-zacian-ex-ultra-raro.png', precio: 14000 },
    { id: 6, cantidad: 2, nombre: 'N´s Zoroark ex', edicion: "Journey Together", imagen: '/public/assets/img/RegulacionI/ns-zoroark-ex.png', precio: 14000 },
    { id: 7, cantidad: 2, nombre: "Lillie's Clefairy ex", edicion: "Journey Together", imagen: '/public/assets/img/RegulacionI/lillies-clefairy-ex.png', precio: 15000 },
  ];

  return (
    <div className="regulacion-d-page container-singles">
      <h1>Cartas Singles - Regulación I</h1>
      <div className="lista-cartas">
        {cartasRegulacionI.map(carta => (
          <CardCarta key={carta.id} {...carta} stock={carta.cantidad} />
        ))}
      </div>
    </div>
  );
}

export default RegulacionI;
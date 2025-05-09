import React from 'react';
import CardCarta from '../components/CardCarta';
import '/public/assets/Estilos/Singles.css';
import '/public/assets/Estilos/CardCartaLayout.css';

function RegulacionH() {
  const cartasRegulacionH = [
    { id: 1, cantidad: 4, nombre: 'Iron Thorns ex', edicion: "Twilight Masquerade", imagen: '/public/assets/img/RegulacionH/iron-thorns-ex.png', precio: 5000 },
    { id: 2, cantidad: 2, nombre: "Galvantula ex", edicion: "Stellar Crown", imagen: '/public/assets/img/RegulacionH/galvantula-ex.png', precio: 2000 },
    { id: 3, cantidad: 1, nombre: 'Milotic ex - español', edicion: "Surging Sparks", imagen: '/public/assets/img/RegulacionH/milotic-ex.png', precio: 7000 },
    { id: 4, cantidad: 1, nombre: 'Milotic ex - español', edicion: "Surging Sparks", imagen: '/public/assets/img/RegulacionH/milotic-ex-ultra-rare.png', precio: 14000 },
    { id: 5, cantidad: 1, nombre: 'Flygon ex - español', edicion: "Surging Sparks", imagen: '/public/assets/img/RegulacionH/flygon-ex.png', precio: 3000 },
    { id: 6, cantidad: 2, nombre: 'Archaludon ex', edicion: "Surging Sparks", imagen: '/public/assets/img/RegulacionH/archaludon-ex.png', precio: 12000 },
    { id: 7, cantidad: 2, nombre: 'Latias ex', edicion: "Surging Sparks", imagen: '/public/assets/img/RegulacionH/latias-ex.png', precio: 12000 },
    { id: 8, cantidad: 4, nombre: 'Wellspring Mask Ogerpon ex', edicion: "Twilight Masquerade", imagen: '/public/assets/img/RegulacionH/wellspring-mask-ogerpon-ex.png', precio: 5000 },
    { id: 9, cantidad: 2, nombre: 'Cornerstone Mask Ogerpon ex', edicion: "Twilight Masquerade", imagen: '/public/assets/img/RegulacionH/cornerstone-mask-ogerpon-ex-ultra-rare.png', precio: 10000 },
    { id: 10, cantidad: 2, nombre: 'Teal Mask Ogerpon ex', edicion: "Twilight Masquerade", imagen: '/public/assets/img/RegulacionH/teal-mask-ogerpon-ex-ultra-rare.png', precio: 10000 },
    { id: 11, cantidad: 2, nombre: 'Pikachu ex', edicion: "Surging Sparks", imagen: '/public/assets/img/RegulacionH/pikachu-ex.png', precio: 11000 },
    { id: 12, cantidad: 1, nombre: 'Pikachu ex', edicion: "Surging Sparks", imagen: '/public/assets/img/RegulacionH/pikachu-ex-ultra-rare.png', precio: 30000 },
    { id: 13, cantidad: 1, nombre: 'Hydreigon ex - español', edicion: "Surging Sparks", imagen: '/public/assets/img/RegulacionH/hydreigon-ex.png', precio: 4000 },
    { id: 14, cantidad: 2, nombre: 'Wellspring Mask Ogerpon ex', edicion: "Twilight Masquerade", imagen: '/public/assets/img/RegulacionH/wellspring-mask-ogerpon-ex-ultra-rare.png', precio: 13000 },
    { id: 15, cantidad: 3, nombre: 'Fezandipiti ex', edicion: "Shrouded Fable", imagen: '/public/assets/img/RegulacionH/fezandipiti-ex.png', precio: 17000 },
    { id: 16, cantidad: 2, nombre: 'Fezandipiti ex - español', edicion: "Shrouded Fable", imagen: '/public/assets/img/RegulacionH/fezandipiti-ex.png', precio: 17000 },
    { id: 17, cantidad: 2, nombre: 'Blissey ex', edicion: "Twilight Masquerade", imagen: '/public/assets/img/RegulacionH/blissey-ex.png', precio: 5000 },
    { id: 18, cantidad: 2, nombre: 'Sparkling Crystal', edicion: "Stellar Crown", imagen: '/public/assets/img/RegulacionH/sparkling-crystal.png', precio: 7000 },
    { id: 19, cantidad: 2, nombre: 'Prime Catcher', edicion: "Prismatic Evolutions", imagen: '/public/assets/img/RegulacionH/prime-catcher.png', precio: 7000 },
  ];

  return (
    <div className="regulacion-d-page container-singles">
      <h1>Cartas Singles - Regulación H</h1>
      <div className="lista-cartas">
        {cartasRegulacionH.map(carta => (
          <CardCarta key={carta.id} {...carta} stock={carta.cantidad} />
        ))}
      </div>
    </div>
  );
}

export default RegulacionH;
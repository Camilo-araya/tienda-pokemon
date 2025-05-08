
import React from 'React';
import '/public/assets/Estilos/SelladoCard.css';

function ProductoSelladoCard({ imagen, nombre, precio }) {
  return (
    <div className="producto-sellado-card">
      <img src={imagen} alt={nombre} className="sellado-imagen" />
      <h3 className="sellado-nombre">{nombre}</h3>
      <p className="sellado-precio">Precio: {precio}</p>
      <button className='sellado-button'>Agregar al carrito</button>
    </div>
  );
}

export default ProductoSelladoCard;
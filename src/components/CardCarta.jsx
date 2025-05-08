import React, { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import '/public/assets/Estilos/CardCarta.css';
import '/public/assets/Estilos/NotificacionCarrito.css'; // Importa el CSS para la notificación

function CardCarta({ id, nombre, edicion, imagen, precio, stock }) {
  const { carrito, agregarAlCarrito } = useContext(CarritoContext);
  const [notificacionVisible, setNotificacionVisible] = useState(false);

  const handleAgregarAlCarrito = () => {
    const item = { id, nombre, precio, imagen };
    agregarAlCarrito(item, stock);
    setNotificacionVisible(true);
    console.log('notificacionVisible después de agregar:', notificacionVisible);
  };

  useEffect(() => {
    console.log('useEffect - notificacionVisible:', notificacionVisible);
    if (notificacionVisible) {
      const timer = setTimeout(() => {
        setNotificacionVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [notificacionVisible]);

  const puedeAgregarMas = carrito.some(item => item.id === id && item.cantidad < stock);
  const estaEnCarrito = carrito.some(item => item.id === id && item.cantidad >= 1);

  return (
    <div className="card-carta">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <h2>{edicion}</h2>
      {precio && <p>Precio: ${precio}</p>}
      {stock !== undefined && <p>Stock: {stock}</p>}
      {!estaEnCarrito || puedeAgregarMas ? (
        <button onClick={handleAgregarAlCarrito} disabled={stock === 0 && !estaEnCarrito}>
          {stock === 0 && !estaEnCarrito ? 'Sin Stock' : 'Agregar al carrito'}
        </button>
      ) : (
        <p>¡En el carrito!</p>
      )}

      {/* Renderiza la notificación */}
      {notificacionVisible && (
        <div className="notificacion-carrito activa">
          ¡Añadido al carrito!
        </div>
      )}
    </div>
  );
}

export default CardCarta;
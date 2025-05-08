// src/pages/Carrito.jsx
import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import '/public/assets/Estilos/Carrito.css';

function Carrito() {
  const { carrito, eliminarDelCarrito, limpiarCarrito, aumentarCantidad, disminuirCantidad } = useContext(CarritoContext);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>Tu carrito está vacío</h2>
        <Link to="/singles" className="volver-a-comprar">Volver a las cartas</Link>
      </div>
    );
  }

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const handleFinalizarCompra = () => {
    console.log("Usuario quiere finalizar la compra:", carrito, calcularTotal());
    alert("La funcionalidad de pago real se implementa con una pasarela de pagos en el backend.");
  };

  return (
    <div className="pagina-carrito">
      <h2>Carrito de Compras</h2>
      <div className="lista-items-carrito">
        {carrito.map(item => (
          <div key={item.id} className="item-carrito">
            <img src={item.imagen} alt={item.nombre} className="imagen-item-carrito" />
            <div className="detalles-item-carrito">
              <h4 className="nombre-item-carrito">{item.nombre}</h4>
              <p className="precio-item-carrito">Precio: ${item.precio}</p>
              <div className="cantidad-control">
                <button onClick={() => disminuirCantidad(item.id)}>-</button>
                <span className="cantidad-item-carrito">Cantidad: {item.cantidad}</span>
                <button onClick={() => aumentarCantidad(item.id)}>+</button>
              </div>
            </div>
            <button className="boton-eliminar-item" onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="contenedor-total">
        <strong>Total: ${calcularTotal().toFixed(2)}</strong>
        <div className="botones-carrito">
          <button className="boton-vaciar-carrito" onClick={limpiarCarrito}>Vaciar Carrito</button>
          <button className="boton-finalizar-compra" onClick={handleFinalizarCompra}>Finalizar Compra</button>
        </div>
        <Link to="/singles" className="seguir-comprando">Seguir comprando</Link>
      </div>
    </div>
  );
}

export default Carrito;
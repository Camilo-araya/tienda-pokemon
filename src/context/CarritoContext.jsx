import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, stockDisponible) => {
    const itemExistente = carrito.find(i => i.id === item.id);

    if (itemExistente) {
      if (itemExistente.cantidad < stockDisponible) {
        setCarrito(
          carrito.map(i =>
            i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
          )
        );
      } else {
        alert(`¡Lo sentimos! No puedes agregar más copias de "${item.nombre}". Stock máximo alcanzado (${stockDisponible} disponibles).`);
      }
    } else {
      if (stockDisponible > 0) {
        setCarrito([...carrito, { ...item, cantidad: 1, stockEnLista: stockDisponible }]);
      } else {
        alert(`¡Lo sentimos! "${item.nombre}" no está disponible en este momento.`);
      }
    }
  };

  const eliminarDelCarrito = (itemId) => {
    const nuevoCarrito = carrito.filter(item => item.id !== itemId);
    setCarrito(nuevoCarrito);
  };

  const aumentarCantidad = (itemId) => {
    const itemEnCarrito = carrito.find(item => item.id === itemId);
    const stockDisponible = itemEnCarrito ? (itemEnCarrito.stockEnLista !== undefined ? itemEnCarrito.stockEnLista : 999) : 999;

    if (itemEnCarrito && itemEnCarrito.cantidad < stockDisponible) {
      setCarrito(
        carrito.map(item =>
          item.id === itemId ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else if (itemEnCarrito) {
      alert(`¡Lo sentimos! No puedes agregar más copias de "${itemEnCarrito.nombre}". Stock máximo alcanzado.`);
    }
  };

  const disminuirCantidad = (itemId) => {
    setCarrito(
      carrito.map(item =>
        item.id === itemId && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    );
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  const isInCart = (itemId) => {
    return carrito.some(item => item.id === itemId);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((total, item) => total + (item.cantidad || 0), 0);
  };

  return (
    <CarritoContext.Provider value={{
      carrito,
      agregarAlCarrito,
      eliminarDelCarrito,
      limpiarCarrito,
      isInCart,
      cantidadEnCarrito,
      aumentarCantidad,
      disminuirCantidad,
    }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
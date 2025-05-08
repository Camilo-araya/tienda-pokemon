// src/components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import '/public/assets/Estilos/Nabvar.css';
import { CarritoContext } from '../context/CarritoContext';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartasOpen, setCartasOpen] = useState(false);
  const { cantidadEnCarrito } = useContext(CarritoContext);
  const navigate = useNavigate(); // Inicializa useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCartas = (event) => {
    // Evita que el evento se propague al toggleMenu si el clic es dentro del dropdown
    event.stopPropagation();
    setCartasOpen(!cartasOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setCartasOpen(false); // También cerramos el dropdown al navegar
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>Totoli Store</Link>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Inicio</Link>
        <div className="dropdown" onClick={toggleCartas}> {/* Agregamos onClick al div dropdown */}
          <button className="dropbtn">Cartas Singles</button>
          <div className={`dropdown-content ${cartasOpen ? 'active' : ''}`}>
            <Link to="/regulacion-d" onClick={closeMenu}>Regulación D</Link>
            <Link to="/regulacion-e" onClick={closeMenu}>Regulación E</Link>
            <Link to="/regulacion-f" onClick={closeMenu}>Regulación F</Link>
            <Link to="/regulacion-g" onClick={closeMenu}>Regulación G</Link>
            <Link to="/regulacion-h" onClick={closeMenu}>Regulación H</Link>
            <Link to="/regulacion-i" onClick={closeMenu}>Regulación I</Link>
          </div>
        </div>
        <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
        <Link to="/carrito" className="navbar-cart" onClick={closeMenu}>
          Carrito ({cantidadEnCarrito()})
        </Link>
      </div>
      <div className={`navbar-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
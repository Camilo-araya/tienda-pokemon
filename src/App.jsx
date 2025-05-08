// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Este componente muestra las regulaciones
import RegulacionD from './pages/RegulacionD';
import RegulacionE from './pages/RegulacionE';
import RegulacionF from './pages/RegulacionF';
import RegulacionG from './pages/RegulacionG';
import RegulacionH from './pages/RegulacionH';
import RegulacionI from './pages/RegulacionI';
import Carrito from './pages/Carrito';
import { CarritoContext, CarritoProvider } from './context/CarritoContext';

function App() {
  return (
    <CarritoProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* La página principal también muestra las regulaciones */}
            <Route path="/singles" element={<Home />} /> {/* Esta ruta ahora también muestra las regulaciones */}
            <Route path="/regulacion-d" element={<RegulacionD />} />
            <Route path="/regulacion-e" element={<RegulacionE />} />
            <Route path="/regulacion-f" element={<RegulacionF />} />
            <Route path="/regulacion-g" element={<RegulacionG />} />
            <Route path="/regulacion-h" element={<RegulacionH />} />
            <Route path="/regulacion-i" element={<RegulacionI />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </div>
      </Router>
    </CarritoProvider>
  );
}

export default App;
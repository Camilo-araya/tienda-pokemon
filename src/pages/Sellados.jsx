import React from 'react';
import SelladosCard from '../components/SelladosCard';
import '/public/assets/Estilos/SelladoCard.css'; 

function Sellados() {
  const etb = [
    {
      id: 1,
      nombre: "Elite Trainer Box Pokemon Go – Ingles",
      precio: "$69.990",
      edicion: "Pokemon Go",
      imagen: "/public/assets/img/Etb/pokemon-go-ingles.jpg",
    },
    {
      id: 2,
      nombre: "Elite Trainer Box Temporal Forces - Ingles",
      precio: "$54.990",
      edicion: "Temporal Forces",
      imagen: "/public/assets/img/Etb/temporal-forces-ingles.jpg",
    },
    {
      id: 3,
      nombre: "Elite trainer Box Journey Together – Inglés",
      precio: "$59.990",
      edicion: "Journey Together",
      imagen: "/public/assets/img/Etb/journey-together-ingles.jpg", 
    },
    {
      id: 4,
      nombre: "Elite Trainer Box Shrouded Fable - Ingles",
      precio: "$50.000",
      edicion: "Shrouded Fable",
      imagen: "/public/assets/img/Etb/shrouded-fable-ingles.jpg", 
    },
    {
      id: 5,
      nombre: "Elite Trainer Box Surging Spark - Ingles",
      precio: "$50.000",
      edicion: "Surging Spark",
      imagen: "/public/assets/img/Etb/surging-sparks-ingles.jpg", 
    },

  ];

  return (
    <div className="container-singles">
      <h2>ETB Disponibles</h2>
      <div className="lista-cartas">
        {etb.map((etb) => (
          <SelladosCard
            key={etb.id}
            nombre={etb.nombre}
            edicion={etb.edicion}
            imagen={etb.imagen}
            precio={etb.precio}
          />
        ))}
      </div>
    </div>
  );
}

export default Sellados;
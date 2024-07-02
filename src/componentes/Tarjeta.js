const listadoPlataformas = ["Twitter", "Facebook", "Youtube"];

import React from "react";

// Componente funcional Item
function Item({ plataforma, seleccionarFavorita }) {
  return (
    <li key={plataforma}>
      <button onClick={() => seleccionarFavorita(plataforma)}>
        {plataforma}
      </button>
    </li>
  );
}

// Componente funcional Tarjeta
export default function Tarjeta({ seleccionarFavorita }) {
  return (
    <ul>
      {listadoPlataformas.map((plataforma) => (
        <Item
          key={plataforma}
          plataforma={plataforma}
          seleccionarFavorita={seleccionarFavorita}
        />
      ))}
    </ul>
  );
}

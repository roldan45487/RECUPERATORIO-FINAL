const listadoPlataformas = ["Twitter", "Facebook", "Youtube"];

// CONSIGNAS EN TARJETA:
// 1- Importar Item
// 2- Utilizar el listadoPlataformas para renderizar la cantidad de Items acorde al array 🚩
// 3- Cada item debe tener como propiedades su key, pasar el metodo para elegir como favorita heradado por su padre y presentar el nombre de la plataforma

// El componente Tarjeta es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método heredado de App y se lo pasa a cada Item.
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

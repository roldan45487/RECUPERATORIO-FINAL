import { useState } from "react";
import Tarjeta from "./Tarjeta";
import "./index.css";

function App() {
  const [temaOscuro, setTemaOscuro] = useState(false);
  const [favorita, setFavorita] = useState("");

  const handleTema = () => {
    setTemaOscuro(!temaOscuro);
  };

  const handleFavorita = (plataforma) => {
    setFavorita(plataforma);
  };

  return (
    <div id="App" className={temaOscuro ? "dark" : ""}>
      <h1>¡Bienvenidos!</h1>
      <h2>Contanos, ¿cuál es tu plataforma favorita?</h2>
      {favorita !== "" ? (
        <h4
          className={
            favorita === "Twitter"
              ? "tw"
              : favorita === "Facebook"
              ? "fb"
              : "yt"
          }
        >
          {" "}
          {favorita}
        </h4>
      ) : (
        ""
      )}

      {/* Implementación de Tarjeta */}
      <Tarjeta selectFavoritePlatform={handleFavorita} />

      <button onClick={handleTema}>Cambiar tema</button>
    </div>
  );
}

export default App;

import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"; /* Despues del import va el nombre que se prefiera para referirse al objeto, imagen */

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"
        />
      </div>
    </div>
  );
}

export default App;

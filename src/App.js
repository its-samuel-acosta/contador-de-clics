import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"; /* Despues del import va el nombre que se prefiera para referirse al objeto, imagen */
import Boton from "./componentes/Boton"; /* IMPORTACION DEL COMPONENTE BOTON */
import Contador from "./componentes/Contador"; /* IMPORTACION DEL COMPONENTE CONTADOR */

function App() {

  // FUNCIONES DENTRO DE UN COMPONENTE, EN ESTE CASO EL COMPONENTE PRINCIPAL DE LA APLICACION APP
  const manejarClic = () => {
    console.log("Botón clickeado");
  };

  const reiniciarContador = () => {
    console.log("Contador reiniciado");
  };

  return (
    <div className="App">

      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"
        />
      </div>

      <div className="contenedor-principal">

        <Contador 
          numClics="0"
        />

        <Boton 
        
        texto = "Clic"
        esBotonDeClic = {true}
        manejarClic = {manejarClic}
        
        />

        <Boton 
        texto = "Reiniciar"
        esBotonDeClic = {false}
        manejarClic = {reiniciarContador}

        />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"; /* Despues del import va el nombre que se prefiera para referirse al objeto, imagen */
import Boton from "./componentes/Boton"; /* IMPORTACION DEL COMPONENTE BOTON */
import Contador from "./componentes/Contador"; /* IMPORTACION DEL COMPONENTE CONTADOR */
import {useState} from 'react';
// USO DEL HOOK, useState: PERMITE AGREGAR ESTADO A UN COMPONENTE FUNCIONAL
function App() {

  // USO DEL HOOK. SE CREA UN ARREGLO QUE TENDRA DENTRO DE LOS [] LO SIGUIENTE:
  // PRIMER ARGUMENTO, VALOR O ESTADO. 
  // SEGUNDO PARAMETRO, FUNCION QUE ACTUALIZARA EL ESTADO O VALOR
  const[numClics, setNumClics] = useState(0); // ENTRE PARENTESIS SE COLOCA EL ESTADO INICIAL, EL VALOR INICIAL QUE TENDRA NUESTRO ESTADO

  // FUNCIONES DENTRO DE UN COMPONENTE, EN ESTE CASO EL COMPONENTE PRINCIPAL DE LA APLICACION APP
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
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
          numClics={numClics}
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

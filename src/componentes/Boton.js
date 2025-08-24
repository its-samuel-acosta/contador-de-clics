import React from 'react'; // AL NO ESTAR MAS CLARO QUIERE DECIR QUE NO SE ESTA USANDO ESTA LINEA
import '../hojas-estilos/Boton.css';
// USUALMENTE SE TRABAJA CON LOS PROPS UTILIZANDO LA SINTAXIS DE DESESTRUCTURACION

function Boton({texto, esBotonDeClic, manejarClic}) {
    return (
        <button className = { esBotonDeClic ? "boton-clic" : "boton-reiniciar" } onClick={manejarClic}> 
            {texto}
        </button>
    );
}

// ESTE COMPONENTE RECIBE UN TEXTO QUE SERA EL VALUE DEL BOTON, UN BOOLEANO PARA DEVOLVER EL NOMBRE DE LA CLASE PARA ESTILIZAR EL BOTON
// Y UNA FUNCION PARA MANEJAR EL EVENTO DE CLIC

export default Boton;
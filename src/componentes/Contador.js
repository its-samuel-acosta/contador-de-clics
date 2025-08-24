import React from 'react';
import '../hojas-estilos/Contador.css';
function Contador({ numClics }) {
    return (
        <div className="contador">
            {numClics}
        </div>
    );
}
// CUALQUIERA DE LAS DOS SINTAXIS SE USAN PARA LOS PROPS, ES DECIR, PARA QUE LOS COMPONENTES FUNCIONALES RECIBAN VALORES 
// Y HACERLOS DINAMICOS

/* function Contador(props){
    return(
        <div className="contador">
            {props.numClics}
        </div>
    );
}*/ 


export default Contador;

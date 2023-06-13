/**
 * Ejemplo de Hooks
 * useState()
 * useContext()
 */

import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            <Componente2/>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es : {state.sesion}
            </h2>

        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: "1234567",
        sesion: 1
    }

    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSesionData(
            {
                token: "leon",
                sesion: sesionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sesionData}>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesión</button>

        </miContexto.Provider>
    )
}




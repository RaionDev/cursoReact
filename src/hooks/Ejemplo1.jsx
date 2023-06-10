import React, { useState } from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        nombre : "Martin",
        email : "martin@email.com"
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado
     */
    function incremetarContador(){
        setContador(contador+1);
    }

    /** 
     * Función para actualizar persona
    */
    function actualizarPersona(){
        setPersona(
            {
                nombre: "Pepe",
                email: "pepe@pagina.com"
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la Persona</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            {/* Bloque de botones para actualizar estados */}
            <button onClick={incremetarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;

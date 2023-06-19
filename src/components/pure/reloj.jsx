import React, { useEffect, useState } from 'react';


const Reloj = () => {

    const estadoInicial = {
        fecha : new Date(),
        edad : 0,
        nombre : "Martín",
        apellidos : "San José"
    }

    const [estado, setEstado] = useState(estadoInicial);

    const tick = () =>{ 
        let nuevaEdad = estado.edad + 1;
        setEstado({
            ...estado, 
            edad : nuevaEdad, 
            fecha : new Date(),
        }            
        )
        }

    useEffect(() => {
        
        const interval = setInterval(()=>
            tick(),1000)
        return () => {
            clearInterval(interval)
        };
    }, [estado]);

    return (
        <div>
            <h2>
                Hora Actual:
                {estado.fecha.toLocaleTimeString()}
            </h2>
            <h3>{estado.nombre} {estado.apellidos}</h3>
            <h1>Edad: {estado.edad}</h1>
        </div>
    );
}

export default Reloj;

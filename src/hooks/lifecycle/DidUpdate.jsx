/**
 * Ejemplo de uso de metodo DIDUPDATE
 * y uso de componente funcional
 */


import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log("comportamiento cuando el componente recibe props o cmabio de su estado")
    }

    render() {
        return (
            <div>
                <h1>DIDUPDATE</h1>
            </div>
        );
    }
}


export const DidUpdateHook = () => {
    useEffect(() => {
        console.log("comportamiento cuando el componente recibe props o cmabio de su estado")
    },);
    return (
        <div>
            <h1>DIDUPDATE</h1>

        </div>
    );
}


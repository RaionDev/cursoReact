/**
 * Ejemplo de uso de ciclo de vida en
 * componente clase y el hook de c
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount() {
        console.log("comportamiento antes que se renderice")
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes que se renderice")
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}



/**
 * Ejemplo de componente tipo clase
 * con metodos de ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {
  constructor(props){
    super(props)
    console.log("Cuando se instacia el componente")
  }

  componentDidMount(){
    console.log("DID MOUNT: montaje del componente, antes de renderizarlo")

  }
  shouldComponentUpdate(nextProps,nextState){
    /**
     * Controla si se debe o no actualizar
     */

  }

  componentDidUpdate(nextProps,nextState){
    console.log("DID UPDATE: Depués de actualizarse")

  }
  
  componentWillUnmount(){
    console.log("WILL UNMOUNT: Justo antes de desaparecer")

  }
  
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;

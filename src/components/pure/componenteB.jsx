import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ComponenteB=({ contact })=> {
  return (
    <div>
        <h2>
            Nombre: { contact.nombre }
        </h2>
        <h3>
            Apellido: {contact.apellido }
        </h3>
        <h4>
            Email: {contact.email }
        </h4>
        <h5>
            Conectado: {contact.conectado ? 'Contacto En Línea':'Contacto No Disponible' }
        </h5>
        
    </div>
  )
}

ComponenteB.propTypes = {
    contact:PropTypes.instanceOf(Contact)

}

export default ComponenteB

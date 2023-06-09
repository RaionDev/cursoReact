import React from 'react';
import { Contact } from '../../models/contact.class';
import ComponenteB from '../pure/componenteB';

const ComponenteA = () => {

    const nuevoContacto = new Contact('David', 'Paredes', "ldparedes@example.com", false );

    return (
        <div>
            <div>
                <h1>
                    Contacto
                </h1>
            </div>
            <ComponenteB contact={nuevoContacto} />
        </div>
    );
};


export default ComponenteA;

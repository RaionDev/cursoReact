import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState("Martin");

    function showMessage (text){
        alert(`Message receive: ${text}`)
    }

    function updateName (newName){
        setName(newName)
    }

    return (
        <div>
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    );
}

export default Father;

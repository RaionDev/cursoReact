import React from 'react';
import Child from '../pure/child';

const Father = () => {

    function showMessage (text){
        alert(`Message receive: ${text}`)
    }

    return (
        <div>
            <Child name= "Martin" send={showMessage}/>
        </div>
    );
}

export default Father;

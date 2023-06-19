import React, { useState } from 'react';

// definir estilos en constantes:

const loggedStyle = {
    color: "blue"
}

const unloggedStyle = {
    color: "tomato",
    fontWeight: "bold"
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);



    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged 
            ? <p>Hola, {props.name}</p>
            : <p>Please Login</p>
            }
            <button onClick={()=>{
                setLogged(!logged)
            }}>
                { logged ? "Logout" : "Login" }
            </button>
        </div>
    );
}

export default GreetingStyled;

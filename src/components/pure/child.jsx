import React, {useRef} from 'react';

const Child = ({ name,send }) => {
    const messageRef = useRef("")

    function pressButton() {
        const text = messageRef.current.value
        alert(`Text in Input ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }


    return (
        <div>
            <p onMouseOver={() => console.log("On Mouse Over")}>Child Component</p>
            <button onClick={() => console.log('boton 1')}>
                Boton 1
            </button>
            <button onClick={(pressButton)}>
                Boton 2
            </button>
            <button onClick={() => pressButtonParams("Hello")}>
                Boton 3
            </button>
            <input placeholder='Insert a text'
                onFocus={() => console.log("Input focus")}
                onChange={(e)=> console.log("Input change",e.target.value)}
                ref = {messageRef}

            />

            <button onClick={()=>send("Hello father")}>
                Send Message
            </button>
        </div>
    );
}

export default Child;

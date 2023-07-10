import React, {useRef} from 'react';

const Child = ({ name,send,update }) => {
    const messageRef = useRef("")
    const nameRef = useRef("")

    function pressButton() {
        const text = messageRef.current.value
        alert(`Text in Input ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{background: "cyan", padding:"30px"}}>
            <p onMouseOver={() => console.log("On Mouse Over")}>Hello, {name}</p>
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

            <button onClick={()=>send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop:"20px"}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New name'/>
                    <button type='submit'>
                        Update Name
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Child;

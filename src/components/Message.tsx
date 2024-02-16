import { useState } from "react";

export default function Message(){
    const [display, setDisplay] = useState(false);
    
    const handleClick = () =>{
        setDisplay(!display)
    }

    return(
        <div>
            <button onClick={handleClick}>Click for a message</button>
            {display? <h1>I Love You</h1>: <h1>Do You Love Me?</h1>}
        </div>
    );
}
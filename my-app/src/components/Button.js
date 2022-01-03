import './Button.css';
import { useState } from 'react';

function Button(props) {
    const [color] = useState(props.color !== undefined ? props.color : "Red");

    return(
        <button 
            style={{backgroundColor: color, color: "white"}} 
            onClick={() => props.click !== undefined ? props.click() : console.log("click")}
        >
            {color + " Button"}
        </button>
    )
}

export default Button
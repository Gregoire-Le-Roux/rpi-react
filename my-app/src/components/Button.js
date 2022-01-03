import './Button.css';
import { useState } from 'react';

function Button(props) {
    const [color] = useState(props.color !== undefined ? props.color : "Red");

    return(
        <button 
            style={{backgroundColor: color, color: "white"}} 
            onClick={() => props.clickHandler !== undefined ? props.clickHandler() : console.log("click")}
        >
            {color + " Button"}{props.nbClick !== undefined ? " : " + props.nbClick : null}
        </button>
    )
}

export default Button
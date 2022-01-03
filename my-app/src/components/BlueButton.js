import './BlueButton.css';
import Button from './Button';
import { useState } from 'react';

function BlueButton() {
    const [nbClick, setNbClick] = useState(1);
    const [color] = useState("Blue");

    const click = () => {
        setNbClick(nbClick + 1);
        console.log("Nombre de clicks sur le bouton " + color + " : " + nbClick);
    }

    return(
        <Button color={color} click={click}></Button>
    )
}

export default BlueButton
import './BlueButton.css';
import Button from './Button';
import { useState } from 'react';

function BlueButton() {
    const [nbClick, setNbClick] = useState(0);
    const [color] = useState("Blue");

    const clickHandler = () => {
        setNbClick(nbClick + 1);
        console.log("Nombre de clicks sur le bouton " + color + " : " + Number(nbClick + 1));
    }

    return(
        <Button color={color} nbClick={nbClick} clickHandler={clickHandler}></Button>
    )
}

export default BlueButton
import { useState } from 'react'

export function BlueButton() {
    const [nbClick, setNbClick] = useState(1);

    const click = () => {
        setNbClick(nbClick + 1);
        console.log("Nombre de clicks sur le bouton bleu : " + nbClick);
    }

    return(
        <button 
            style={{backgroundColor: "blue", color: "white"}} 
            onClick={() => click()}
        >
            Blue Button
        </button>
    )
}

export default BlueButton
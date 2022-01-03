import { useState } from 'react';

function ShowBook(props) {
    console.log(props);
    const [title, setTitle] = useState(props.book.title !== undefined ? props.book.title : "Aucun titre")
    const [description, setDescription] = useState(props.book.description !== undefined ? props.book.description : "Aucune description")

    const clickTitleHandler = () => {
        setTitle("Updated Title !");
    }

    const clickDescriptionHandler = () => {
        setDescription("Updated Description !");
    }

    return(
        props.book ?
            <div>
                <div>
                    <h2>{"Livre n°" + props.bookNumber}</h2>
                    <p>{"Titre : " + title} <button onClick={clickTitleHandler}>Add Title</button></p>
                    <p>{"Description : " + description} <button onClick={clickDescriptionHandler}>Add Description</button></p>
                </div>
            </div>
        : 
            <div>
                <h2>Aucune donnée disponible.</h2>
            </div>
    );
}

export default ShowBook
import { useState } from 'react';

function ShowBook(props) {
    console.log(props);
    const [book, setBook] = useState({
        title: props.book.title !== undefined ? props.book.title : "Aucun titre",
        description: props.book.description !== undefined ? props.book.description : "Aucune description"
    })
    // const [title, setTitle] = useState(props.book.title !== undefined ? props.book.title : "Aucun titre")
    // const [description, setDescription] = useState(props.book.description !== undefined ? props.book.description : "Aucune description")

    const clickHandler = (e) => {
        let name = e.target.name
        setBook(book => ({
            ...book,
            [name]: "Updated " + name +" !",
        }));
    }

    return(
        props.book ?
            <div>
                <div>
                    <h2>{"Livre n°" + props.bookNumber}</h2>
                    <p>{"Titre : " + book.title} <button name="title" onClick={clickHandler}>Add Title</button></p>
                    <p>{"Description : " + book.description} <button name="description" onClick={clickHandler}>Add Description</button></p>
                </div>
            </div>
        : 
            <div>
                <h2>Aucune donnée disponible.</h2>
            </div>
    );
}

export default ShowBook
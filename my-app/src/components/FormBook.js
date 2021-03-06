import { useState } from 'react';
import './FormBook.css'

export default function FormBook(props) {
    const [book, setBook] = useState({
        title: "",
        description: "",
    })

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setBook(book => ({
            ...book,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newBook = {
            title: book.title,
            description: book.description,
        };
        let newData = [...props.data,newBook];
        props.setData(newData);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Titre:
                        <input type="text" name="title" value={book.title} onChange={handleChange}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <input type="text" name="description" value={book.description} onChange={handleChange}></input>
                    </label>
                </div>
                
                <input type="submit" value="Ajouter"></input>
            </form>
        </div>
    )
}
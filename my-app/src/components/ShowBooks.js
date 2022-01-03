
function ShowBooks(props) {
    console.log(props);

    return(
        props.books ?
            <div>
                {props.books.map((book, index) => 
                    <div key={index}>
                        <h2>{"Livre n°" + Number(index+1)}</h2>
                        <p>{book.title !== undefined ? "Titre : " +  book.title : "Aucun titre"}</p>
                        <p>{book.description !== undefined ? "Description : " +  book.description : "Aucune description"}</p>
                    </div>
                )}
            </div>
        : 
            <div>
                <h2>Aucune donnée disponible.</h2>
            </div>
    );
}

export default ShowBooks
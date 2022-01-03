
function ShowData(props) {
    console.log(props)

    return(
        props.data ?
            <div>
                {props.data.map((data, index) => 
                    <div key={index}>
                        <h2>{"Livre n°" + Number(index+1)}</h2>
                        <p>{"Titre : " + data.title}</p>
                        <p>{"Description : " + data.description}</p>
                    </div>
                )}
            </div>
        : 
            <div>
                <h2>Aucune donnée disponible.</h2>
            </div>
    )
}

export default ShowData


export const ItemListConteiner = (props) =>{

    return(
        <div className="container">
        <h1>{props.greeting}</h1>
        <h2>{props.data.name}</h2>
        </div>
        )
}
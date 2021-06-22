import { CardComponent } from "../../CardComponent/CardComponent"

export const ItemListConteiner = (props) =>{
    const producto = [
        {nombre: "Tarjeta 1",
         descripcion:"Descripcion de tarjeta 1"
        
    },
        {nombre: "Tarjeta 2",
         descripcion:"Descripcion de tarjeta 2"
        
    },
        {nombre: "Tarjeta 3",
         descripcion:"Descripcion de tarjeta 3"
        
    }
    ]
    return(
        <div className="container">
        <h1>{props.greeting}</h1>
        <h2>{props.data.name}</h2>
        <CardComponent data={producto[0]}/>
        <CardComponent data={producto[1]}/>
        <CardComponent data={producto[2]}/>
        </div>
        )
}
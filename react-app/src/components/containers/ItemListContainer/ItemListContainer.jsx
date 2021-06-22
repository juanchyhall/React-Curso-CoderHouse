import { CardComponent } from "../../CardComponent/CardComponent"

export const ItemListConteiner = ( {greeting}) =>{
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
        <div className="text-right" >
        <h1>{greeting}</h1>
        <div className="container">
        <CardComponent data={producto[0]}/>
        <CardComponent data={producto[1]}/>
        <CardComponent data={producto[2]}/>
            </div>
        </div>
        )
}
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"
import { ItemListConteiner } from "../ItemListContainer/ItemListContainer"


export const HomeContainer= () =>{

    return(
        <div className="text-center">
            <h1>BIENVENIDO A LA HOME!!</h1>
            <br/>
            <h2>Este es el listado de todos los productos</h2>
            <ItemListConteiner/>
            <ItemDetailContainer/>
        </div>
    )
}
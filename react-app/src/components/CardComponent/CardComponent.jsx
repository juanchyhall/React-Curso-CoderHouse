import { ItemCount } from '../ItemCount/ItemCount.jsx';
import './CardComponent.css';

export const CardComponent = (props) => {
 
return(
   /*  <div className="card"> */
        <div className="container">
            <div className="text-center" >
            <h5 className="h5">{props.data.nombre}</h5>
            <p>{props.data.descripcion}</p>
            <ItemCount stock="10" initial="1"/>
            <button className="btn btn-info">Go for it</button>
            </div>
        </div>

   /*  </div> */
)


}
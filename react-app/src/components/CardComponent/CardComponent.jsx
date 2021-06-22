import { ItemCount } from '../ItemCount/ItemCount.jsx';
import './CardComponent.css';

export const CardComponent = ({data}) => {

return(
   /*  <div className="card"> */
        <div className="container">
            <div className="text-center" >
            <h5 className="h5">{data.nombre}</h5>
            <p>{data.descripcion}</p>
            <ItemCount stock="10" initial="1"/>
            <button className="btn btn-info">Go for it</button>
            </div>
        </div>

   /*  </div> */
)


}
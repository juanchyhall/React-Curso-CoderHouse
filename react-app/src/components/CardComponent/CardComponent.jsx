import { ItemCount } from '../ItemCount/ItemCount.jsx';
import './CardComponent.css';

export const CardComponent = (props) => {
return(
    <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="container">
            <div className="text-center" >
            <h5 className="h5">Tarjeta</h5>
            <p> Descripcion de la tarjeta</p>
            <ItemCount stock="10" initial="1"/>
            <button className="btn btn-info">Go for it</button>
            </div>
        </div>

    </div>
)


}
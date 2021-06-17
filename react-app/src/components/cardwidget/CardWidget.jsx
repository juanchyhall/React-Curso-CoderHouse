/*PANTALLA DE JUANCHI*/
import './CardWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

export const CardWidgetComponent = () =>{

    return(
        <div className="CardWidgetIcon">
        <FontAwesomeIcon icon={faShoppingCart}/>
      </div>

)

}
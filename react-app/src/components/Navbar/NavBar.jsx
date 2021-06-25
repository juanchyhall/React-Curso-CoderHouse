import { CardWidgetComponent } from "../cardwidget/CardWidget";
/* import {Navbar} from 'react-bootstrap/Navbar'; */
export const NavBarComponent = () =>{
    const shopName = 'Tienda Virtual'
    return(
        
        <div className="App">
        <header className="Bar">
          <p className="Logo">{shopName}</p>
          <nav className="Nav">
            <ul className="links">
              <li className="link"><a href="">Home</a></li>
              <li className="link"><a href="">Productos</a></li>
              <li className="link"><a href="">Envios</a></li>
              <li className="ponele"><a href="">Contacto</a></li>
              <li><CardWidgetComponent/></li>
        
              
            </ul>
          </nav>
        </header>
      </div>
      
    )
}


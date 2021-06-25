import { CardWidgetComponent } from "../cardwidget/CardWidget";
/* import {Navbar} from 'react-bootstrap/Navbar'; */
export const NavBarComponent = () => {
 
  return (

    <div className="App">
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand" >E-Commerce</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="#">Productos</a>
            <a className="nav-link" href="#">Envios</a>
            <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Contacto</a>
            <a><CardWidgetComponent /></a>
          </div>
        </div>
      </nav>
    </div>

  )
}
import './App.css';
import { NavBarComponent } from './components/Navbar/NavBar.jsx';
import './components/Navbar/NavBar.css';
import { ItemListConteiner } from './components/containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {


  return (
    <div className="app">
      <BrowserRouter>
      <NavBarComponent/>
      <Switch>
      <Route exact path="/" />
          <Route path="/category/:id" component={ItemListConteiner} />
          <Route path="/item/:id" component={ItemDetailContainer} />
      

      <ItemListConteiner greeting={'Bienvenido!'} />
      <ItemDetailContainer/>

      </Switch>
      <div>
        <footer>Algo</footer>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;

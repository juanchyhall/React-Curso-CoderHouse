import './App.css';
import { NavBarComponent } from './components/Navbar/NavBar.jsx';
import './components/Navbar/NavBar.css';
import { ItemListConteiner } from './components/containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { HomeContainer } from './components/containers/HomeContainer/HomeContainer';

function App() {


  return (
    <div className="app">
      <BrowserRouter>
      <NavBarComponent/>
      <Switch>
      <Route exact path="/" component={HomeContainer}/>
          <Route path="/category/:id" component={ItemListConteiner} />
          <Route path="/items/" component={ItemDetailContainer} />

      </Switch>
      </BrowserRouter>
      <div>
        <footer>Algo de algo</footer>
      </div>
    </div>
  )
}

export default App;

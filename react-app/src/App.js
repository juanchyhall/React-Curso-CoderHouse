import './App.css';
import { NavBarComponent } from './components/Navbar/NavBar.jsx';
import './components/Navbar/NavBar.css';
import { ItemListConteiner } from './components/containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <div className="app">
      <NavBarComponent />
      <ItemListConteiner greeting={'Bienvenido!'} />
      <ItemDetailContainer/>
    </div>
  )
}

export default App;

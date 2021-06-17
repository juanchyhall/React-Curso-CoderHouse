import './App.css';
import {NavBarComponent} from './components/Navbar/NavBar.jsx';
import './components/Navbar/NavBar.css';
import {ItemListConteiner} from './components/containers/ItemListContainer/ItemListContainer';
function App() {

  

  return (
  <div>
   <NavBarComponent/>
   <ItemListConteiner/>
  </div>
  )
}

export default App;

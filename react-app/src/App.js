import './App.css';
import {NavBarComponent} from './components/Navbar/NavBar.jsx';
import './components/Navbar/NavBar.css';
import {ItemListConteiner} from './components/containers/ItemListContainer/ItemListContainer';
function App() {

  const product = [
      { name:'Algo' }
    ]; 


  return (
  <div>
   <NavBarComponent/>
   <ItemListConteiner data={product}  greeting={'Holish'}/>
  </div>
  )
}

export default App;

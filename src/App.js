import './App.css';
import NavBar from './components/Header/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div>
        <NavBar/>
        <ItemDetailContainer idProducto={1}/>
        <ItemListContainer/>
      
    </div>
   
  );
}

export default App;

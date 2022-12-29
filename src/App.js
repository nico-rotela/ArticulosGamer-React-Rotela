import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import CartWidget from './components/navbar/cartWidget/cartWidget';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CartWidget />
      <ItemListContainer greeting="Bienvenido a ArticulosGamer, pronto tendremos la lista de productos"/>
      <img src={logo} className="App-logo" alt="logo" />        
    </div>
  );
}

export default App;

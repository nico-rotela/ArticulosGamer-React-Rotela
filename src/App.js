import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/item/:productoId' element={<ItemDetailContainer/>}/>
       </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import AppRouter from './routes/AppRputer';
import { CartProvider } from './Context/CartContext';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            <AppRouter />
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;

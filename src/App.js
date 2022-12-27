import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={logo} className="App-logo" alt="logo" />        
    </div>
  );
}

export default App;
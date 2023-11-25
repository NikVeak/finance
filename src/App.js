import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import ItemStock from "./ItemStock";
import Header from './components/Header';
import ListStock from './components/ListStock';
import ListCurrency from './components/ListCurrency';
import ListCommodity from './components/ListCommodity';
import Forecast from './components/Forecast';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-basis">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/list_stock" element={<ListStock/>}/>
          <Route path="/list_currencies" element={<ListCurrency/>}/>
          <Route path="/list_indexes" element={<ListStock/>}/>
          <Route path="/list_commodities" element={<ListCommodity/>}/>
          <Route path="/forecast" element={<Forecast/>}/>
          <Route path="/stock/:symbol" element={<ItemStock/>}/>
        </Routes>
      </div>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;

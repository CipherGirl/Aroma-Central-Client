import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AddItem from './Components/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="item/add" element={<AddItem />}></Route>
      </Routes>
    </div>
  );
}

export default App;

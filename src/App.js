import React,{useState} from 'react';
import CartIcon from './components/carticon/CartIcon.component.jsx';
import './App.css'

const  App = () => {
  const [countValue, setCountValue] = useState(0)
   const Onincreament = () => {
      setCountValue(countValue + 1)
   }
   const Ondecreament = () => {
    setCountValue(countValue - 1)
 }
 const Onremove = () => {
  setCountValue(0)
 }
  return (
    <div className="App">
    <div className='header'>
    <div className="Cartcount">
    <h1>CART COUNTER</h1>
    </div>
    <div className="cartIcon">
    <CartIcon count={countValue} />
    </div>
    </div>
      <span className="count">{countValue}</span>
      <button className="increament-button" onClick={Onincreament}>Increament</button>
      <button className="decreament-button" onClick={Ondecreament}>Decreament</button>
      <button className="remove-button" onClick={Onremove}>Delete</button>
      </div>
  );
}
export default App;


import './App.css';

import Main from './Main';
import React from 'react';
import Cart from './Cart';
import {Route, Routes} from 'react-router-dom';
import Detail from './Detail';
function App() {
 

  const [cartprice, setCartPrice] = React.useState(0);
  const [cartCount, setCartCount] = React.useState(0);
  return (
    <Routes>
      <Route path='/' element={<Main cartprice = {cartprice} setCartPrice = {setCartPrice} cartCount = {cartCount} setCartCount = {setCartCount}/>}/>
      {/* <Route path='/' element={<Main price = {cartprice} />}/> */}
      <Route path='/cart' element={<Cart price = {cartprice} setCartPrice = {setCartPrice} cartCount = {cartCount} setCartCount = {setCartCount} />}/>
      <Route path='/detail/:id' element={<Detail cartprice = {cartprice} setCartPrice = {setCartPrice} cartCount = {cartCount} setCartCount = {setCartCount}/>}/>
    </Routes>
    
  );
}

export default App;

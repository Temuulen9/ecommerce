import React from 'react'
import './Main.css';
import Nav from './Nav';
import Product from './Product';

function Main(props) {
    function handle(e){
        console.log(e.target)
    }

  return (
    <div className='main'>
        <Nav price_sum = {props.cartprice} count_product = {props.cartCount}/>
        <div className='sub'>
        <div className='top'>
            <h1>
                Featured Product
            </h1>
        </div>
        <div className='bottom'>
            <Product id = "1" title = "Crab Pool Security" price = "30.00" image = "https://pngimg.com/uploads/beef/beef_PNG85.png" handle = {(price) => props.setCartPrice(prevPrice => prevPrice + price)}/>
            <Product id = "2" title = "Crab Pool Security" price = "12.00" image = "https://pngimg.com/uploads/beef/beef_PNG85.png" handle = {(price) => props.setCartPrice(prevPrice => prevPrice + price)}/>
            <Product id = "3" title = "Crab Pool Security" price = "15.00" image = "https://pngimg.com/uploads/beef/beef_PNG85.png" handle = {(price) => props.setCartPrice(prevPrice => prevPrice + price)}/>
            <Product id = "4" title = "Crab Pool Security" price = "23.00" image = "https://pngimg.com/uploads/beef/beef_PNG85.png" handle = {(price) => props.setCartPrice(prevPrice => prevPrice + price)}/>
        </div>
    </div>
    </div>
  )
}

export default Main
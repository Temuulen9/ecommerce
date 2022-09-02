import React from 'react'
import Nav from './Nav'
import './Cart.css';
function Cart(props) {
  return (
    <div className='cart'>
        <Nav price_sum = {props.price} count_product = {props.cartCount}/>
        <div className='cart_main'>
               <div className='cart_top'>
                    <h1>
                        Миний сагс
                    </h1>
                </div>
                <div className='cart_table'>
                    <div className='card_empty'>
                        <button className='card_button'>
                        Сагс хоослох
                        </button>
                    </div>
                    <div className='cart_name'>
                        Бүтээгдэхүүний нэр
                    </div>
                    <div className='cart_price'>
                        Нэгж үнэ
                    </div>

                    <div className='card_quantity'>
                        Тоо ширхэг
                    </div>
                    <div className='card_all_price'>
                        Нийт үнэ
                    </div>
                   
                    
                </div> 
        </div>
    </div>
  )
}

export default Cart
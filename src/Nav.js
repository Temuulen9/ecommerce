import './Nav.css';
import {Link} from 'react-router-dom';

export default function Nav(props){



    return(
        <div className="nav_main">
            <div className="nav_image">
                <Link to="/" className='link'>
                    <img src="https://cdn.emartmall.mn/Resource/banner/66570638-089f-4364-977e-0c208629544f.png" className="img" alt=''/>
                </Link>
                
            </div>
            <Link to="/cart" style={{ textDecoration: 'none', color: '#63666a' }}>
            <div className="nav_cart">
                <div className='nav_my_cart'>Миний сагс</div>
                <div className='nav_my_price'>{props.price_sum}₮</div>
                <div className='item_counter'>
                        {props.count_product}
                </div>
            </div>
            </Link>
            
        </div>
    )
}
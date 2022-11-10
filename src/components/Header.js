import React from 'react'
import "../App.css";
import { useSelector, useDispatch } from 'react-redux';
import { searchProduct } from '../redux/prodcutAction';
import { Link } from 'react-router-dom';

const Header = () => {
    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch();
    console.log("redux data :: ", result);
    return (
        <div className='header'>
            <Link to="/">
                <h1>
                    E.COM
                </h1>
            </Link>
            <div className='search'>
                <input type="text" onChange={(e) => dispatch(searchProduct(e.target.value))} name="" placeholder='Search product' />
            </div>
            <div className='cart'>
                <span> {result.length}</span>
                <span>
                    <Link to="/cart"><img src="cart.svg" alt="cart" width={25} height={25} /></Link>
                </span>
            </div>
        </div>
    )
}

export default Header;
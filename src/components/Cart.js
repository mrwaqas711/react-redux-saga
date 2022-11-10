import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    const amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next);
    console.log("amount ::", amount);
    return (
        <div >
            <div className='product-cart'>
                <Link to="/">Product List</Link>
                <div>
                    cart products
                </div>
            </div>
            <div className='cart-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData.map((item) =>
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.color}</td>
                                    <td>{item.price}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.category}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='price-details'>
                    <div className='price-adjust'>
                        <span>Amount</span>
                        <span>{amount}</span>
                    </div>
                    <div className='price-adjust'>
                        <span>Discount</span>
                        <span>{amount / 10}</span>
                    </div>
                    <div className='price-adjust'>
                        <span>Tax</span>
                        <span>{Math.floor(amount / 98)}</span>
                    </div>
                    <div className='price-adjust'>
                        <span>Total</span>
                        <span>{amount - (amount / 10) - Math.floor(amount / 98)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
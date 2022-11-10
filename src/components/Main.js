import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, emptycart, removetocart } from '../redux/actions';
import { productList } from '../redux/prodcutAction';

const Main = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData);
    console.log("data in main component from saga::", data)

    useEffect(() => {
        dispatch(productList());
    }, []);


    return (
        <div className='App'>
            <button onClick={() => dispatch(emptycart())}>Empty Cart</button>
            <div className='product-container'>
                {
                    data.map((item) =>
                        <div key={item.id} className="product-card">
                            <img src={item.photo} alt="photo" width={200} height={200} />
                            <div>Name: {item.name}</div>
                            <div>Brand: {item.brand}</div>
                            <div>
                                Price: {item.price}
                            </div>
                            <div>
                                Color: {item.color}
                            </div>
                            <div>
                                Category: {item.category}
                            </div>
                            <div>
                                <button onClick={() => dispatch(addtocart(item))}>Add to Cart</button>
                                <button onClick={() => dispatch(removetocart(item.id))}>Remove from Cart</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Main;
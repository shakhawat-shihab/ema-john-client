import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../dB.js';

const OrderReview = () => {
    const [prodcuts, setProducts] = useProducts();
    const [cart, setCart] = useCart(prodcuts);
    function removeFromCart(prodKey) {
        removeFromDb(prodKey);
        const newArr = cart.filter(x => x.key !== prodKey)
        //console.log('cart  ', cart);
        //console.log('newArr  ', newArr);
        setCart(newArr);
    }
    return (
        <div className='mt-5 pt-4'>
            <h2>This is order review</h2>
            {/* <h1>{prodcuts.length}</h1> */}
            {/* <h2>{cart.length}</h2> */}
            <div className='row justify-content-center g-0 '>
                <div className='col col-lg-8 border-end ps-5'>
                    {cart.map(x => <ReviewItem data={x} key={x.key} eventHandler={removeFromCart}  ></ReviewItem>)}
                </div>
                <div className='col col-lg-3 mx-auto mt-4'>
                    <Cart data={cart} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;
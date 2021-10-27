import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb, clearTheDd } from '../../dB.js';
import Search from '../Search/Search';
import { Link, useHistory } from 'react-router-dom';

const OrderReview = () => {
    const [prodcuts, setProducts] = useProducts();
    const [cart, setCart] = useCart(prodcuts);
    const history = useHistory();
    function removeFromCart(prodKey) {
        removeFromDb(prodKey);
        const newArr = cart.filter(x => x.key !== prodKey)
        //console.log('cart  ', cart);
        //console.log('newArr  ', newArr);
        setCart(newArr);
    }
    function handlePlaceOrder() {
        history.push('/shipping');
        // clearTheDd();
        // setCart([]);
    }
    return (
        <div className=''>
            {/* <h2>This is order review</h2> */}
            <Search></Search>
            <div className='row justify-content-center g-0 pt-3'>
                <div className='col col-lg-8 border-end ps-5'>
                    {cart.map(x => <ReviewItem data={x} key={x.key} eventHandler={removeFromCart}  ></ReviewItem>)}
                </div>
                <div className='col col-lg-3 mx-auto mt-4'>
                    <Cart data={cart} >
                        <button className='btn btn-primary' onClick={handlePlaceOrder} >Proceed to Shipping</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;
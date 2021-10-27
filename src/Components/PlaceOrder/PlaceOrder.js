import React from 'react';
import img from '../../images/giphy.gif';

const PlaceOrder = () => {
    return (
        <div className='mt-5 pt-4 text-center'>
            <h2>Order Placed</h2>
            <img src={img} alt="Like" />
        </div>
    );
};

export default PlaceOrder;
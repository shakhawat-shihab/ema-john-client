import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cartProduct = props.data;
    console.log('cart ', cartProduct);
    let orderCount = 0, price = 0, shipping = 0, tax = 0, total = 0;
    for (const element of cartProduct) {
        //console.log(element.count);
        orderCount = orderCount + (element.count ? element.count : 1);
        price = price + (element.count ? element.count * element.price : element.price);
        shipping = shipping + (element.count ? element.count * element.shipping : element.shipping);
    }
    tax = (price + shipping) * .10;
    total = price + shipping + tax;
    //console.log('orderCount', orderCount, 'price', price, 'shipping', shipping, 'total', total);
    return (
        <div className='border p-3 shadow text-center rounded'>
            <h3 className='fw-bold text-primary' >Shopping Cart</h3>
            <table className='align-left w-75 mx-auto'>
                <thead></thead>
                <tbody>
                    <tr >
                        <td><h5 className=' text-primary '>Item Count </h5></td>
                        <td><h5 className=' text-primary  align-right'>{cartProduct.length}</h5></td>
                    </tr>
                    <tr >
                        <td><h5 className=' text-primary mb-4'>Product Count </h5></td>
                        <td><h5 className=' text-primary mb-4 align-right'>{orderCount}</h5></td>
                    </tr>
                    <tr className='border-bottom'>
                        <td><h6>Price </h6></td>
                        <td><h6 className='align-right'>{price.toFixed(2)}</h6></td>
                    </tr>
                    <tr className='border-bottom'>
                        <td><h6>Shipping </h6></td>
                        <td><h6 className='align-right'>{shipping.toFixed(2)}</h6></td>
                    </tr>
                    <tr className='border-bottom'>
                        <td><h6>Tax </h6></td>
                        <td><h6 className='align-right'>{tax.toFixed(2)}</h6></td>
                    </tr>
                    <tr className='border-bottom'>
                        <td><h5 className='fw-bold text-warning'>Total </h5></td>
                        <td><h5 className='fw-bold text-warning align-right'>{total.toFixed(2)}</h5></td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    );
};

export default Cart;
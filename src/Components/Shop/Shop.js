import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromDb } from '../../dB';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./Products.JSON')
            .then(resp => resp.json())
            .then(json => setProduct(json))
    }, []);
    useEffect(() => {
        if (product.length) {
            const cartProduct = getDataFromDb();
            const newArrayOfProduct = [];
            for (const key in cartProduct) {
                const newProduct = product.find(x => x.key === key);
                if (newProduct) {
                    newProduct['count'] = cartProduct[key];
                    newArrayOfProduct.push(newProduct);
                }
            }
            setCart(newArrayOfProduct);
        }
    }, [product])
    function addToCart(prod) {
        const newArr = [];
        //const arr = [...cart]
        //console.log('arr', arr);
        let flag = 0;
        for (const iterator of cart) {
            if (iterator.key === prod.key) {
                iterator.count += 1;
                flag = 1;
            }
            newArr.push(iterator);
        }
        if (flag === 0) {
            prod.count = 1
            newArr.push(prod);
        }
        console.log('new', newArr);
        setCart(newArr);
        addToDb(prod.key);
    }

    return (
        <div>
            <div className='row justify-content-center g-0'>
                <div className='col col-lg-8 border-end ps-5'>
                    {product.map(x => <Product data={x} key={x.key} eventHandler={addToCart} ></Product>)}
                </div>
                <div className='col col-lg-3 mx-auto mt-4'>
                    <Cart data={cart} ></Cart>
                </div>

            </div>

        </div>
    );
};

export default Shop;
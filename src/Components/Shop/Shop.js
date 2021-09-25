import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromDb } from '../../dB';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    useEffect(() => {
        fetch('./Products.JSON')
            .then(resp => resp.json())
            .then(json => {
                setProduct(json);
                setFilteredProduct(json);
            })
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
        // console.log('prod--', prod);
        const newArr = [];
        let flag = 0;
        for (const iterator of cart) {
            if (iterator.key === prod.key) {
                iterator.count += 1;
                flag = 1;
            }
            newArr.push(iterator);
        }
        //flag=0 means the product is new product to cart
        if (flag === 0) {
            prod.count = 1
            newArr.push(prod);
        }
        console.log('new', newArr);
        setCart(newArr);
        addToDb(prod.key);
    }
    function searchProduct(event) {
        const pattern = event.target.value.trim().toLowerCase();
        //console.log(pattern)
        const filteredResult = product.filter(x => x.name.toLowerCase().includes(pattern)
            // if (x.name.toLowerCase().includes(pattern)) {
            //     return x;
            // }

        );
        console.log(filteredResult.length);
        setFilteredProduct(filteredResult);
    }

    return (
        <div>
            <Header eventHandler={searchProduct}></Header>
            <div className='row justify-content-center g-0 mt-5 pt-3'>
                <div className='col col-lg-8 border-end ps-5'>
                    {filteredProduct.map(x => <Product data={x} key={x.key} eventHandler={addToCart} ></Product>)}
                </div>
                <div className='col col-lg-3 mx-auto mt-4'>
                    <Cart data={cart} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
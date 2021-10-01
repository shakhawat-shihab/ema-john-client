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
        //console.log('prod--', prod);
        let newArr = []
        const index = cart.indexOf(prod);
        if (index === -1) {
            prod.count = 1;
            newArr = [...cart, prod];
        }
        else {
            cart[index].count += 1;
            newArr = [...cart];
        }
        //console.log('new--- ', newArr);
        setCart(newArr);
        addToDb(prod.key);
    }
    function searchProduct(event) {
        const pattern = event.target.value.trim().toLowerCase();
        //console.log(pattern)
        const filteredResult = product.filter(x => x.name.toLowerCase().includes(pattern)
        );
        console.log(filteredResult.length);
        setFilteredProduct(filteredResult);
    }

    return (
        <div>
            <Header eventHandler={searchProduct} ></Header>
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

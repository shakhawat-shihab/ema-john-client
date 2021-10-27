import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromDb } from '../../dB';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const Shop = () => {
    const [product, setProduct] = useState([]);
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useCart([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;
    // useEffect(() => {
    //     fetch('./Products.JSON')
    //         .then(resp => resp.json())
    //         .then(json => {
    //             setProduct(json);
    //             setFilteredProduct(json);
    //         })
    // }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(resp => resp.json())
            .then(json => {
                setProduct(json.products);
                setFilteredProduct(json.products);
                const count = json.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page]);
    // useEffect(() => {
    //     //after loading the product the cart should be set 
    //     //cart must hold the product (whose id is present in local db) and corresponding quantity also
    //     if (product.length) {
    //         const cartProduct = getDataFromDb();
    //         const newArrayOfProduct = [];
    //         for (const key in cartProduct) {
    //             const newProduct = product.find(x => x.key === key);
    //             if (newProduct) {
    //                 newProduct['count'] = cartProduct[key];
    //                 newArrayOfProduct.push(newProduct);
    //             }
    //         }
    //         setCart(newArrayOfProduct);
    //     }
    // }, [product])
    function addToCart(prod) {
        //console.log('prod--', prod);
        let newArr = []
        // console.log('ss cart ', cart);
        let exist = -1;
        let index = 0;
        for (const element of cart) {
            if (element.key === prod.key) {
                exist = 1;
                break
            }
            index++;
        }
        // console.log('ss index ', index);
        // console.log('ss exist ', exist);
        if (exist === -1) {
            prod.count = 1;
            newArr = [...cart, prod];
        }
        else {
            cart[index].count += 1;
            newArr = [...cart];
        }
        // console.log('ss new ', newArr);
        setCart(newArr);
        addToDb(prod.key);
    }
    function searchProduct(event) {
        const pattern = event.target.value.trim().toLowerCase();
        //console.log(pattern)
        const filteredResult = product.filter(x => x.name.toLowerCase().includes(pattern)
        );
        // console.log(filteredResult.length);
        setFilteredProduct(filteredResult);
    }

    return (
        <div>
            <Search eventHandler={searchProduct} ></Search>
            <div className='row justify-content-center g-0'>
                <div className='col col-lg-8 border-end ps-5 pt-3'>
                    {filteredProduct.map(x => <Product data={x} key={x.key} eventHandler={addToCart} ></Product>)}
                    <div className='text-center'>
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                className={'mx-2 btn btn-primary' + (number === page ? 'fw-bold bg-info text-dark' : ' ')}
                                key={number} onClick={() => { setPage(number) }}
                            >
                                {number + 1}
                            </button>)
                        }
                    </div>
                </div>
                <div className='col col-lg-3 mx-auto mt-4'>
                    <Cart data={cart} >
                        <Link to='/order-review' >
                            <button className='btn btn-primary' >Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;

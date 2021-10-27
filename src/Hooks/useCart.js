import { useEffect } from "react";
import { useState } from "react";
import { getDataFromDb } from "../dB";

function useCart() {
    const savedProduct = getDataFromDb();
    //console.log(savedProduct);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const keys = Object.keys(savedProduct);
        console.log(keys);
        fetch('http://localhost:5000/product/bykey', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(resp => resp.json())
            .then(products => {
                // console.log(products);
                const CartProducts = [];
                for (const key in savedProduct) {
                    // console.log(key)
                    for (const prod of products) {
                        if (prod.key === key) {
                            prod['count'] = savedProduct[key];
                            CartProducts.push(prod);
                        }
                    }
                }
                console.log('CartProducts ', CartProducts);
                setCart(CartProducts);
            });
    }, []);
    return [cart, setCart];
}
export default useCart;
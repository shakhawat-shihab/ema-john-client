import { useEffect } from "react";
import { useState } from "react";
import { getDataFromDb } from "../dB";

function useCart(products) {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const cartProduct = getDataFromDb();
            const newArrayOfProduct = [];
            for (const key in cartProduct) {
                const newProduct = products.find(x => x.key === key);
                if (newProduct) {
                    newProduct['count'] = cartProduct[key];
                    newArrayOfProduct.push(newProduct);
                }
            }
            setCart(newArrayOfProduct);
        }
    }, [products]);
    return [cart, setCart];

}
export default useCart;
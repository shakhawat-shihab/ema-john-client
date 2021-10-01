import { useEffect } from "react";
import { useState } from "react";

function useProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(resp => resp.json())
            .then(json => setProducts(json));
    }, []);
    //return necessary things
    return [products, setProducts];
}
export default useProducts;
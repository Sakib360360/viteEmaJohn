import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products'

const Shop = () => {
    
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (prod) =>{
        const newCart = [...cart,prod]
        setCart(newCart)
    }
    return (
        <div>
            
            <div className="grid grid-cols-8">
                <div className="col-span-6">
                    <Products handleAddToCart={handleAddToCart} products={products} 
                           ></Products>
                </div>
                <div className="col-span-2">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
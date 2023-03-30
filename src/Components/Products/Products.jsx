import React from 'react';
import Product from '../Product/Product'
const Products = (props) => {
    const products = props.products
    const handleAddToCart = props.handleAddToCart
    return (
        <div>
            <h1 className='text-3xl text-center py-4'>Here are the total available products right now!!!</h1>
            <div className='grid grid-cols-3'>
            {
                products.map(product =><Product className="border border-gray-600" key={product.id}
                 product={product} handleAddToCart={handleAddToCart}
                 ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;
import React from 'react';

const Product = (props) => {
    const product = props.product
    const handleAddToCart =props.handleAddToCart
    return (
        <div className=''>
                <div className="card w-60 bg-base-100 shadow-xl">
                    <figure><img src={product.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>Price: {product.price}$</p>
                        <div className="card-actions justify-end">
                        <button onClick={()=>{handleAddToCart(product)}} className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Product;
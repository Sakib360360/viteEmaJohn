import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    return (
        <div className='bg-yellow-800 h-screen sticky top-16 z-10'>
            <h1 className='text-3xl text-center text-white font-bold'> Order summary</h1>
            <div className='text-1xl ml-3 py-4 text-white'>
                <h1>Selected items:{cart.length}</h1>
                <h1>Total price:</h1>
                <h1>Tax:</h1>
                <h1 className='mt-10'>Grand Total:</h1>
            </div>
        </div>
    );
};

export default Cart;
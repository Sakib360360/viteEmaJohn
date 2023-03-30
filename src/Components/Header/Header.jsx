import React from 'react';

const Header = () => {
    return (
        <div className='sticky top-0 z-20'>
            <div className="navbar bg-neutral text-white flex justify-between">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">EmaJohn</a>
                </div>
                <div className="mr-12">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Shop</a></li>
                    <li><a>Inventory</a></li>
                    </ul>
                </div>
                
                </div>
        </div>
    );
};

export default Header;
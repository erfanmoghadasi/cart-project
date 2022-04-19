import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../../contex/CartContextProvider';

const Navbar = () => {
    const {state} = useContext(CartContext)
    return (
        <div>
            <Link to='/products'>Products</Link>
            <div>
                <Link to='cart'>cart svg</Link>
                <span>{state.itemCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;
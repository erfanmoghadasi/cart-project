import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//helper functions
import { shorten } from '../../helper/functions';

//Context
import { cartContext } from '../../contex/cartContextProvider';

const Product = ({productsData}) => {
    const {state , dispatch} = useContext(cartContext)
    return (
        <div>
            <img alt='product' src={productsData.image} style={{width:'200px'}} />
            <h3>{shorten(productsData.title)}</h3>
            <p>{productsData.price} $</p>
            <div>
                <Link to={`/products/${productsData.id}`}>details</Link>
                </div>
            <div>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default Product;
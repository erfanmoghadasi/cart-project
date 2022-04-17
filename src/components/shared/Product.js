import React from 'react';
import { shorten } from '../helper/functions';

const Product = ({productsData}) => {
    return (
        <div>
            <img alt='product' src={productsData.image} style={{width:'200px'}} />
            <h3>{shorten(productsData.title)}</h3>
            <p>{productsData.price}</p>
            <div>details</div>
            <div>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default Product;
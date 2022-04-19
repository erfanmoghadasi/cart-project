import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//helper functions
import  { shorten, isInCart, quantityCount } from '../../helper/functions';

//Context
import { CartContext } from '../../contex/CartContextProvider';

const Product = ({productsData}) => {
    const {state , dispatch} = useContext(CartContext)
    return (
        <div>
            <img alt='product' src={productsData.image} style={{width:'200px'}} />
            <h3>{shorten(productsData.title)}</h3>
            <p>{productsData.price} $</p>
            <div>
                <Link to={`/products/${productsData.id}`}>details</Link>
                </div>
            <div>
                {
                    isInCart(state , productsData.id) ?
                    <button onClick={() => dispatch({type: 'INCREASE' , payload: productsData})}>+</button> :
                    <button onClick={() => dispatch({type: 'ADD_ITEM' , payload: productsData})}>Add to Cart</button>
                }
                { quantityCount(state, productsData.id) > 1 && <button onClick={() => dispatch({type: 'DECREASE' , payload: productsData})}>-</button>}
                { quantityCount(state, productsData.id) === 1 && <button onClick={() => dispatch({type: 'REMOVE_ITEM' , payload: productsData})}>remove</button>}
            </div>
        </div>
    );
};

export default Product;
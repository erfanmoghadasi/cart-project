import React, { useContext } from 'react';

//Context
import { CartContext } from '../../contex/CartContextProvider';

//helper functions
import  { shorten} from '../../helper/functions';

const Cart = (props) => {
    const {image , title , price , quantity} = props.data;
    const {dispatch} = useContext(CartContext)
    return (
        <div>
            <img src={image} alt='product' />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type: "DECREASE" , payload: props.data})}>-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props.data})}>remove</button> 
                }
                <button onClick={() => dispatch({type: "INCREASE" , payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;
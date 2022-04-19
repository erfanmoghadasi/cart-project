import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../contex/CartContextProvider';

//Components
import Cart from './shared/Cart';

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            <div>
            {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>


            {
                state.itemCounter > 0 && <div>
                    <p><span>total items :</span>{state.itemCounter}</p>
                    <p><span>total payments :</span>{state.total}</p>
                    <div>
                        <button onClick={() => dispatch({type: 'CHECKOUT'})}>checkout</button>
                        <button onClick={() => dispatch({type: 'CLEAR'})}>clear</button>
                    </div>
                </div>
            }

            {
                state.checkout && <div>
                    <h3>checkout is successfully</h3>
                    <Link to='/products'>Buy more</Link>
                </div>
            }
            
            {
                !state.checkout && state.itemCounter === 0 && <div>
                    <h3>want to buy?</h3>
                    <Link to='/products'>go to products</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;
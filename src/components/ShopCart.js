import React, { useContext } from 'react';

//Context
import { CartContext } from '../contex/CartContextProvider';

//Components
import Cart from './shared/Cart';

const ShopCart = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
        </div>
    );
};

export default ShopCart;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//helper functions
import  { shorten, isInCart, quantityCount } from '../../helper/functions';

//Context
import { CartContext } from '../../contex/CartContextProvider';

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Style
import styles from "./Product.module.css";

const Product = ({productsData}) => {
    const {state , dispatch} = useContext(CartContext)
    return (
        <div className={styles.container} >
            <img className={styles.cardImage} src={productsData.image} alt="product" />
            <h3>{shorten(productsData.title)}</h3>
            <p>{`${productsData.price} $`}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productsData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productsData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productsData})}><img src={trashIcon} alt="trash" /></button>}
                    {quantityCount(state, productsData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productsData})}>-</button>}
                    {quantityCount(state, productsData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productsData.id)}</span>}
                    {
                        isInCart(state, productsData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productsData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productsData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;


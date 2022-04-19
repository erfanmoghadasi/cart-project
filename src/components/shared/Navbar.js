import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { CartContext } from "../../contex/CartContextProvider";

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="cart"><img src={shopIcon} alt='shopicon' /></Link>
          <span>{state.itemCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//Context
import { ProductsContext } from "../contex/ProductContexProvider";

// Style
import styles from "./ProductDetails.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { title, price, description, category, image } = product;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="product" />
      <div className={styles.textContainer}>
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.category}><span>category : </span>{category}</p>
      </div>
      <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link to='/products'>Back to Shop</Link>
      </div>
    </div>
  );
};

export default ProductDetail;

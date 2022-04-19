import React, { useContext } from "react";
import { ProductsContext } from "../contex/ProductContexProvider";
import Product from "./shared/Product";

// Style
import styles from "./Store.module.css";


const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      {products.map((item) => {
        return <Product key={item.id} productsData={item} />;
      })}
    </div>
  );
};

export default Store;

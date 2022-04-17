import React, { useContext } from "react";
import { ProductsContext } from "../contex/ProductContexProvider";
import Product from "./shared/Product";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div style={{display: 'flex' , flexWrap: 'wrap' , justifyContent: 'space-between'}}>
      {products.map((item) => {
        return <Product key={item.id} productsData={item} />;
      })}
    </div>
  );
};

export default Store;

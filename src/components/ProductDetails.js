import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//Context
import { ProductsContext } from "../contex/ProductContexProvider";

const ProductDetail = () => {
  const { id } = useParams();
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { title, price, description, category, image } = product;
  return (
    <div>
      <img src={image} alt="product" />
      <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p><span>category : </span>{category}</p>
      </div>
      <div>
          <span>{price} $</span>
          <Link to='/products'>Back to Shop</Link>
      </div>
    </div>
  );
};

export default ProductDetail;

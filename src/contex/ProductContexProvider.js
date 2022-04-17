import React, { useEffect, useState , createContext } from "react";

//Context
import { getProducts } from "../services/api";

const ProductsContext = createContext();

const ProductContexProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(getProducts());
    };
    fetchAPI();
  }, []);

  return (
      <ProductsContext.Provider value={products}>
          {props.children}
      </ProductsContext.Provider>
  );
};

export default ProductContexProvider;

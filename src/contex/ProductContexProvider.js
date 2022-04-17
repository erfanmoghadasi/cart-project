import React, { useEffect, useState , createContext } from "react";

//Context
import { getProducts } from "../services/api";

export const ProductsContext = createContext();

const ProductContexProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);

  return (
      <ProductsContext.Provider value={products}>
          {children}
      </ProductsContext.Provider>
  );
};

export default ProductContexProvider;

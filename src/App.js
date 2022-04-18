import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

//Components
import Store from "./components/Store";
import ProductDetail from "./components/ProductDetails";

// Contex
import ProductContexProvider from "./contex/ProductContexProvider";
import CartContextProvider from "./contex/CartContextProvider";

function App() {
  return (
    <ProductContexProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContexProvider>
  );
}

export default App;

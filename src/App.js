import './App.css';
import { Route , Routes , Navigate } from 'react-router-dom';

//Components
import Store from './components/Store';

// Contex
import ProductContexProvider from './contex/ProductContexProvider';
import ProductDetail from './components/ProductDetails';

function App() {
  return (
    <ProductContexProvider>
      <Routes>
        <Route path='/products' element={<Store />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/' element={<Navigate to='/products' />} />
      </Routes>
    </ProductContexProvider>
  );
}

export default App;

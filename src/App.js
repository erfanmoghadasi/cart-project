import './App.css';

//Components
import Store from './components/Store';

// Contex
import ProductContexProvider from './contex/ProductContexProvider';

function App() {
  return (
    <ProductContexProvider>
      <Store />
    </ProductContexProvider>
  );
}

export default App;

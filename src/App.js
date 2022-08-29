import React  from 'react';

// Context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

// Components
import Landing from './Landing';

const App = () => {

  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Landing />
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
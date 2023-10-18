import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import { useCart } from './components/cartUtils';

function App() {
  const { cart, addToCart, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="App">
      <Navbar cart={cart} openCart={openCart} clearCart={clearCart} />
      <ProductList addToCart={addToCart} />
      {isCartOpen && (
        <div className="overlay" onClick={closeCart}>
          <div className="cart-container">
            <Navbar cart={cart} openCart={openCart} clearCart={clearCart} />
            <div className="cart-items">
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

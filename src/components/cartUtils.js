import { useState } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item._id !== product._id);
    setCart(updatedCart);
  };

  const clearCart = (product) => {
    const updatedCart = cart.filter((item) => item._id !== product._id);
    setCart(updatedCart);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

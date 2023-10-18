import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ cart, clearCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartIconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2C8_5zVY5_5fuE6hkoo9wjPpbBoy8b_4xg&usqp=CAU'; // Replace with your cart icon URL

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <span>ShopFree</span>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-menu-item active">
          Home
        </li>
      </ul>
      <div className="cart-icon" onClick={toggleCart}>
        <img src={cartIconUrl} alt="Cart" /> 
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>
      {isCartOpen && (
        <div className="cart-popup">
          <div className="cart-popup-header">
            <span>Your Cart</span>
            <button onClick={toggleCart}>Close</button>
          </div>
          <ul>
            {cart.map((product) => (
              <li key={product._id}>
                {product.name} - ${product.price}
                <button onClick={() => clearCart(product)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

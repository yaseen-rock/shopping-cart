import React, { useState, useEffect } from 'react';
import './ProductList.css';

function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'http://3.7.252.58:4001/product/getAllProduct',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Cookie': 'connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYXBXBV6hG8'
          },
          body: JSON.stringify({
            limit: 100,
            page: 0,
            search: ''
          })
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="product-list-container">
      
      <div className="product-cards">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="image-container">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <h3 className="product-title">{product.name}</h3>
            <p className="price">Price: ${product.price}</p>
            <p className="discount">Discount: ${product.discountAmount}</p>
            <p className="rating">Rating: {product.rating}</p>
            <button
              className="add-to-cart-button"
              onClick={() => props.addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

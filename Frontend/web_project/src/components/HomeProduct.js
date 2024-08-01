import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../products.json';
import { useCart } from '../contexts/CartContext';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    setProductList(products);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    navigate('/ProductCart');
  };

  const earrings = productList.filter(product => product.category === 'Shoes');
  const bracelets = productList.filter(product => product.category === 'Sneakers');

  return (
    <div>
      <div className="product-category">
        <h1>Shoes</h1>
        <div className="product-grid">
          {earrings.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imageURL} alt={product.name} className="product-image" />
              <div className="product-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <b><p>Price: ${product.price}</p></b>
                <div className="product-buttons">
                  <button className="view-details-button" onClick={() => window.location.href = `/product/${product.id}`}>View Details</button>
                  <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="product-category">
        <h1>Sneakers</h1>
        <div className="product-grid">
          {bracelets.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imageURL} alt={product.name} className="product-image" />
              <div className="product-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <center><b><p>Price: ${product.price}</p></b></center>
                <div className="product-buttons">
                  <button className="view-details-button" onClick={() => window.location.href = `/product/${product.id}`}>View Details</button>
                  <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ProductList;
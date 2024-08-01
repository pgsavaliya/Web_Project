


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../products.json';
import { useCart } from '../contexts/CartContext';
import './HomeProduct.css';

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

  const categorizedProducts = {
    Shoes: productList.filter(product => product.category === 'Shoes'),
    Sneakers: productList.filter(product => product.category === 'Sneakers')
  };

  return (
    <div>
      {Object.keys(categorizedProducts).map(category => (
        <div key={category} className="product-category">
          <h1>{category}</h1>
          <div className="product-grid">
            {categorizedProducts[category].map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imageURL} alt={product.name} className="product-image" />
                <div className="product-content">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p><b>Price: ${product.price}</b></p>
                  <div className="product-buttons">
                    <button className="view-details-button" onClick={() => navigate(`/product/${product.id}`)}>View Details</button>
                    <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

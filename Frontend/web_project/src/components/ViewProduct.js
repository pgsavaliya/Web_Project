import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import products from '../products.json';
import { useCart } from '../contexts/CartContext';
import './ViewProduct.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart} = useCart(); 
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found</div>;

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/ProductCart');
  };

  return (
    <div className="product-detail">
      <img src={product.imageURL} alt={product.name} />
      <div className="product-detail-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <b><p>Price: ${product.price * quantity}</p></b>

        {/* Quantity Control */}
        <div className="quantity-control">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>

        {/* Buttons */}
        <div className="product-buttons">
          <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};


export default ProductDetail;

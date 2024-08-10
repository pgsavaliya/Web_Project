import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './ProductCart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);

  // Render each cart item
  const renderCartItem = (item) => (
    <li key={item._id} className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <div className="quantity">
          <p>Quantity: {item.quantity}</p>
          <div className="quantity-control">
            <button onClick={() => updateQuantity(item._id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
            <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
          </div>
        </div>
        <button className="remove-button" onClick={() => removeFromCart(item._id)}>Remove</button>
      </div>
    </li>
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <b>Your cart is empty...!</b>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(renderCartItem)}
          </ul>
          <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
          <div className="cart-buttons">
            <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
            <button 
              className="checkout-button" 
              onClick={() => navigate('/checkout')} 
              disabled={cart.length === 0}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

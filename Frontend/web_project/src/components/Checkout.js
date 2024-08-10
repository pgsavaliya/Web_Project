import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-cart">
        <h3>Your Cart</h3>
        <ul className="checkout-cart-list">
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${parseFloat(item.price.replace('$', '')).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
      </div>

      <div className="checkout-form">
        <h3>Shipping Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" name="country" value={formData.country} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="checkout-button">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

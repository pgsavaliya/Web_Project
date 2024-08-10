import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Checkout.css';

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  });

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the products array for the API request
    const products = cart.map(item => ({
      productId: item._id,
      numberOfItem: item.quantity,
      productPrice: parseFloat(item.price),
      totalPrice: parseFloat(item.price) * item.quantity,
    }));

    // Construct the API request body
    const checkoutData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobile: formData.mobile,
      email: formData.email,
      product: products,
      subtotal: totalPrice,
      extraCharges: 0,  // Assuming no extra charges
      finalPrice: totalPrice,
      isPaid: "Yes", // Assuming the order is paid
    };

    try {
      // Send the API request
      await axios.post('http://localhost:2300/v1/user/checkout/addCheckout', checkoutData);

      // Handle successful checkout (e.g., navigate to a confirmation page)
      alert('Order placed successfully!');
      navigate('/');
    } catch (error) {
      // Handle error during checkout
      console.error('Error placing order:', error);
      alert('There was an error placing your order. Please try again.');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-cart">
        <h3>Your Cart</h3>
        <ul className="checkout-cart-list">
          {cart.map(item => (
            <li key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
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
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="checkout-button">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

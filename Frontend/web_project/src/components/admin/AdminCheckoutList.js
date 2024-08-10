import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminCheckoutList.css'; 

const AdminCheckoutList = ({ token }) => {
  const [checkouts, setCheckouts] = useState([]);

  useEffect(() => {
    // Fetch checkouts from API
    const fetchCheckouts = async () => {
      try {
        const response = await axios.get('http://localhost:2300/v1/admin/checkout/getAllCheckout', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCheckouts(response.data.data);
      } catch (error) {
        console.error('Error fetching checkouts:', error);
      }
    };
    fetchCheckouts();
  }, [token]);

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Admin - Checkout List</h2>
      <ul className="checkout-list">
        {checkouts.map(checkout => (
          <li key={checkout._id} className="checkout-item">
            <div className="checkout-details">
              <p><b>Order ID:</b> {checkout._id}</p>
              <p><b>Name:</b> {checkout.firstName} {checkout.lastName}</p>
              <p><b>Email:</b> {checkout.email}</p>
              <p><b>Total Price:</b> ${checkout.finalPrice}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCheckoutList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminCheckoutList = ({ token }) => {
  const [checkouts, setCheckouts] = useState([]);

  useEffect(() => {
    // Fetch checkouts from API
    const fetchCheckouts = async () => {
      try {
        const response = await axios.get('http://localhost:2300/v1/admin/checkout/getAllCheckouts', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCheckouts(response.data.data);
      } catch (error) {
        console.error('Error fetching checkouts:', error);
      }
    };
    fetchCheckouts();
  }, [token]);

  const handleDelete = async (checkoutId) => {
    try {
      await axios.post(`http://localhost:2300/v1/admin/checkout/deleteCheckout?_id=${checkoutId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCheckouts(checkouts.filter(checkout => checkout._id !== checkoutId));
    } catch (error) {
      console.error('Error deleting checkout:', error);
    }
  };

  return (
    <div>
      <h2>Admin - Checkout List</h2>
      <ul>
        {checkouts.map(checkout => (
          <li key={checkout._id}>
            <div>
              <p><b>Order ID:</b> {checkout._id}</p>
              <p><b>Name:</b> {checkout.firstName} {checkout.lastName}</p>
              <p><b>Email:</b> {checkout.email}</p>
              <p><b>Total Price:</b> ${checkout.finalPrice}</p>
              {/* Add more details as needed */}
            </div>
            <button onClick={() => handleDelete(checkout._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCheckoutList;

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminProductList from './AdminProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import AdminCheckoutList from './AdminCheckoutList';
import './AdminRoutes.css';

const AdminRoutes = () => {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || null);

  useEffect(() => {
    console.log('Token in AdminRoutes:', token);
  }, [token]);

  if (!token) {
    return (
      <Routes>
        <Route path="/login" element={<AdminLogin setToken={setToken} />} />
        <Route path="*" element={<Navigate to="/admin/login" />} />
      </Routes>
    );
  }

  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <NavLink to="/admin" className="nav-link" end>Admin Home</NavLink>
        <NavLink to="/admin/add" className="nav-link">Add Product</NavLink>
        <NavLink to="/admin/checkouts" className="nav-link">Checkouts</NavLink>
        <button className="logout-button" onClick={() => setToken(null)}>Logout</button>
      </nav>
      
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<AdminProductList token={token} />} />
          <Route path="/add" element={<AddProduct token={token} />} />
          <Route path="/edit/:id" element={<EditProduct token={token} />} />
          <Route path="/checkouts" element={<AdminCheckoutList token={token} />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;

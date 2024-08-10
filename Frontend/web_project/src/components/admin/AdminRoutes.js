import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminProductList from './AdminProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import AdminCheckoutList from './AdminCheckoutList';

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
    <div>
      <nav>
        <NavLink to="/admin" end>Admin Home</NavLink>
        <NavLink to="/admin/add">Add Product</NavLink>
        <NavLink to="/admin/checkouts">Checkouts</NavLink>
        <button onClick={() => setToken(null)}>Logout</button>
      </nav>
      
      <Routes>
        <Route path="/" element={<AdminProductList  token={token}/>} />
        <Route path="/add" element={<AddProduct token={token}/>} />
        <Route path="/edit/:id" element={<EditProduct token={token}/>} />
        <Route path="/checkouts" element={<AdminCheckoutList token={token} />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;


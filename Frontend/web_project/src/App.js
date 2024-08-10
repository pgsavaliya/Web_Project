import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import HomeProduct from './components/HomeProduct';
import ViewProduct from './components/ViewProduct';
import Cart from './components/ProductCart';
import Checkout from './components/Checkout';
import AdminRoutes from './components/admin/AdminRoutes';
import { CartProvider } from './contexts/CartContext';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Check if the current path starts with "/admin"
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {/* Conditionally render the nav bar */}
      {!isAdminRoute && (
        <nav>
          <center>
            <div className="company-name">PG's Shoes</div>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/ProductCart" activeClassName="active">Cart</NavLink>
            <NavLink to="/checkout" activeClassName="active">Checkout</NavLink>
          </center>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<HomeProduct />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/ProductCart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </div>
  );
};

export default App;

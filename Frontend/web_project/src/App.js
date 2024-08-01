import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom';
import HomeProduct from './components/HomeProduct';
import ViewProduct from './components/ViewProduct';
import Cart from './components/ProductCart';
import { CartProvider } from './contexts/CartContext';

import './App.css';

const App = () => {
  return (
    <CartProvider>
    <Router>
    <div>
      <nav>
        <center>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/ProductCart" activeClassName="active">Checkout</NavLink>
        </center>
      </nav>
      <Routes>
        <Route path="/" element={<HomeProduct />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/ProductCart" element={<Cart />} />
      </Routes>
    </div>
  </Router>
  </CartProvider>
  );
};
export default App;

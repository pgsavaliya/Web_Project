import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminProductList.css'; // Importing the CSS file

const AdminProductList = ({ token }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:2300/v1/admin/product/getAllProduct', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [token]);

  const handleDelete = async (productId) => {
    try {
      await axios.post(`http://localhost:2300/v1/admin/product/deleteProduct?_id=${productId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="product-list-container">
      <h2 className="title">Admin - Product List</h2>
      <Link to="/admin/add" className="add-product-link">Add Product</Link>
      <ul className="product-list">
        {products.map(product => (
          <li key={product._id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <span className="product-details">{product.name} - ${product.price}</span>
            <div className="product-actions">
              <Link to={`/admin/edit/${product._id}`} className="edit-link">Edit</Link>
              <button onClick={() => handleDelete(product._id)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductList;

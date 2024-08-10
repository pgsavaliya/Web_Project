import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminProductList = ({ token }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:2300/v1/admin/product/getAllProduct',{
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(response.data.data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.post(`http://localhost:2300/v1/admin/product/deleteProduct?_id=${productId}`,{},{
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h2>Admin - Product List</h2>
      <Link to="/admin/add">Add Product</Link>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <img src={product.image} alt={product.name} width="50" />
            <span>{product.name} - ${product.price}</span>
            <Link to={`/admin/edit/${product._id}`}>Edit</Link>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProductList;

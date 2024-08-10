import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:2300/v1/admin/product/getByIdProduct?_id=${id}`,{
        headers: { Authorization: `Bearer ${token}` }
      });
      setFormData(response.data.data);
    };
    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:2300/v1/admin/product/updateProduct?_id=${id}`, formData,{
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Product updated successfully!');
      navigate('/admin');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={formData.price} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleInputChange} required />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;

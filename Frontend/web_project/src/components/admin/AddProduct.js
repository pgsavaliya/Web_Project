import React, { useState } from "react";
import axios from "axios";

const AddProduct = ({ token }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
console.log(token)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:2300/v1/admin/product/addProduct",
        formData,
        { headers: { Authorization: `Bearer ${token}` } },
        
      );
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
  <label>Category:</label>
  <select
    name="category"
    value={formData.category}
    onChange={handleInputChange}
    required
  >
    <option value="">Select a category</option>
    <option value="Shoes">Shoes</option>
    <option value="Sneakers">Sneakers</option>
  </select>
</div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
